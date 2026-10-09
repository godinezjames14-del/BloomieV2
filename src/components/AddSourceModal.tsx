import React, { useState } from 'react';
import { 
  X, 
  Upload, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  FolderPlus, 
  Sparkles, 
  Check, 
  Trash2, 
  Plus, 
  FileCode,
  Layers,
  ArrowRight,
  ListChecks,
  AlertCircle
} from 'lucide-react';
import { 
  Exam, 
  Subject, 
  Reviewer, 
  QuestionType, 
  QuizQuestion, 
  NoteItem 
} from '../types';
import { useFlowerTheme } from '../context/ThemeContext';
import { generateStudyReviewer } from '../services/geminiService';
import { predefinedSubjectPacks } from '../data/subjectPresets';

interface AddSourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  exam: Exam;
  initialSubjectId?: string;
  initialMode?: 'source' | 'subject' | 'quiz';
  onAddReviewers: (subjectId: string, reviewers: Reviewer[]) => void;
  onAddSubject: (subject: Subject) => void;
}

interface UploadedFileItem {
  file: File;
  name: string;
  size: number;
  text?: string;
}

export const AddSourceModal: React.FC<AddSourceModalProps> = ({
  isOpen,
  onClose,
  exam,
  initialSubjectId,
  initialMode = 'source',
  onAddReviewers,
  onAddSubject
}) => {
  const { theme } = useFlowerTheme();
  
  const [activeTab, setActiveTab] = useState<'source' | 'subject' | 'quiz'>(initialMode);

  // Subject selector state
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(() => {
    if (initialSubjectId && exam.subjects.some(s => s.id === initialSubjectId)) {
      return initialSubjectId;
    }
    return exam.subjects[0]?.id || '';
  });

  // Source form states
  const [sourceInputType, setSourceInputType] = useState<'files' | 'paste' | 'topic'>('files');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileItem[]>([]);
  const [combineFiles, setCombineFiles] = useState<boolean>(false);
  const [sourceTitle, setSourceTitle] = useState('');
  const [sourceSnippet, setSourceSnippet] = useState('');
  const [sourceText, setSourceText] = useState('');
  const [topicPrompt, setTopicPrompt] = useState('');
  const [questionCount, setQuestionCount] = useState<number>(25);
  const [selectedQuestionTypes, setSelectedQuestionTypes] = useState<QuestionType[]>([
    'multiple_choice',
    'identification',
    'enumeration'
  ]);
  const [generateNotes, setGenerateNotes] = useState(true);
  const [generateQuiz, setGenerateQuiz] = useState(true);
  const [testDate, setTestDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().split('T')[0];
  });

  // New Subject form states
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectDesc, setNewSubjectDesc] = useState('');
  const [newSubjectColor, setNewSubjectColor] = useState('#EE5D7E');

  // Manual Quiz questions state
  const [manualQuizTitle, setManualQuizTitle] = useState('Comprehensive Unit Quiz');
  const [manualQuestions, setManualQuestions] = useState<QuizQuestion[]>([
    {
      id: 'mq-1',
      type: 'multiple_choice',
      question: 'Enter question text here...',
      options: ['Choice A', 'Choice B', 'Choice C', 'Choice D'],
      correctAnswer: 'Choice B',
      explanation: 'Detailed explanation for correct answer.',
      points: 4
    }
  ]);

  // Loading state
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStatus, setProcessStatus] = useState('');

  if (!isOpen) return null;

  // Question type toggle
  const toggleQuestionType = (type: QuestionType) => {
    if (selectedQuestionTypes.includes(type)) {
      if (selectedQuestionTypes.length > 1) {
        setSelectedQuestionTypes(selectedQuestionTypes.filter(t => t !== type));
      }
    } else {
      setSelectedQuestionTypes([...selectedQuestionTypes, type]);
    }
  };

  // Handle multi-file selection
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    const newItems: UploadedFileItem[] = [];

    for (const f of fileList) {
      newItems.push({
        file: f,
        name: f.name,
        size: f.size
      });
    }

    setUploadedFiles(prev => [...prev, ...newItems]);
    if (!sourceTitle && newItems.length > 0) {
      setSourceTitle(newItems[0].name.replace(/\.[^/.]+$/, '').replace(/_/g, ' '));
    }
  };

  const removeUploadedFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, idx) => idx !== index));
  };

  // Helper to read file as text
  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve((e.target?.result as string) || '');
      };
      reader.onerror = () => {
        resolve('');
      };
      reader.readAsText(file);
    });
  };

  // Submit Source(s)
  const handleAddSources = async () => {
    if (!selectedSubjectId) return;
    setIsProcessing(true);

    try {
      const createdReviewers: Reviewer[] = [];

      if (sourceInputType === 'files' && uploadedFiles.length > 0) {
        setProcessStatus(`Reading ${uploadedFiles.length} file(s)...`);

        // Read all file contents
        const loadedContents = await Promise.all(
          uploadedFiles.map(async (item) => {
            const text = await readFileAsText(item.file);
            return {
              name: item.name,
              text: text || item.name
            };
          })
        );

        if (combineFiles) {
          setProcessStatus('Synthesizing combined study reviewer & 25 quiz questions...');
          const combinedText = loadedContents.map(c => `=== Source: ${c.name} ===\n${c.text}`).join('\n\n');
          const title = sourceTitle || loadedContents[0].name.replace(/\.[^/.]+$/, '');

          const res = await generateStudyReviewer(
            combinedText,
            selectedQuestionTypes,
            questionCount
          );

          createdReviewers.push({
            id: `rev-gen-${Date.now()}`,
            name: title,
            fileName: uploadedFiles.map(f => f.name).join(', '),
            fileSnippet: `Synthesized from ${uploadedFiles.length} uploaded files.`,
            testDate,
            questionTypes: selectedQuestionTypes,
            questionCount: res.questions.length,
            createdAt: new Date().toISOString().split('T')[0],
            notes: generateNotes ? res.notes : [],
            questions: generateQuiz ? res.questions : []
          });
        } else {
          // Create a reviewer for each individual file
          for (let i = 0; i < loadedContents.length; i++) {
            const item = loadedContents[i];
            setProcessStatus(`Analyzing source ${i + 1} of ${loadedContents.length}: "${item.name}"...`);
            
            const cleanTitle = item.name.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
            const res = await generateStudyReviewer(
              item.text,
              selectedQuestionTypes,
              questionCount
            );

            createdReviewers.push({
              id: `rev-gen-${Date.now()}-${i}`,
              name: cleanTitle,
              fileName: item.name,
              fileSnippet: `Extracted from ${item.name} (${Math.round(item.text.length / 100)} words).`,
              testDate,
              questionTypes: selectedQuestionTypes,
              questionCount: res.questions.length,
              createdAt: new Date().toISOString().split('T')[0],
              notes: generateNotes ? res.notes : [],
              questions: generateQuiz ? res.questions : []
            });
          }
        }
      } else if (sourceInputType === 'paste') {
        const textToUse = sourceText || 'Core Subject Module Notes';
        const titleToUse = sourceTitle || 'Pasted Source Notes';
        setProcessStatus(`Generating notes & ${questionCount} questions from text...`);

        const res = await generateStudyReviewer(
          textToUse,
          selectedQuestionTypes,
          questionCount
        );

        createdReviewers.push({
          id: `rev-gen-${Date.now()}`,
          name: titleToUse,
          fileName: `${titleToUse.replace(/\s+/g, '_')}.txt`,
          fileSnippet: sourceSnippet || textToUse.slice(0, 140) + '...',
          testDate,
          questionTypes: selectedQuestionTypes,
          questionCount: res.questions.length,
          createdAt: new Date().toISOString().split('T')[0],
          notes: generateNotes ? res.notes : [],
          questions: generateQuiz ? res.questions : []
        });
      } else {
        // Topic Prompt
        const topicToUse = topicPrompt || 'Medical Microbiology & Diagnostics';
        const titleToUse = sourceTitle || topicToUse;
        setProcessStatus(`Generating comprehensive reviewer for "${topicToUse}"...`);

        const res = await generateStudyReviewer(
          topicToUse,
          selectedQuestionTypes,
          questionCount
        );

        createdReviewers.push({
          id: `rev-gen-${Date.now()}`,
          name: titleToUse,
          fileName: `${titleToUse.replace(/\s+/g, '_')}_Module.pdf`,
          fileSnippet: `Generated comprehensive study module covering ${topicToUse}.`,
          testDate,
          questionTypes: selectedQuestionTypes,
          questionCount: res.questions.length,
          createdAt: new Date().toISOString().split('T')[0],
          notes: generateNotes ? res.notes : [],
          questions: generateQuiz ? res.questions : []
        });
      }

      if (createdReviewers.length > 0) {
        onAddReviewers(selectedSubjectId, createdReviewers);
        onClose();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
      setProcessStatus('');
    }
  };

  // Submit New Subject
  const handleCreateSubject = () => {
    if (!newSubjectName.trim()) return;

    const newSubj: Subject = {
      id: `subj-${Date.now()}`,
      name: newSubjectName.trim(),
      description: newSubjectDesc.trim() || `Course notes and quizzes for ${newSubjectName.trim()}`,
      color: newSubjectColor,
      reviewers: []
    };

    onAddSubject(newSubj);
    setSelectedSubjectId(newSubj.id);
    setActiveTab('source');
  };

  // Quick Preset Pack Addition
  const handleAddPresetPack = (pack: typeof predefinedSubjectPacks[0]) => {
    onAddSubject(pack.subjectData);
    setSelectedSubjectId(pack.subjectData.id);
    onClose();
  };

  // Add Manual Quiz Question
  const handleAddManualQuestion = () => {
    const nextIdx = manualQuestions.length + 1;
    setManualQuestions(prev => [
      ...prev,
      {
        id: `mq-${Date.now()}-${nextIdx}`,
        type: 'multiple_choice',
        question: `Question ${nextIdx}: Enter question text...`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: 'Option B',
        explanation: 'Rationale for correct answer.',
        points: 4
      }
    ]);
  };

  // Submit Dedicated Quiz
  const handleSubmitQuiz = async () => {
    if (!selectedSubjectId) return;
    setIsProcessing(true);
    setProcessStatus('Finalizing quiz...');

    try {
      const quizReviewer: Reviewer = {
        id: `rev-quiz-${Date.now()}`,
        name: manualQuizTitle || 'Subject Assessment Quiz',
        fileName: `${(manualQuizTitle || 'Assessment').replace(/\s+/g, '_')}.pdf`,
        fileSnippet: `Interactive assessment containing ${manualQuestions.length} questions.`,
        testDate,
        questionTypes: ['multiple_choice'],
        questionCount: manualQuestions.length,
        createdAt: new Date().toISOString().split('T')[0],
        notes: [],
        questions: manualQuestions
      };

      onAddReviewers(selectedSubjectId, [quizReviewer]);
      onClose();
    } finally {
      setIsProcessing(false);
      setProcessStatus('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl rounded-2xl border shadow-xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200"
        style={{ 
          backgroundColor: theme.bgCard,
          borderColor: theme.borderSubtle,
          color: theme.fontPrimary 
        }}
      >
        {/* Modal Header */}
        <div 
          className="p-4 sm:p-5 border-b flex items-center justify-between shrink-0"
          style={{ borderColor: theme.borderSubtle }}
        >
          <div className="flex items-center gap-2.5">
            <div 
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: theme.primary }}
            >
              <Sparkles className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                Add Material & Sources
              </h2>
              <p className="text-xs opacity-70">
                Add new subjects, multiple study sources, or dedicated quizzes
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors opacity-70 hover:opacity-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div 
          className="flex border-b px-4 sm:px-5 shrink-0 gap-2 overflow-x-auto"
          style={{ borderColor: theme.borderSubtle }}
        >
          <button
            onClick={() => setActiveTab('source')}
            className={`py-2.5 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'source'
                ? 'border-current font-bold'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            style={{ color: activeTab === 'source' ? theme.primary : undefined }}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Add Sources / Notes</span>
          </button>

          <button
            onClick={() => setActiveTab('subject')}
            className={`py-2.5 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'subject'
                ? 'border-current font-bold'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            style={{ color: activeTab === 'subject' ? theme.primary : undefined }}
          >
            <FolderPlus className="w-3.5 h-3.5" />
            <span>New Subject</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`py-2.5 px-3 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'border-current font-bold'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            style={{ color: activeTab === 'quiz' ? theme.primary : undefined }}
          >
            <ListChecks className="w-3.5 h-3.5" />
            <span>Build Quiz</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* TAB 1: ADD SOURCES / REVIEWERS */}
          {activeTab === 'source' && (
            <div className="space-y-4">
              {/* Target Subject Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1.5">
                  Target Subject
                </label>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedSubjectId}
                    onChange={(e) => setSelectedSubjectId(e.target.value)}
                    className="flex-1 text-xs p-2.5 rounded-xl border focus:outline-none focus:ring-1 transition-all"
                    style={{ 
                      backgroundColor: theme.bgPage,
                      borderColor: theme.borderSubtle,
                      color: theme.fontPrimary
                    }}
                  >
                    {exam.subjects.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.reviewers.length} materials)
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => setActiveTab('subject')}
                    className="px-3 py-2 text-xs font-semibold rounded-xl border flex items-center gap-1 shrink-0 hover:opacity-90"
                    style={{ 
                      borderColor: theme.primaryBorder,
                      color: theme.primary,
                      backgroundColor: theme.primaryLight 
                    }}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>New Subject</span>
                  </button>
                </div>
              </div>

              {/* Source Input Mode Switcher */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1.5">
                  Source Material Type
                </label>
                <div 
                  className="grid grid-cols-3 gap-2 p-1 rounded-xl border text-xs"
                  style={{ backgroundColor: theme.bgPage, borderColor: theme.borderSubtle }}
                >
                  <button
                    type="button"
                    onClick={() => setSourceInputType('files')}
                    className={`py-2 px-2.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      sourceInputType === 'files'
                        ? 'shadow-xs font-bold'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ 
                      backgroundColor: sourceInputType === 'files' ? theme.bgCard : 'transparent',
                      color: sourceInputType === 'files' ? theme.primary : undefined 
                    }}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Files</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSourceInputType('paste')}
                    className={`py-2 px-2.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      sourceInputType === 'paste'
                        ? 'shadow-xs font-bold'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ 
                      backgroundColor: sourceInputType === 'paste' ? theme.bgCard : 'transparent',
                      color: sourceInputType === 'paste' ? theme.primary : undefined 
                    }}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Paste Text</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSourceInputType('topic')}
                    className={`py-2 px-2.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      sourceInputType === 'topic'
                        ? 'shadow-xs font-bold'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{ 
                      backgroundColor: sourceInputType === 'topic' ? theme.bgCard : 'transparent',
                      color: sourceInputType === 'topic' ? theme.primary : undefined 
                    }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Topic / AI</span>
                  </button>
                </div>
              </div>

              {/* Source Input 1: Multi-File Upload */}
              {sourceInputType === 'files' && (
                <div className="space-y-3">
                  <div 
                    className="border-2 border-dashed rounded-2xl p-5 text-center transition-all cursor-pointer hover:border-current"
                    style={{ borderColor: theme.borderSubtle }}
                    onClick={() => document.getElementById('multi-file-input')?.click()}
                  >
                    <input
                      id="multi-file-input"
                      type="file"
                      multiple
                      accept=".txt,.md,.json,.csv,.doc,.docx,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="w-7 h-7 mx-auto mb-2 opacity-60" style={{ color: theme.primary }} />
                    <p className="text-xs font-semibold mb-1">
                      Click or drag & drop multiple source files
                    </p>
                    <p className="text-[11px] opacity-60">
                      Supports .txt, .md, .csv, .json, lecture transcripts, and notes files
                    </p>
                  </div>

                  {/* List of uploaded files */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span>Selected Files ({uploadedFiles.length})</span>
                        <label className="flex items-center gap-1.5 cursor-pointer text-[11px] opacity-80">
                          <input
                            type="checkbox"
                            checked={combineFiles}
                            onChange={(e) => setCombineFiles(e.target.checked)}
                            className="rounded"
                          />
                          <span>Merge into one reviewer</span>
                        </label>
                      </div>

                      <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1">
                        {uploadedFiles.map((f, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center justify-between p-2 rounded-xl text-xs border"
                            style={{ 
                              backgroundColor: theme.bgPage,
                              borderColor: theme.borderSubtle 
                            }}
                          >
                            <div className="flex items-center gap-2 truncate">
                              <FileText className="w-3.5 h-3.5 shrink-0 opacity-60" />
                              <span className="truncate font-medium">{f.name}</span>
                              <span className="text-[10px] opacity-50 shrink-0">
                                {Math.round(f.size / 1024)} KB
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeUploadedFile(idx)}
                              className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 opacity-70 hover:opacity-100"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Source Input 2: Paste Raw Text */}
              {sourceInputType === 'paste' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1">
                      Material Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lecture 4 – Gram Negative Bacilli & Enterobacteriaceae"
                      value={sourceTitle}
                      onChange={(e) => setSourceTitle(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border focus:outline-none focus:ring-1"
                      style={{ 
                        backgroundColor: theme.bgPage,
                        borderColor: theme.borderSubtle,
                        color: theme.fontPrimary
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1">
                      Notes / Lecture Content
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Paste textbook excerpts, lecture transcriptions, study notes, or high-yield bullet points here..."
                      value={sourceText}
                      onChange={(e) => setSourceText(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border focus:outline-none focus:ring-1 font-mono"
                      style={{ 
                        backgroundColor: theme.bgPage,
                        borderColor: theme.borderSubtle,
                        color: theme.fontPrimary
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Source Input 3: Topic Prompt */}
              {sourceInputType === 'topic' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1">
                      Subject Topic or Chapter
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Medical Mycology: Dimorphic Fungi & Histoplasmosis"
                      value={topicPrompt}
                      onChange={(e) => setTopicPrompt(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border focus:outline-none focus:ring-1"
                      style={{ 
                        backgroundColor: theme.bgPage,
                        borderColor: theme.borderSubtle,
                        color: theme.fontPrimary
                      }}
                    />
                  </div>

                  <div className="text-[11px] opacity-70 flex items-start gap-1.5 p-2.5 rounded-xl bg-black/5 dark:bg-white/5">
                    <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: theme.primary }} />
                    <span>
                      Bloomie will automatically synthesize clear study notes and a randomized 25-question quiz covering core concepts, diagnostic criteria, and clinical pearls.
                    </span>
                  </div>
                </div>
              )}

              {/* Question Configuration (Types & Count) */}
              <div 
                className="p-3.5 rounded-xl border space-y-3"
                style={{ backgroundColor: theme.bgPage, borderColor: theme.borderSubtle }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1.5 text-xs font-medium cursor-pointer">
                      <input
                        type="checkbox"
                        checked={generateNotes}
                        onChange={(e) => setGenerateNotes(e.target.checked)}
                        className="rounded"
                      />
                      <span>Generate Study Notes</span>
                    </label>

                    <label className="flex items-center gap-1.5 text-xs font-medium cursor-pointer">
                      <input
                        type="checkbox"
                        checked={generateQuiz}
                        onChange={(e) => setGenerateQuiz(e.target.checked)}
                        className="rounded"
                      />
                      <span>Generate Quiz Questions</span>
                    </label>
                  </div>

                  {generateQuiz && (
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="font-semibold">Questions:</span>
                      <select
                        value={questionCount}
                        onChange={(e) => setQuestionCount(Number(e.target.value))}
                        className="text-xs p-1 rounded-lg border font-bold"
                        style={{ 
                          backgroundColor: theme.bgCard,
                          borderColor: theme.borderSubtle,
                          color: theme.fontPrimary
                        }}
                      >
                        <option value={5}>5 Questions</option>
                        <option value={10}>10 Questions</option>
                        <option value={15}>15 Questions</option>
                        <option value={20}>20 Questions</option>
                        <option value={25}>25 Questions (Full Pool)</option>
                      </select>
                    </div>
                  )}
                </div>

                {generateQuiz && (
                  <div>
                    <label className="block text-[11px] font-semibold opacity-75 mb-1.5">
                      Question Formats
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(['multiple_choice', 'identification', 'enumeration', 'essay'] as QuestionType[]).map((type) => {
                        const isSelected = selectedQuestionTypes.includes(type);
                        const labelMap: Record<QuestionType, string> = {
                          multiple_choice: 'Multiple Choice (A-D Shuffled)',
                          identification: 'Identification',
                          enumeration: 'Enumeration',
                          essay: 'Essay / Explain'
                        };
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => toggleQuestionType(type)}
                            className={`px-2.5 py-1 text-xs rounded-lg border transition-all cursor-pointer font-medium ${
                              isSelected
                                ? 'font-bold'
                                : 'opacity-60 hover:opacity-100'
                            }`}
                            style={{
                              backgroundColor: isSelected ? theme.primaryLight : 'transparent',
                              borderColor: isSelected ? theme.primaryBorder : theme.borderSubtle,
                              color: isSelected ? theme.primary : undefined
                            }}
                          >
                            {isSelected && <Check className="w-3 h-3 inline mr-1" />}
                            {labelMap[type]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: ADD NEW SUBJECT */}
          {activeTab === 'subject' && (
            <div className="space-y-4">
              {/* Presets Gallery */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1.5">
                  1-Click Subject Presets (Curated Modules)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {predefinedSubjectPacks.map((pack) => (
                    <div
                      key={pack.id}
                      onClick={() => handleAddPresetPack(pack)}
                      className="p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.01] hover:shadow-xs group"
                      style={{ 
                        backgroundColor: theme.bgPage,
                        borderColor: theme.borderSubtle 
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span 
                          className="w-2 h-2 rounded-full shrink-0" 
                          style={{ backgroundColor: pack.color }}
                        />
                        <span className="text-xs font-bold truncate group-hover:underline">
                          {pack.name}
                        </span>
                      </div>
                      <p className="text-[10px] opacity-65 line-clamp-2 leading-relaxed mb-2">
                        {pack.description}
                      </p>
                      <div className="flex items-center justify-between text-[10px] font-semibold" style={{ color: theme.primary }}>
                        <span>+ Add Module ({pack.sampleSourcesCount} sources)</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center my-2">
                <div className="flex-grow border-t" style={{ borderColor: theme.borderSubtle }} />
                <span className="flex-shrink mx-3 text-[11px] uppercase font-bold opacity-50">
                  Or Create Custom Subject
                </span>
                <div className="flex-grow border-t" style={{ borderColor: theme.borderSubtle }} />
              </div>

              {/* Custom Subject Form */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1">
                    Subject Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Clinical Immunology & Serology"
                    value={newSubjectName}
                    onChange={(e) => setNewSubjectName(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border focus:outline-none focus:ring-1"
                    style={{ 
                      backgroundColor: theme.bgPage,
                      borderColor: theme.borderSubtle,
                      color: theme.fontPrimary
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Antibodies, hypersensitivity reactions, agglutination assays"
                    value={newSubjectDesc}
                    onChange={(e) => setNewSubjectDesc(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border focus:outline-none focus:ring-1"
                    style={{ 
                      backgroundColor: theme.bgPage,
                      borderColor: theme.borderSubtle,
                      color: theme.fontPrimary
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1.5">
                    Accent Color
                  </label>
                  <div className="flex items-center gap-2">
                    {[
                      '#EE5D7E', '#9061F9', '#3B82F6', '#EAB308', 
                      '#10B981', '#06B6D4', '#EC4899', '#F97316'
                    ].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setNewSubjectColor(c)}
                        className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                          newSubjectColor === c ? 'scale-115 ring-2 ring-offset-2' : ''
                        }`}
                        style={{ backgroundColor: c, borderColor: 'white' }}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCreateSubject}
                  disabled={!newSubjectName.trim()}
                  className="w-full py-2.5 rounded-xl text-white text-xs font-bold transition-all cursor-pointer shadow-xs disabled:opacity-50"
                  style={{ backgroundColor: theme.primary }}
                >
                  Create Subject & Add Materials
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: BUILD QUIZ */}
          {activeTab === 'quiz' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1.5">
                  Target Subject
                </label>
                <select
                  value={selectedSubjectId}
                  onChange={(e) => setSelectedSubjectId(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border focus:outline-none focus:ring-1"
                  style={{ 
                    backgroundColor: theme.bgPage,
                    borderColor: theme.borderSubtle,
                    color: theme.fontPrimary
                  }}
                >
                  {exam.subjects.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider opacity-75 mb-1">
                  Quiz Title
                </label>
                <input
                  type="text"
                  value={manualQuizTitle}
                  onChange={(e) => setManualQuizTitle(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border focus:outline-none focus:ring-1 font-semibold"
                  style={{ 
                    backgroundColor: theme.bgPage,
                    borderColor: theme.borderSubtle,
                    color: theme.fontPrimary
                  }}
                />
              </div>

              {/* Interactive question builder */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-75">
                    Questions ({manualQuestions.length})
                  </span>
                  <button
                    type="button"
                    onClick={handleAddManualQuestion}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg border flex items-center gap-1 cursor-pointer"
                    style={{ 
                      backgroundColor: theme.primaryLight,
                      borderColor: theme.primaryBorder,
                      color: theme.primary 
                    }}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Question</span>
                  </button>
                </div>

                <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                  {manualQuestions.map((q, qIndex) => (
                    <div 
                      key={q.id}
                      className="p-3.5 rounded-xl border space-y-2 text-xs"
                      style={{ backgroundColor: theme.bgPage, borderColor: theme.borderSubtle }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold opacity-80">#{qIndex + 1} Question</span>
                        {manualQuestions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => setManualQuestions(prev => prev.filter((_, idx) => idx !== qIndex))}
                            className="text-rose-500 opacity-80 hover:opacity-100"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      <input
                        type="text"
                        value={q.question}
                        onChange={(e) => {
                          const updated = [...manualQuestions];
                          updated[qIndex].question = e.target.value;
                          setManualQuestions(updated);
                        }}
                        className="w-full p-2 rounded-lg border focus:outline-none"
                        style={{ backgroundColor: theme.bgCard, borderColor: theme.borderSubtle, color: theme.fontPrimary }}
                      />

                      {/* Options for multiple choice */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-bold opacity-60 uppercase">
                          Options & Correct Answer
                        </span>
                        {(q.options || []).map((opt, optIndex) => {
                          const isCorrect = q.correctAnswer === opt;
                          const letter = String.fromCharCode(65 + optIndex);
                          return (
                            <div key={optIndex} className="flex items-center gap-2">
                              <span className="w-4 font-mono font-bold text-center opacity-60">
                                {letter}
                              </span>
                              <input
                                type="text"
                                value={opt}
                                onChange={(e) => {
                                  const updated = [...manualQuestions];
                                  const newOpts = [...(updated[qIndex].options || [])];
                                  const oldVal = newOpts[optIndex];
                                  newOpts[optIndex] = e.target.value;
                                  updated[qIndex].options = newOpts;
                                  if (updated[qIndex].correctAnswer === oldVal) {
                                    updated[qIndex].correctAnswer = e.target.value;
                                  }
                                  setManualQuestions(updated);
                                }}
                                className="flex-1 p-1.5 rounded-lg border text-xs"
                                style={{ backgroundColor: theme.bgCard, borderColor: theme.borderSubtle, color: theme.fontPrimary }}
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = [...manualQuestions];
                                  updated[qIndex].correctAnswer = opt;
                                  setManualQuestions(updated);
                                }}
                                className={`px-2 py-1 text-[10px] rounded-lg border font-bold cursor-pointer ${
                                  isCorrect ? 'bg-emerald-600 text-white border-emerald-600' : 'opacity-60'
                                }`}
                              >
                                {isCorrect ? 'Correct ✓' : 'Mark Correct'}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div 
          className="p-4 sm:p-5 border-t flex items-center justify-between shrink-0"
          style={{ borderColor: theme.borderSubtle }}
        >
          <div className="text-xs opacity-75">
            {isProcessing && (
              <span className="flex items-center gap-2 font-medium" style={{ color: theme.primary }}>
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>{processStatus || 'Processing materials...'}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isProcessing}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl border hover:opacity-80 transition-colors"
              style={{ borderColor: theme.borderSubtle }}
            >
              Cancel
            </button>

            {activeTab === 'source' && (
              <button
                type="button"
                onClick={handleAddSources}
                disabled={isProcessing || (sourceInputType === 'files' && uploadedFiles.length === 0)}
                className="px-4 py-2 text-xs font-bold rounded-xl text-white shadow-xs hover:opacity-95 transition-opacity disabled:opacity-50 flex items-center gap-1.5"
                style={{ backgroundColor: theme.primary }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {uploadedFiles.length > 1 && !combineFiles
                    ? `Add ${uploadedFiles.length} Sources`
                    : 'Generate & Add Source'}
                </span>
              </button>
            )}

            {activeTab === 'quiz' && (
              <button
                type="button"
                onClick={handleSubmitQuiz}
                disabled={isProcessing}
                className="px-4 py-2 text-xs font-bold rounded-xl text-white shadow-xs hover:opacity-95 transition-opacity flex items-center gap-1.5"
                style={{ backgroundColor: theme.primary }}
              >
                <Check className="w-3.5 h-3.5" />
                <span>Create Quiz ({manualQuestions.length} Items)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
