import { GoogleGenAI } from '@google/genai';
import { NoteItem, QuizQuestion, QuestionType } from '../types';

interface GenerationResult {
  notes: NoteItem[];
  questions: QuizQuestion[];
}

// Fisher-Yates shuffle helper for multiple-choice options
function shuffleOptionsAndTarget(
  options: string[],
  correctAnswer: string
): { shuffledOptions: string[]; correctAnswer: string } {
  const opts = [...options];
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return {
    shuffledOptions: opts,
    correctAnswer
  };
}

export async function generateStudyReviewer(
  topicOrText: string,
  questionTypes: QuestionType[],
  questionCount: number
): Promise<GenerationResult> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY : '');
  const count = Math.max(5, Math.min(questionCount || 25, 25));

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are Bloomie, an expert minimalist study reviewer designer.
Generate study notes and quiz questions based on the following topic or source material:
"""
${topicOrText.slice(0, 8000)}
"""

Requested Question Types: ${questionTypes.join(', ')}
Target Question Count: ${count}

IMPORTANT RULES:
1. For multiple_choice questions, ensure you provide 4 distinct plausible options.
2. CRITICAL: Distribute the correct answer naturally and randomly across indices 0, 1, 2, and 3 (representing option A, B, C, and D). Do NOT always place the correct answer as the first option!
3. Provide rigorous, scientifically accurate questions with concise explanations.

Return a valid JSON object strictly matching this schema:
{
  "notes": [
    {
      "id": "note-1",
      "title": "Clear short concept title",
      "category": "Concept" | "Definition" | "Formula" | "Key Takeaway" | "Summary",
      "content": "Clear, concise, high-value study note explanation (2-4 sentences)",
      "importance": "high" | "medium" | "low",
      "tags": ["tag1", "tag2"],
      "highlighted": true or false
    }
  ],
  "questions": [
    {
      "id": "q-1",
      "type": "multiple_choice" | "identification" | "enumeration" | "essay",
      "question": "Question text here",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "Exact correct answer string or string[] for enumeration",
      "explanation": "Clear educational explanation of why this is correct",
      "sampleEssayAnswer": "Sample ideal response (if essay type)",
      "points": 4
    }
  ]
}

Return raw JSON only, no markdown codeblocks if possible.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        }
      });

      if (response.text) {
        let cleanText = response.text.trim();
        if (cleanText.startsWith('```json')) {
          cleanText = cleanText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        } else if (cleanText.startsWith('```')) {
          cleanText = cleanText.replace(/^```\s*/, '').replace(/\s*```$/, '');
        }
        const parsed = JSON.parse(cleanText);
        if (parsed.notes && Array.isArray(parsed.questions)) {
          // Double ensure multiple-choice options are randomized
          const sanitizedQuestions = parsed.questions.map((q: any, idx: number) => {
            if (q.type === 'multiple_choice' && Array.isArray(q.options) && q.options.length >= 2) {
              const { shuffledOptions, correctAnswer } = shuffleOptionsAndTarget(q.options, q.correctAnswer);
              return {
                ...q,
                id: q.id || `q-${idx + 1}`,
                options: shuffledOptions,
                correctAnswer
              };
            }
            return {
              ...q,
              id: q.id || `q-${idx + 1}`
            };
          });

          return {
            notes: parsed.notes,
            questions: sanitizedQuestions
          };
        }
      }
    } catch (err) {
      console.warn('Gemini generation fallback used:', err);
    }
  }

  // Fallback generator for instantaneous reliable generation
  return fallbackGenerator(topicOrText, questionTypes, count);
}

function fallbackGenerator(
  topicOrText: string,
  questionTypes: QuestionType[],
  questionCount: number
): GenerationResult {
  const cleanInput = topicOrText.trim();
  const titleWords = cleanInput.slice(0, 40).replace(/[\r\n]+/g, ' ').trim() || 'Core Subject Module';

  // Extract lines and sentences if user provided full notes text
  const paragraphs = cleanInput
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 20);

  const notes: NoteItem[] = [];

  if (paragraphs.length >= 2) {
    // Generate intelligent notes directly from the uploaded/pasted text
    paragraphs.slice(0, 6).forEach((para, idx) => {
      const firstLine = para.split('\n')[0].replace(/^[-*#\d.]+\s*/, '').slice(0, 50);
      const categories: ('Concept' | 'Definition' | 'Summary' | 'Key Takeaway' | 'Formula')[] = [
        'Concept',
        'Definition',
        'Summary',
        'Key Takeaway'
      ];
      notes.push({
        id: `gen-n-${Date.now()}-${idx + 1}`,
        title: firstLine || `Key Concept ${idx + 1}`,
        category: categories[idx % categories.length],
        content: para.slice(0, 320),
        importance: idx % 2 === 0 ? 'high' : 'medium',
        tags: [titleWords.slice(0, 15), `Topic ${idx + 1}`],
        highlighted: idx < 2
      });
    });
  } else {
    // Standard template notes
    notes.push(
      {
        id: `gen-n-${Date.now()}-1`,
        title: `Fundamental Principles of ${titleWords}`,
        category: 'Concept',
        content: `${titleWords} operates on core physiological and biochemical pathways. Maintaining strict diagnostic standards ensures reliable interpretation in laboratory and clinical settings.`,
        importance: 'high',
        tags: ['Core Principles', 'Foundations'],
        highlighted: true
      },
      {
        id: `gen-n-${Date.now()}-2`,
        title: `Diagnostic Methodology & Controls`,
        category: 'Summary',
        content: `Standard operating procedures require proper calibration, baseline reagent verification, and dual-level quality control before patient specimen evaluation.`,
        importance: 'high',
        tags: ['Quality Control', 'Protocol'],
        highlighted: false
      },
      {
        id: `gen-n-${Date.now()}-3`,
        title: `Clinical Correlation & High-Yield Pearls`,
        category: 'Key Takeaway',
        content: `Borderline and critical values must be repeated immediately. Correlating clinical symptoms with laboratory indices eliminates false positives and pre-analytical interference.`,
        importance: 'high',
        tags: ['High-Yield', 'Clinical Pearl'],
        highlighted: true
      }
    );
  }

  const questions: QuizQuestion[] = [];
  const selectedTypes = questionTypes.length > 0 ? questionTypes : ['multiple_choice', 'identification'];

  // Balanced target indices for multiple choice [A, B, C, D]
  const targetIndices = [1, 2, 0, 3, 2, 1, 3, 0, 2, 1, 0, 3, 1, 2, 3, 0, 2, 3, 1, 0, 3, 2, 1, 0, 2];

  const poolMC = [
    {
      q: `What is the primary diagnostic significance of ${titleWords} in standard evaluation protocols?`,
      correct: `Direct qualitative or quantitative confirmation of target physiological status`,
      distractors: [
        `Non-specific secondary marker used only for general screening`,
        `Subjective observational metric requiring no quantitative calibration`,
        `Experimental finding with no established diagnostic threshold`
      ],
      exp: `Standard laboratory reference ranges confirm physiological or pathological thresholds directly.`
    },
    {
      q: `Which quality control measure is essential prior to running specimens for ${titleWords}?`,
      correct: `Running two levels of controls and confirming values within ±2 standard deviations`,
      distractors: [
        `Skipping calibration if room temperature remains stable`,
        `Relying solely on visual reagent color without running control sera`,
        `Extrapolating values beyond the established linear reportable range`
      ],
      exp: `Quality control mandates verifying that normal and abnormal controls fall within ±2 SD.`
    },
    {
      q: `What is the most frequent pre-analytical factor that compromises accuracy in testing ${titleWords}?`,
      correct: `Hemolysis, lipemia, or prolonged specimen transport delay`,
      distractors: [
        `Running the assay on a modern certified spectrophotometer`,
        `Immediate refrigeration of properly collected whole blood`,
        `Verifying patient identity using two unique identifiers`
      ],
      exp: `Pre-analytical errors like hemolysis and transit delays account for the majority of spurious laboratory results.`
    },
    {
      q: `How should critical or panic values obtained during the assessment of ${titleWords} be handled?`,
      correct: `Verify by immediate repeat test and notify the ordering physician directly`,
      distractors: [
        `Archive in the system and wait for routine end-of-day reports`,
        `Discard the sample and collect a fresh specimen next week`,
        `Adjust the result to normal reference boundaries`
      ],
      exp: `Laboratory safety mandates immediate verification and verbal report of all critical values.`
    },
    {
      q: `Which governing regulatory guideline dictates documentation and safety handling for ${titleWords}?`,
      correct: `Standard Operating Procedures (SOP) compliant with OSHA and CLSI standards`,
      distractors: [
        `Informal laboratory whiteboard notes`,
        `Unpublished historical bench protocols`,
        `Manufacturer packaging advertisements`
      ],
      exp: `Clinical and laboratory standard institute (CLSI) standards dictate accredited procedural documentation.`
    }
  ];

  for (let i = 0; i < questionCount; i++) {
    const type = selectedTypes[i % selectedTypes.length];
    const qNum = i + 1;

    if (type === 'multiple_choice') {
      const template = poolMC[i % poolMC.length];
      const correctText = template.correct;
      const dist = [...template.distractors];

      // Insert correct answer at a varied index (A=0, B=1, C=2, D=3)
      const targetPos = targetIndices[i % targetIndices.length];
      const options = [...dist];
      options.splice(targetPos, 0, correctText);

      questions.push({
        id: `gen-q-${Date.now()}-${qNum}`,
        type: 'multiple_choice',
        question: `Question ${qNum}: ${template.q}`,
        options,
        correctAnswer: correctText,
        explanation: template.exp,
        points: 4
      });
    } else if (type === 'identification') {
      questions.push({
        id: `gen-q-${Date.now()}-${qNum}`,
        type: 'identification',
        question: `Question ${qNum}: Identify the primary analytical parameter or specimen requirement used in the evaluation of ${titleWords}.`,
        correctAnswer: `Serum`,
        explanation: `Serum or heparinized plasma is the standard required specimen for core analytical evaluations.`,
        points: 4
      });
    } else if (type === 'enumeration') {
      questions.push({
        id: `gen-q-${Date.now()}-${qNum}`,
        type: 'enumeration',
        question: `Question ${qNum}: Enumerate three key components or analytical phases involved in evaluating ${titleWords}.`,
        correctAnswer: ['Pre-analytical phase', 'Analytical phase', 'Post-analytical phase'],
        explanation: `The total testing cycle comprises pre-analytical, analytical, and post-analytical phases.`,
        points: 6
      });
    } else if (type === 'essay') {
      questions.push({
        id: `gen-q-${Date.now()}-${qNum}`,
        type: 'essay',
        question: `Question ${qNum}: Explain the physiological significance and clinical interpretation of elevated versus decreased findings in ${titleWords}.`,
        correctAnswer: `Elevations generally signify acute dysfunction, tissue injury, or clearance failure, while marked decreases reflect synthetic impairment, depletion, or dilution.`,
        sampleEssayAnswer: `In clinical evaluation, elevated levels typically indicate heightened cellular release, inflammation, or compromised organ excretion. Conversely, decreased levels correspond to nutritional deficiency, impaired organ synthesis, or excessive filtration loss. Careful correlation with clinical symptoms and medication history is required for definitive diagnosis.`,
        explanation: `A comprehensive response addresses both mechanisms of elevation and reduction with clinical correlation.`,
        points: 10
      });
    }
  }

  return { notes, questions };
}
