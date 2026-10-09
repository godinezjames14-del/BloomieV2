import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft,
  Award, 
  BookOpen, 
  Sparkles,
  AlertCircle,
  Shuffle
} from 'lucide-react';
import { QuizQuestion, Reviewer, QuestionType, ActiveTab, QuizAccuracyResult, Subject, WorkspaceTab } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';
import { formatScientificText } from '../utils/textFormatter';

interface QuestionAnswerState {
  submitted: boolean;
  isCorrect?: boolean;
  selectedMCOption?: string | null;
  identificationInput?: string;
  enumerationInputs?: string[];
  essayInput?: string;
  userAnswerText?: string;
}

interface QuizViewProps {
  currentReviewer: Reviewer;
  subjectName?: string;
  currentSubject?: Subject;
  allSubjects?: Subject[];
  examTitle?: string;
  onSelectReviewerAndTab?: (subjectId: string, reviewerId: string, tab: WorkspaceTab) => void;
  onUpdateQuestions?: (questions: QuizQuestion[]) => void;
  onUpdateMasteryScore?: (score: number) => void;
  onUpdateQuizAccuracy?: (accuracy: QuizAccuracyResult) => void;
  onNavigateToTab: (tab: ActiveTab) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  currentReviewer,
  subjectName,
  currentSubject,
  allSubjects,
  examTitle,
  onSelectReviewerAndTab,
  onUpdateMasteryScore,
  onUpdateQuizAccuracy,
  onNavigateToTab,
}) => {
  const { theme } = useFlowerTheme();
  const questions = currentReviewer.questions || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, QuestionAnswerState>>({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // Dynamic shuffled options map per question for authentic randomized choices
  const [shuffledOptions, setShuffledOptions] = useState<Record<string, string[]>>({});

  // Helper to randomize an array of options
  const shuffleOptionsArray = (arr: string[]) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  // Re-shuffle options whenever reviewer changes
  React.useEffect(() => {
    const map: Record<string, string[]> = {};
    questions.forEach((q) => {
      if (q.type === 'multiple_choice' && q.options && q.options.length > 0) {
        map[q.id] = shuffleOptionsArray(q.options);
      }
    });
    setShuffledOptions(map);
  }, [currentReviewer.id, questions.length]);

  // Manually re-shuffle choices on demand
  const handleShuffleChoices = () => {
    const map: Record<string, string[]> = {};
    questions.forEach((q) => {
      if (q.type === 'multiple_choice' && q.options && q.options.length > 0) {
        map[q.id] = shuffleOptionsArray(q.options);
      }
    });
    setShuffledOptions(map);
    // If current question isn't submitted yet, reset chosen option so choice doesn't stick
    if (!answers[currentIndex]?.submitted) {
      setActiveMCOption(null);
    }
  };

  // Active question working inputs (before submitting)
  const currentAnswerState = answers[currentIndex];
  const [activeMCOption, setActiveMCOption] = useState<string | null>(null);
  const [activeIdentInput, setActiveIdentInput] = useState('');
  const [activeEnumInputs, setActiveEnumInputs] = useState<string[]>(['', '', '']);
  const [activeEssayInput, setActiveEssayInput] = useState('');

  // When jumping to a new question, load its working state
  const loadQuestionState = (idx: number) => {
    setCurrentIndex(idx);
    const targetQ = questions[idx];
    const existing = answers[idx];
    if (existing) {
      setActiveMCOption(existing.selectedMCOption || null);
      setActiveIdentInput(existing.identificationInput || '');
      setActiveEnumInputs(existing.enumerationInputs || []);
      setActiveEssayInput(existing.essayInput || '');
    } else {
      setActiveMCOption(null);
      setActiveIdentInput('');
      const count = targetQ && Array.isArray(targetQ.correctAnswer) ? targetQ.correctAnswer.length : 3;
      setActiveEnumInputs(Array(count).fill(''));
      setActiveEssayInput('');
    }
  };

  const currentQ = questions[currentIndex];

  // Normalization helper
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, '').trim();

  // Jump to specific question number
  const handleJumpToQuestion = (targetIdx: number) => {
    if (targetIdx >= 0 && targetIdx < questions.length) {
      // Save current unsubmitted draft if any
      if (!answers[currentIndex]?.submitted) {
        setAnswers(prev => ({
          ...prev,
          [currentIndex]: {
            ...prev[currentIndex],
            submitted: false,
            selectedMCOption: activeMCOption,
            identificationInput: activeIdentInput,
            enumerationInputs: activeEnumInputs,
            essayInput: activeEssayInput,
          }
        }));
      }
      loadQuestionState(targetIdx);
    }
  };

  // Submit Answer for the active question
  const handleSubmitAnswer = () => {
    if (!currentQ || answers[currentIndex]?.submitted) return;

    let correct = false;
    let recordedAnswer = '';

    if (currentQ.type === 'multiple_choice') {
      recordedAnswer = activeMCOption || '';
      correct = normalize(activeMCOption || '') === normalize(currentQ.correctAnswer as string);
    } else if (currentQ.type === 'identification') {
      recordedAnswer = activeIdentInput.trim();
      const normInput = normalize(activeIdentInput);
      const expectedAnswers = Array.isArray(currentQ.correctAnswer)
        ? currentQ.correctAnswer.map(a => normalize(a))
        : [normalize(currentQ.correctAnswer as string)];

      correct = expectedAnswers.some(exp => 
        exp === normInput || 
        (normInput.length >= 3 && (exp.includes(normInput) || normInput.includes(exp)))
      );
    } else if (currentQ.type === 'enumeration') {
      const answersExpected = Array.isArray(currentQ.correctAnswer)
        ? (currentQ.correctAnswer as string[]).map(a => normalize(a))
        : [normalize(currentQ.correctAnswer as string)];
      
      const providedAnswers = activeEnumInputs
        .map(i => normalize(i))
        .filter(i => i.length > 0);

      const matchedExpected = answersExpected.filter(exp => 
        providedAnswers.some(prov => prov === exp || (prov.length >= 3 && (exp.includes(prov) || prov.includes(exp))))
      );
      const threshold = answersExpected.length <= 3 ? answersExpected.length : Math.ceil(answersExpected.length * 0.75);
      correct = matchedExpected.length >= threshold;
      recordedAnswer = activeEnumInputs.filter(Boolean).join(', ');
    } else if (currentQ.type === 'essay') {
      recordedAnswer = activeEssayInput.trim();
      correct = activeEssayInput.trim().length > 25;
    }

    setAnswers(prev => ({
      ...prev,
      [currentIndex]: {
        submitted: true,
        isCorrect: correct,
        selectedMCOption: activeMCOption,
        identificationInput: activeIdentInput,
        enumerationInputs: activeEnumInputs,
        essayInput: activeEssayInput,
        userAnswerText: recordedAnswer
      }
    }));
  };

  // Next Question
  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      handleJumpToQuestion(currentIndex + 1);
    } else {
      // Check if any unanswered questions exist
      const unansweredIdx = questions.findIndex((_, idx) => !answers[idx]?.submitted);
      if (unansweredIdx !== -1) {
        handleJumpToQuestion(unansweredIdx);
      } else {
        finishQuiz();
      }
    }
  };

  // Previous Question
  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      handleJumpToQuestion(currentIndex - 1);
    }
  };

  // Finish Quiz
  const finishQuiz = () => {
    setIsQuizFinished(true);
    const submittedEntries = Object.values(answers).filter(a => a.submitted);
    const correctCount = submittedEntries.filter(a => a.isCorrect).length;
    const totalCount = questions.length;
    const accuracyPercentage = Math.round((correctCount / (totalCount || 1)) * 100);

    if (onUpdateQuizAccuracy) {
      onUpdateQuizAccuracy({
        completed: true,
        scorePercent: accuracyPercentage,
        correctCount,
        totalCount,
        completedAt: new Date().toISOString()
      });
    }

    if (onUpdateMasteryScore) {
      onUpdateMasteryScore(accuracyPercentage);
    }

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: [theme.primary, '#E0F4F4', '#FEF3C7', '#A7F3D0']
    });
  };

  // Restart Quiz
  const handleRestartQuiz = () => {
    // Re-shuffle options on restart for fresh randomized order
    const map: Record<string, string[]> = {};
    questions.forEach((q) => {
      if (q.type === 'multiple_choice' && q.options && q.options.length > 0) {
        map[q.id] = shuffleOptionsArray(q.options);
      }
    });
    setShuffledOptions(map);
    setAnswers({});
    setCurrentIndex(0);
    setActiveMCOption(null);
    setActiveIdentInput('');
    const firstQ = questions[0];
    const count = firstQ && Array.isArray(firstQ.correctAnswer) ? firstQ.correctAnswer.length : 3;
    setActiveEnumInputs(Array(count).fill(''));
    setActiveEssayInput('');
    setIsQuizFinished(false);
  };

  // Stats
  const answeredCount = Object.values(answers).filter(a => a.submitted).length;
  const remainingCount = questions.length - answeredCount;
  const correctCount = Object.values(answers).filter(a => a.submitted && a.isCorrect).length;
  const totalScore = Object.entries(answers).reduce((acc, [idx, ans]) => {
    if (ans.submitted && ans.isCorrect) {
      return acc + (questions[Number(idx)]?.points || 1);
    }
    return acc;
  }, 0);

  if (questions.length === 0) {
    return (
      <div className="max-w-md mx-auto py-16 text-center">
        <HelpCircle className="w-10 h-10 opacity-40 mx-auto mb-3" style={{ color: theme.primary }} />
        <h2 className="font-serif text-xl font-bold text-slate-800">No questions available</h2>
        <p className="text-xs text-slate-500 mt-1 mb-6">
          This reviewer doesn't have questions configured yet.
        </p>
        <button
          onClick={() => onNavigateToTab('notes')}
          className="text-white px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
          style={{ backgroundColor: theme.primary }}
        >
          View Study Notes
        </button>
      </div>
    );
  }

  const isCurrentSubmitted = Boolean(answers[currentIndex]?.submitted);
  const isCurrentCorrect = answers[currentIndex]?.isCorrect;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-6 animate-in fade-in duration-200">
      {/* MINIMAL HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F0E6E4]">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-0.5">
            <span className="font-semibold uppercase tracking-wider text-[11px]" style={{ color: theme.primary }}>
              {currentSubject?.name || subjectName}
            </span>
            <span>·</span>
            <span>{currentReviewer.name}</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold" style={{ color: theme.fontPrimary }}>
            Questions
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Shuffle Choices Button */}
          {questions.some(q => q.type === 'multiple_choice') && (
            <button
              onClick={handleShuffleChoices}
              className="px-3.5 py-1.5 rounded-xl border transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer active:scale-95"
              style={{
                backgroundColor: theme.bgCard,
                borderColor: theme.borderSubtle,
                color: theme.fontPrimary
              }}
              title="Shuffle multiple-choice answer options"
            >
              <Shuffle className="w-3.5 h-3.5" style={{ color: theme.primary }} />
              <span>Shuffle Answers</span>
            </button>
          )}

          {/* Prominent Restart Quiz Button */}
          <button
            onClick={handleRestartQuiz}
            className="px-3.5 py-1.5 rounded-xl border transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer active:scale-95"
            style={{
              backgroundColor: theme.bgCard,
              borderColor: theme.borderSubtle,
              color: theme.fontPrimary
            }}
            title="Restart quiz from question 1"
          >
            <RotateCcw className="w-3.5 h-3.5" style={{ color: theme.primary }} />
            <span>Restart Quiz</span>
          </button>

          <div 
            className="border px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5"
            style={{
              backgroundColor: theme.bgCard,
              borderColor: theme.borderSubtle,
              color: theme.fontMuted
            }}
          >
            <span>Score:</span>
            <span className="font-bold" style={{ color: theme.fontPrimary }}>{totalScore}</span>
          </div>

          <div 
            className="border px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5"
            style={{
              backgroundColor: theme.bgCard,
              borderColor: theme.borderSubtle,
              color: theme.fontMuted
            }}
          >
            <span className="font-bold" style={{ color: theme.primary }}>
              {answeredCount}/{questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* VISUAL QUESTIONS GRID & BOX - SKIP THROUGH NUMBERS */}
      <div 
        className="rounded-2xl p-4 sm:p-5 border shadow-2xs space-y-3 transition-colors"
        style={{
          backgroundColor: theme.bgCard,
          borderColor: theme.borderSubtle
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 font-medium" style={{ color: theme.fontPrimary }}>
            <span>Select Question</span>
            <span style={{ color: theme.fontMuted }}>·</span>
            <span className="text-xs" style={{ color: theme.fontMuted }}>
              {remainingCount} left
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]" style={{ color: theme.fontMuted }}>
            <span className="flex items-center gap-1.5">
              <span 
                className="w-2.5 h-2.5 rounded border" 
                style={{ backgroundColor: theme.bgPage, borderColor: theme.borderSubtle }}
              />
              <span>Unanswered</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-emerald-100 border border-emerald-400" />
              <span>Correct</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-rose-100 border border-rose-400" />
              <span>Review</span>
            </span>
          </div>
        </div>

        {/* The Visual Grid of Boxes */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
          {questions.map((q, idx) => {
            const isCurrent = idx === currentIndex;
            const state = answers[idx];
            const isSubmitted = Boolean(state?.submitted);
            const isCorrect = state?.isCorrect;

            let customBg = theme.isInverted ? 'rgba(255,255,255,0.06)' : theme.bgPage;
            let customText = theme.fontPrimary;
            let customBorder = theme.borderSubtle;

            if (isSubmitted) {
              if (isCorrect) {
                customBg = theme.isInverted ? 'rgba(16, 185, 129, 0.2)' : '#ECFDF5';
                customText = theme.isInverted ? '#6EE7B7' : '#065F46';
                customBorder = theme.isInverted ? '#059669' : '#A7F3D0';
              } else {
                customBg = theme.isInverted ? 'rgba(244, 63, 94, 0.2)' : '#FFF1F2';
                customText = theme.isInverted ? '#FDA4AF' : '#9F1239';
                customBorder = theme.isInverted ? '#E11D48' : '#FECDD3';
              }
            }

            return (
              <button
                key={q.id}
                onClick={() => handleJumpToQuestion(idx)}
                title={`Question ${idx + 1}${isSubmitted ? (isCorrect ? ' · Correct' : ' · Needs Review') : ' · Click to jump'}`}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center transition-all cursor-pointer ${
                  isCurrent ? 'ring-2 ring-offset-1 font-bold shadow-xs' : ''
                }`}
                style={{
                  backgroundColor: customBg,
                  borderColor: isCurrent ? theme.primary : customBorder,
                  color: customText,
                  boxShadow: isCurrent ? `0 0 0 2px ${theme.primary}` : undefined
                }}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {!isQuizFinished ? (
        /* QUESTION CARD */
        currentQ && (
          <div 
            className="rounded-3xl p-6 sm:p-8 border shadow-2xs space-y-6 transition-colors"
            style={{
              backgroundColor: theme.bgCard,
              borderColor: theme.borderSubtle
            }}
          >
            {/* Header: Question Number & Points */}
            <div className="flex items-center justify-between text-xs pb-3 border-b" style={{ borderColor: theme.borderSubtle }}>
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold"
                  style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                >
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span className="capitalize" style={{ color: theme.fontMuted }}>
                  {currentQ.type.replace('_', ' ')}
                </span>
              </div>
              <span className="text-xs font-semibold" style={{ color: theme.fontMuted }}>
                +{currentQ.points} points
              </span>
            </div>

            {/* Prompt */}
            <h2 className="font-serif text-xl sm:text-2xl font-bold leading-snug" style={{ color: theme.fontPrimary }}>
              {formatScientificText(currentQ.question)}
            </h2>

            {/* INPUTS BY TYPE */}
            <div className="pt-1">
              {/* Multiple Choice */}
              {currentQ.type === 'multiple_choice' && (
                <div className="space-y-2.5">
                  {(shuffledOptions[currentQ.id] || currentQ.options || []).map((option, idx) => {
                    const isSelected = isCurrentSubmitted 
                        ? answers[currentIndex]?.selectedMCOption === option
                      : activeMCOption === option;
                    const isOptionCorrect =
                      normalize(option) === normalize(currentQ.correctAnswer as string);

                    let optionBg = theme.isInverted ? 'rgba(255,255,255,0.04)' : theme.bgPage;
                    let optionColor = theme.fontPrimary;
                    let optionBorder = theme.borderSubtle;

                    if (isCurrentSubmitted) {
                      if (isOptionCorrect) {
                        optionBg = theme.isInverted ? 'rgba(16, 185, 129, 0.2)' : '#ECFDF5';
                        optionColor = theme.isInverted ? '#6EE7B7' : '#065F46';
                        optionBorder = '#10B981';
                      } else if (isSelected && !isOptionCorrect) {
                        optionBg = theme.isInverted ? 'rgba(244, 63, 94, 0.2)' : '#FFF1F2';
                        optionColor = theme.isInverted ? '#FDA4AF' : '#9F1239';
                        optionBorder = '#F43F5E';
                      } else {
                        optionBg = theme.isInverted ? 'rgba(255,255,255,0.02)' : theme.bgPage;
                        optionBorder = theme.borderSubtle;
                      }
                    } else if (isSelected) {
                      optionBg = theme.primaryLight;
                      optionColor = theme.primary;
                      optionBorder = theme.primary;
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isCurrentSubmitted}
                        onClick={() => setActiveMCOption(option)}
                        className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${
                          isSelected && !isCurrentSubmitted ? 'font-semibold shadow-xs' : ''
                        } ${isCurrentSubmitted && !isOptionCorrect && !isSelected ? 'opacity-40' : ''}`}
                        style={{
                          backgroundColor: optionBg,
                          borderColor: optionBorder,
                          color: optionColor
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span 
                            className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                            style={{
                              backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                              color: theme.fontPrimary
                            }}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{formatScientificText(option)}</span>
                        </div>
                        {isCurrentSubmitted && isOptionCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        )}
                        {isCurrentSubmitted && isSelected && !isOptionCorrect && (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Identification */}
              {currentQ.type === 'identification' && (
                <div className="space-y-2">
                  <label className="block text-xs font-medium" style={{ color: theme.fontMuted }}>
                    Your Answer:
                  </label>
                  <input
                    type="text"
                    disabled={isCurrentSubmitted}
                    value={isCurrentSubmitted ? (answers[currentIndex]?.identificationInput || '') : activeIdentInput}
                    onChange={(e) => setActiveIdentInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !isCurrentSubmitted && activeIdentInput.trim()) {
                        handleSubmitAnswer();
                      }
                    }}
                    placeholder="Type the exact term or concept..."
                    className="w-full border rounded-2xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.06)' : theme.bgPage,
                      borderColor: theme.borderSubtle,
                      color: theme.fontPrimary
                    }}
                  />
                </div>
              )}

              {/* Enumeration */}
              {currentQ.type === 'enumeration' && (
                <div className="space-y-2.5">
                  <div className="text-xs" style={{ color: theme.fontMuted }}>
                    <label className="block font-medium">
                      List {Array.isArray(currentQ.correctAnswer) ? currentQ.correctAnswer.length : ''} items:
                    </label>
                  </div>
                  {(isCurrentSubmitted ? (answers[currentIndex]?.enumerationInputs || []) : activeEnumInputs).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs font-bold w-6" style={{ color: theme.fontMuted }}>#{idx + 1}</span>
                      <input
                        type="text"
                        disabled={isCurrentSubmitted}
                        value={item}
                        onChange={(e) => {
                          const copy = [...activeEnumInputs];
                          copy[idx] = e.target.value;
                          setActiveEnumInputs(copy);
                        }}
                        placeholder={`Item ${idx + 1}`}
                        className="flex-1 border rounded-xl px-3.5 py-2 text-xs outline-none transition-all"
                        style={{
                          backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.06)' : theme.bgPage,
                          borderColor: theme.borderSubtle,
                          color: theme.fontPrimary
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Essay */}
              {currentQ.type === 'essay' && (
                <div className="space-y-2">
                  <label className="block text-xs font-medium" style={{ color: theme.fontMuted }}>
                    Explanation:
                  </label>
                  <textarea
                    rows={4}
                    disabled={isCurrentSubmitted}
                    value={isCurrentSubmitted ? (answers[currentIndex]?.essayInput || '') : activeEssayInput}
                    onChange={(e) => setActiveEssayInput(e.target.value)}
                    placeholder="Write your explanation here..."
                    className="w-full border rounded-2xl p-4 text-xs sm:text-sm outline-none resize-none leading-relaxed transition-all"
                    style={{
                      backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.06)' : theme.bgPage,
                      borderColor: theme.borderSubtle,
                      color: theme.fontPrimary
                    }}
                  />
                </div>
              )}
            </div>

            {/* FEEDBACK BANNER (If submitted) */}
            {isCurrentSubmitted && (
              <div
                className={`p-4 sm:p-5 rounded-2xl border animate-in fade-in duration-150 ${
                  isCurrentCorrect
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {isCurrentCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        Correct Answer!
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-rose-500" />
                      <span className="text-xs font-bold text-rose-600 dark:text-rose-400">
                        Needs Review
                      </span>
                    </>
                  )}
                </div>

                <div className="text-xs mb-1.5">
                  <span className="font-semibold" style={{ color: theme.fontPrimary }}>Correct Answer: </span>
                  <span className="font-medium underline" style={{ color: theme.primary }}>
                    {formatScientificText(
                      Array.isArray(currentQ.correctAnswer)
                        ? currentQ.correctAnswer.join(', ')
                        : String(currentQ.correctAnswer)
                    )}
                  </span>
                </div>

                <p className="text-xs leading-relaxed pt-1.5 border-t border-black/5 dark:border-white/5" style={{ color: theme.fontBody }}>
                  {formatScientificText(currentQ.explanation)}
                </p>

                {currentQ.type === 'essay' && currentQ.sampleEssayAnswer && (
                  <div 
                    className="mt-3 p-3 rounded-xl text-xs border"
                    style={{
                      backgroundColor: theme.isInverted ? 'rgba(245, 158, 11, 0.1)' : '#FFFBEB',
                      borderColor: theme.isInverted ? 'rgba(245, 158, 11, 0.3)' : '#FDE68A',
                      color: theme.isInverted ? '#FCD34D' : '#92400E'
                    }}
                  >
                    <span className="font-bold block mb-0.5">Model Answer:</span>
                    <p>{formatScientificText(currentQ.sampleEssayAnswer)}</p>
                  </div>
                )}
              </div>
            )}

            {/* ACTION CONTROLS & SKIP NUMBERS */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentIndex === 0}
                  className="px-3 py-2 rounded-xl border text-xs font-medium disabled:opacity-30 transition-colors cursor-pointer flex items-center gap-1.5"
                  style={{
                    backgroundColor: theme.bgCard,
                    borderColor: theme.borderSubtle,
                    color: theme.fontPrimary
                  }}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                <button
                  onClick={() => handleJumpToQuestion(currentIndex + 1)}
                  disabled={currentIndex === questions.length - 1}
                  className="px-3 py-2 rounded-xl border text-xs font-medium disabled:opacity-30 transition-colors cursor-pointer flex items-center gap-1.5"
                  style={{
                    backgroundColor: theme.bgCard,
                    borderColor: theme.borderSubtle,
                    color: theme.fontPrimary
                  }}
                  title="Skip to the next question number"
                >
                  <span>Skip</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleRestartQuiz}
                  className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1.5"
                  title="Restart quiz from question 1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                {!isCurrentSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={
                      (currentQ.type === 'multiple_choice' && !activeMCOption) ||
                      (currentQ.type === 'identification' && !activeIdentInput.trim()) ||
                      (currentQ.type === 'enumeration' && !activeEnumInputs.some(Boolean)) ||
                      (currentQ.type === 'essay' && !activeEssayInput.trim())
                    }
                    className="text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs hover:scale-[1.01] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                    style={{ backgroundColor: theme.primary }}
                  >
                    Check
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-slate-900 hover:bg-black text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>
                      {currentIndex < questions.length - 1 ? 'Next' : 'Finish'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {answeredCount > 0 && (
                  <button
                    onClick={finishQuiz}
                    className="px-3.5 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer"
                    style={{
                      backgroundColor: theme.bgCard,
                      borderColor: theme.borderSubtle,
                      color: theme.fontMuted
                    }}
                  >
                    Finish ({answeredCount}/{questions.length})
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      ) : (
        /* QUIZ COMPLETED SCREEN */
        <div 
          className="rounded-3xl p-8 border shadow-sm text-center max-w-lg mx-auto space-y-6 animate-in zoom-in-95 duration-150"
          style={{
            backgroundColor: theme.bgCard,
            borderColor: theme.borderSubtle
          }}
        >
          <div
            className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: theme.primary }}
          >
            <Award className="w-6 h-6" />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold" style={{ color: theme.fontPrimary }}>
              Quiz Completed
            </h2>
            <p className="text-xs mt-1" style={{ color: theme.fontMuted }}>
              Select any question above to review.
            </p>
          </div>

          <div 
            className="rounded-2xl p-4 border flex items-center justify-around text-center"
            style={{
              backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.04)' : theme.bgPage,
              borderColor: theme.borderSubtle
            }}
          >
            <div>
              <span className="text-[10px] uppercase font-bold block mb-0.5" style={{ color: theme.fontMuted }}>
                Score
              </span>
              <span className="font-serif text-xl font-bold" style={{ color: theme.fontPrimary }}>
                {totalScore}
              </span>
            </div>
            <div className="h-6 w-px" style={{ backgroundColor: theme.borderSubtle }} />
            <div>
              <span className="text-[10px] uppercase font-bold block mb-0.5" style={{ color: theme.fontMuted }}>
                Accuracy
              </span>
              <span className="font-serif text-xl font-bold" style={{ color: theme.primary }}>
                {Math.round((correctCount / (questions.length || 1)) * 100)}%
              </span>
            </div>
            <div className="h-6 w-px" style={{ backgroundColor: theme.borderSubtle }} />
            <div>
              <span className="text-[10px] uppercase font-bold block mb-0.5" style={{ color: theme.fontMuted }}>
                Correct
              </span>
              <span className="font-serif text-xl font-bold" style={{ color: theme.fontPrimary }}>
                {correctCount}/{questions.length}
              </span>
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              onClick={handleRestartQuiz}
              className="flex-1 py-2.5 rounded-xl border text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              style={{
                backgroundColor: theme.bgCard,
                borderColor: theme.borderSubtle,
                color: theme.fontPrimary
              }}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart Quiz</span>
            </button>
            <button
              onClick={() => onNavigateToTab('notes')}
              className="flex-1 py-2.5 rounded-xl text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              style={{ backgroundColor: theme.primary }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Notes</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
