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
  AlertCircle
} from 'lucide-react';
import { QuizQuestion, Reviewer, QuestionType, ActiveTab, QuizAccuracyResult, Subject, WorkspaceTab } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';

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

  // Active question working inputs (before submitting)
  const currentAnswerState = answers[currentIndex];
  const [activeMCOption, setActiveMCOption] = useState<string | null>(null);
  const [activeIdentInput, setActiveIdentInput] = useState('');
  const [activeEnumInputs, setActiveEnumInputs] = useState<string[]>(['', '', '']);
  const [activeEssayInput, setActiveEssayInput] = useState('');

  // When jumping to a new question, load its working state
  const loadQuestionState = (idx: number) => {
    setCurrentIndex(idx);
    const existing = answers[idx];
    if (existing) {
      setActiveMCOption(existing.selectedMCOption || null);
      setActiveIdentInput(existing.identificationInput || '');
      setActiveEnumInputs(existing.enumerationInputs || ['', '', '']);
      setActiveEssayInput(existing.essayInput || '');
    } else {
      setActiveMCOption(null);
      setActiveIdentInput('');
      setActiveEnumInputs(['', '', '']);
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
      correct = normalize(activeIdentInput) === normalize(currentQ.correctAnswer as string);
    } else if (currentQ.type === 'enumeration') {
      const answersExpected = Array.isArray(currentQ.correctAnswer)
        ? (currentQ.correctAnswer as string[]).map(a => normalize(a))
        : [normalize(currentQ.correctAnswer as string)];
      
      const providedAnswers = activeEnumInputs
        .map(i => normalize(i))
        .filter(i => i.length > 0);

      const matchedCount = providedAnswers.filter(ans => answersExpected.includes(ans)).length;
      correct = matchedCount >= Math.min(providedAnswers.length, answersExpected.length);
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
    setAnswers({});
    setCurrentIndex(0);
    setActiveMCOption(null);
    setActiveIdentInput('');
    setActiveEnumInputs(['', '', '']);
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
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900">
            Questions
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Prominent Restart Quiz Button */}
          <button
            onClick={handleRestartQuiz}
            className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer active:scale-95"
            title="Restart quiz from question 1"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Restart Quiz</span>
          </button>

          <div className="bg-white border border-[#EFE5E3] px-3 py-1.5 rounded-xl font-medium text-slate-600 flex items-center gap-1.5">
            <span>Score:</span>
            <span className="font-bold text-slate-900">{totalScore}</span>
          </div>

          <div className="bg-white border border-[#EFE5E3] px-3 py-1.5 rounded-xl font-medium text-slate-600 flex items-center gap-1.5">
            <span className="font-bold text-slate-900" style={{ color: theme.primary }}>
              {answeredCount}/{questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* VISUAL QUESTIONS GRID & BOX - SKIP THROUGH NUMBERS */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EFE5E3] shadow-2xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <span>Select Question</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 text-xs">
              {remainingCount} left
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-white border border-slate-300" />
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
        <div className="flex flex-wrap gap-2 pt-1">
          {questions.map((q, idx) => {
            const isCurrent = idx === currentIndex;
            const state = answers[idx];
            const isSubmitted = Boolean(state?.submitted);
            const isCorrect = state?.isCorrect;

            let boxStyle = "bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50";
            if (isSubmitted) {
              boxStyle = isCorrect
                ? "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold"
                : "bg-rose-50 text-rose-800 border-rose-300 font-bold";
            }
            if (isCurrent) {
              boxStyle += " ring-2 ring-offset-1 font-bold shadow-xs";
            }

            return (
              <button
                key={q.id}
                onClick={() => handleJumpToQuestion(idx)}
                title={`Question ${idx + 1}${isSubmitted ? (isCorrect ? ' · Correct' : ' · Needs Review') : ' · Click to jump'}`}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center transition-all cursor-pointer ${boxStyle}`}
                style={{
                  borderColor: isCurrent ? theme.primary : undefined,
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
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EFE5E3] shadow-2xs space-y-6">
            {/* Header: Question Number & Points */}
            <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold"
                  style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                >
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span className="text-slate-500 capitalize">
                  {currentQ.type.replace('_', ' ')}
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                +{currentQ.points} points
              </span>
            </div>

            {/* Prompt */}
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h2>

            {/* INPUTS BY TYPE */}
            <div className="pt-1">
              {/* Multiple Choice */}
              {currentQ.type === 'multiple_choice' && currentQ.options && (
                <div className="space-y-2.5">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = isCurrentSubmitted 
                      ? answers[currentIndex]?.selectedMCOption === option
                      : activeMCOption === option;
                    const isOptionCorrect =
                      normalize(option) === normalize(currentQ.correctAnswer as string);

                    let buttonStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';

                    if (isCurrentSubmitted) {
                      if (isOptionCorrect) {
                        buttonStyle = 'border-emerald-300 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                      } else if (isSelected && !isOptionCorrect) {
                        buttonStyle = 'border-rose-300 bg-rose-50 text-rose-950 ring-1 ring-rose-400';
                      } else {
                        buttonStyle = 'border-slate-200 bg-white opacity-40';
                      }
                    } else if (isSelected) {
                      buttonStyle = 'border-transparent font-semibold shadow-xs';
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isCurrentSubmitted}
                        onClick={() => setActiveMCOption(option)}
                        className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${buttonStyle}`}
                        style={{
                          backgroundColor: !isCurrentSubmitted && isSelected ? theme.primaryLight : undefined,
                          borderColor: !isCurrentSubmitted && isSelected ? theme.primary : undefined,
                          color: !isCurrentSubmitted && isSelected ? theme.primary : undefined
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-black/5 flex items-center justify-center text-xs font-bold shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{option}</span>
                        </div>
                        {isCurrentSubmitted && isOptionCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                  <label className="block text-xs font-medium text-slate-600">
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
                    className="w-full bg-[#FAF7F6] border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 transition-all"
                  />
                </div>
              )}

              {/* Enumeration */}
              {currentQ.type === 'enumeration' && (
                <div className="space-y-2.5">
                  <label className="block text-xs font-medium text-slate-600">
                    List Items:
                  </label>
                  {(isCurrentSubmitted ? (answers[currentIndex]?.enumerationInputs || ['', '', '']) : activeEnumInputs).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 w-6">#{idx + 1}</span>
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
                        className="flex-1 bg-[#FAF7F6] border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 outline-none focus:border-slate-400"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Essay */}
              {currentQ.type === 'essay' && (
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-600">
                    Explanation:
                  </label>
                  <textarea
                    rows={4}
                    disabled={isCurrentSubmitted}
                    value={isCurrentSubmitted ? (answers[currentIndex]?.essayInput || '') : activeEssayInput}
                    onChange={(e) => setActiveEssayInput(e.target.value)}
                    placeholder="Write your explanation here..."
                    className="w-full bg-[#FAF7F6] border border-slate-200 rounded-2xl p-4 text-xs sm:text-sm text-slate-900 outline-none focus:border-slate-400 resize-none leading-relaxed"
                  />
                </div>
              )}
            </div>

            {/* FEEDBACK BANNER (If submitted) */}
            {isCurrentSubmitted && (
              <div
                className={`p-4 sm:p-5 rounded-2xl border animate-in fade-in duration-150 ${
                  isCurrentCorrect
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50/70 border-rose-200 text-rose-950'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {isCurrentCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-emerald-800">
                        Correct Answer!
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-rose-600" />
                      <span className="text-xs font-bold text-rose-800">
                        Needs Review
                      </span>
                    </>
                  )}
                </div>

                <div className="text-xs mb-1.5">
                  <span className="font-semibold text-slate-700">Correct Answer: </span>
                  <span className="font-medium text-slate-900 underline decoration-slate-300">
                    {Array.isArray(currentQ.correctAnswer)
                      ? currentQ.correctAnswer.join(', ')
                      : currentQ.correctAnswer}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1.5 border-t border-black/5">
                  {currentQ.explanation}
                </p>

                {currentQ.type === 'essay' && currentQ.sampleEssayAnswer && (
                  <div className="mt-3 p-3 bg-white/80 rounded-xl text-xs text-amber-900 border border-amber-200">
                    <span className="font-bold block mb-0.5">Model Answer:</span>
                    <p>{currentQ.sampleEssayAnswer}</p>
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
                  className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-medium text-slate-600 disabled:opacity-30 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>

                <button
                  onClick={() => handleJumpToQuestion(currentIndex + 1)}
                  disabled={currentIndex === questions.length - 1}
                  className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-medium text-slate-600 disabled:opacity-30 transition-colors cursor-pointer flex items-center gap-1.5"
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
                    className="border border-slate-200 hover:border-slate-400 text-slate-600 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer"
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
        <div className="bg-white rounded-3xl p-8 border border-[#EFE5E3] shadow-sm text-center max-w-lg mx-auto space-y-6 animate-in zoom-in-95 duration-150">
          <div
            className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: theme.primary }}
          >
            <Award className="w-6 h-6" />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Quiz Completed
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Select any question above to review.
            </p>
          </div>

          <div className="bg-[#FAF7F6] rounded-2xl p-4 border border-[#EFE5E3] flex items-center justify-around text-center">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">
                Score
              </span>
              <span className="font-serif text-xl font-bold text-slate-900">
                {totalScore}
              </span>
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">
                Accuracy
              </span>
              <span className="font-serif text-xl font-bold" style={{ color: theme.primary }}>
                {Math.round((correctCount / (questions.length || 1)) * 100)}%
              </span>
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">
                Correct
              </span>
              <span className="font-serif text-xl font-bold text-slate-900">
                {correctCount}/{questions.length}
              </span>
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              onClick={handleRestartQuiz}
              className="flex-1 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
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
