import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  Layers, 
  BookOpen, 
  ListFilter, 
  Sparkles,
  ChevronRight,
  Eye,
  Check,
  AlertCircle
} from 'lucide-react';
import { QuizQuestion, Reviewer, QuestionType, ActiveTab, QuizAccuracyResult, Subject, WorkspaceTab } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';

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
  isDeveloperMode: boolean;
  onOpenDeveloperModal: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  currentReviewer,
  subjectName,
  currentSubject,
  allSubjects,
  examTitle,
  onSelectReviewerAndTab,
  onUpdateQuestions,
  onUpdateMasteryScore,
  onUpdateQuizAccuracy,
  onNavigateToTab,
  isDeveloperMode,
  onOpenDeveloperModal
}) => {
  const { theme } = useFlowerTheme();
  const [activeMode, setActiveMode] = useState<'practice' | 'bank' | 'flashcards'>('practice');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // User responses
  const [selectedMCOption, setSelectedMCOption] = useState<string | null>(null);
  const [identificationInput, setIdentificationInput] = useState('');
  const [enumerationInputs, setEnumerationInputs] = useState<string[]>(['', '', '']);
  const [essayInput, setEssayInput] = useState('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  // Score Tracking
  const [userScore, setUserScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [historyResults, setHistoryResults] = useState<{
    question: QuizQuestion;
    userAnswer: string;
    isCorrect: boolean;
  }[]>([]);

  // Flashcards mode state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlashcardFlipped, setIsFlashcardFlipped] = useState(false);

  // Filter for Question Bank
  const [bankFilter, setBankFilter] = useState<string>('all');

  const questions = currentReviewer.questions || [];
  const currentQ = questions[currentQuestionIndex];

  // Helper to normalize strings for comparison
  const normalize = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, '').trim();

  // Handle Submit Answer in Practice Mode
  const handleSubmitAnswer = () => {
    if (!currentQ || isAnswerSubmitted) return;

    let correct = false;
    let recordedAnswer = '';

    if (currentQ.type === 'multiple_choice') {
      recordedAnswer = selectedMCOption || '(None selected)';
      correct = normalize(selectedMCOption || '') === normalize(currentQ.correctAnswer as string);
    } else if (currentQ.type === 'identification') {
      recordedAnswer = identificationInput.trim();
      correct = normalize(identificationInput) === normalize(currentQ.correctAnswer as string);
    } else if (currentQ.type === 'enumeration') {
      const answersExpected = Array.isArray(currentQ.correctAnswer)
        ? (currentQ.correctAnswer as string[]).map(a => normalize(a))
        : [normalize(currentQ.correctAnswer as string)];
      
      const providedAnswers = enumerationInputs
        .map(i => normalize(i))
        .filter(i => i.length > 0);

      // Check if at least 70% of provided match expected
      const matchedCount = providedAnswers.filter(ans => answersExpected.includes(ans)).length;
      correct = matchedCount >= Math.min(providedAnswers.length, answersExpected.length);
      recordedAnswer = enumerationInputs.filter(Boolean).join(', ');
    } else if (currentQ.type === 'essay') {
      recordedAnswer = essayInput.trim();
      // Essay submission triggers self-evaluation view
      correct = essayInput.trim().length > 30; // initial baseline
    }

    setIsAnswerCorrect(correct);
    setIsAnswerSubmitted(true);
    setAnsweredCount(prev => prev + 1);

    if (correct) {
      setUserScore(prev => prev + currentQ.points);
    }

    setHistoryResults(prev => [
      ...prev,
      {
        question: currentQ,
        userAnswer: recordedAnswer,
        isCorrect: correct
      }
    ]);
  };

  // Next Question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedMCOption(null);
      setIdentificationInput('');
      setEnumerationInputs(['', '', '']);
      setEssayInput('');
      setIsAnswerSubmitted(false);
      setIsAnswerCorrect(null);
    } else {
      finishQuiz();
    }
  };

  // Finish Quiz and launch celebratory confetti
  const finishQuiz = () => {
    setIsQuizCompleted(true);
    const correctCount = historyResults.filter(r => r.isCorrect).length;
    const totalCount = questions.length;
    const accuracyPercentage = Math.round((correctCount / (totalCount || 1)) * 100);

    // Save authentic accuracy result to reviewer
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

    // Confetti blast!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: [theme.primary, '#FEF3C7', '#E0F4F4', '#F47E99', '#A7F3D0']
    });
  };

  // Reset Quiz
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedMCOption(null);
    setIdentificationInput('');
    setEnumerationInputs(['', '', '']);
    setEssayInput('');
    setIsAnswerSubmitted(false);
    setIsAnswerCorrect(null);
    setUserScore(0);
    setAnsweredCount(0);
    setIsQuizCompleted(false);
    setHistoryResults([]);
  };

  // Type badge color
  const getTypeBadge = (type: QuestionType) => {
    switch (type) {
      case 'multiple_choice':
        return { label: 'Multiple Choice', color: 'bg-[#EDE9FE] text-[#6D28D9] border-[#DDD6FE]' };
      case 'identification':
        return { label: 'Identification', color: 'bg-[#E0F4F4] text-[#0D6E6E] border-[#BEE7E7]' };
      case 'enumeration':
        return { label: 'Enumeration', color: 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]' };
      case 'essay':
        return { label: 'Essay Review', color: 'bg-[#FDEEF1] text-[#EE5D7E] border-[#FBCFD8]' };
    }
  };

  if (questions.length === 0) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center">
        <HelpCircle className="w-12 h-12 text-[#EE5D7E]/50 mx-auto mb-4" />
        <h2 className="font-serif text-2xl font-bold text-[#231F20]">No questions available</h2>
        <p className="text-xs text-[#7A7072] mt-2 mb-6">
          This reviewer doesn’t have any quiz questions yet.
        </p>
        <button
          onClick={() => onNavigateToTab('dashboard')}
          className="bg-[#EE5D7E] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold"
        >
          Generate Questions in Dashboard
        </button>
      </div>
    );
  }

  const formatDateDisplay = (dateStr?: string) => {
    if (!dateStr) return '';
    try {
      const d = new Date(`${dateStr}T00:00:00`);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-8 py-10 space-y-8 animate-in fade-in duration-300">
      {/* Top Header matching reference image */}
      <div className="pb-4 border-b border-[#F0E6E4] space-y-2">
        {/* Pills matching [RIZAL] [QUIZ] */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#E2E8F0] text-[#334155]">
            {currentSubject?.name || subjectName || 'COURSE'}
          </span>
          <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#D4F1F4] text-[#0E7490]">
            QUIZ
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E293B] leading-tight">
          {currentReviewer.name}
        </h1>

        {/* Date and Status subtitle matching screenshot (Oct 5, 2026 Upcoming) */}
        <div className="flex items-center gap-3 text-xs text-[#64748B] pt-0.5">
          <span>{formatDateDisplay(currentReviewer.testDate || '2026-10-05')}</span>
          <span className="font-semibold text-amber-600">Upcoming</span>
        </div>
      </div>

      {/* Subheader: Section tab & Mode switcher */}
      <div className="flex items-center justify-between pb-2 border-b border-[#F5ECE9]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-[#E0F4F4] text-[#0E7490]">
            Multiple Choice
          </span>
        </div>

        {/* Mode Switcher */}
        <div className="bg-[#FCF8F7] border border-[#EFE5E3] p-1 rounded-2xl flex items-center">
          <button
            onClick={() => {
              setActiveMode('practice');
              handleRestartQuiz();
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'practice'
                ? 'bg-white shadow-2xs font-bold'
                : 'text-[#7D7375] hover:text-[#231F20]'
            }`}
            style={{ color: activeMode === 'practice' ? theme.primary : undefined }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practice</span>
          </button>
          <button
            onClick={() => {
              setActiveMode('flashcards');
              setIsFlashcardFlipped(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'flashcards'
                ? 'bg-white shadow-2xs font-bold'
                : 'text-[#7D7375] hover:text-[#231F20]'
            }`}
            style={{ color: activeMode === 'flashcards' ? theme.primary : undefined }}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Flashcards</span>
          </button>
          <button
            onClick={() => setActiveMode('bank')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'bank'
                ? 'bg-white shadow-2xs font-bold'
                : 'text-[#7D7375] hover:text-[#231F20]'
            }`}
            style={{ color: activeMode === 'bank' ? theme.primary : undefined }}
          >
            <ListFilter className="w-3.5 h-3.5" />
            <span>All Questions</span>
          </button>
        </div>
      </div>

      {/* MODE 1: PRACTICE MODE */}
      {activeMode === 'practice' && (
        <>
          {!isQuizCompleted ? (
            <div className="space-y-6">
              {/* Part I Subheading matching reference image */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#1E293B]">
                  Part I. Multiple Choice
                </h3>
                <p className="text-xs text-[#64748B] font-medium">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>

              {/* Question Card */}
              {currentQ && (
                <div className="bg-white rounded-3xl p-8 border border-[#F0E6E4] shadow-sm space-y-6">
                  {/* Badge & Points */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        getTypeBadge(currentQ.type).color
                      }`}
                    >
                      {getTypeBadge(currentQ.type).label}
                    </span>
                    <span className="text-xs font-semibold text-[#8C8385]">
                      +{currentQ.points} points
                    </span>
                  </div>

                  {/* Question Prompt */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#231F20] leading-snug">
                    {currentQ.question}
                  </h3>

                  {/* QUESTION INPUT BY TYPE */}
                  <div className="pt-2">
                    {/* Multiple Choice Options */}
                    {currentQ.type === 'multiple_choice' && currentQ.options && (
                      <div className="space-y-3">
                        {currentQ.options.map((option, idx) => {
                          const isSelected = selectedMCOption === option;
                          const isOptionCorrect =
                            normalize(option) === normalize(currentQ.correctAnswer as string);

                          let buttonStyle = 'border-[#EFE5E3] bg-[#FCF8F7] hover:bg-[#F9F1EF] text-[#2D2A2E]';

                          if (isAnswerSubmitted) {
                            if (isOptionCorrect) {
                              buttonStyle = 'border-emerald-300 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-400';
                            } else if (isSelected && !isOptionCorrect) {
                              buttonStyle = 'border-rose-300 bg-rose-50 text-rose-900 ring-1 ring-rose-400';
                            } else {
                              buttonStyle = 'border-[#EFE5E3] bg-white opacity-50';
                            }
                          } else if (isSelected) {
                            buttonStyle = 'border-[#F8CCD6] bg-[#FDEEF1] text-[#EE5D7E] font-semibold ring-1 ring-[#EE5D7E]';
                          }

                          return (
                            <button
                              key={idx}
                              disabled={isAnswerSubmitted}
                              onClick={() => setSelectedMCOption(option)}
                              className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${buttonStyle}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-lg bg-white/80 border border-black/5 flex items-center justify-center text-xs font-bold shrink-0">
                                  {String.fromCharCode(65 + idx)}
                                </span>
                                <span>{option}</span>
                              </div>
                              {isAnswerSubmitted && isOptionCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                              {isAnswerSubmitted && isSelected && !isOptionCorrect && (
                                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Identification Input */}
                    {currentQ.type === 'identification' && (
                      <div className="space-y-3">
                        <label className="block text-xs font-medium text-[#7A7072]">
                          Type your answer:
                        </label>
                        <input
                          type="text"
                          disabled={isAnswerSubmitted}
                          value={identificationInput}
                          onChange={(e) => setIdentificationInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !isAnswerSubmitted && identificationInput.trim()) {
                              handleSubmitAnswer();
                            }
                          }}
                          placeholder="e.g. Liquid, Boyle's Law, Absolute Zero..."
                          className="w-full bg-[#FCF8F7] border border-[#EFE5E3] rounded-2xl px-4 py-3 text-sm text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 focus:border-[#EE5D7E] outline-none transition-all"
                        />
                      </div>
                    )}

                    {/* Enumeration Inputs */}
                    {currentQ.type === 'enumeration' && (
                      <div className="space-y-3">
                        <label className="block text-xs font-medium text-[#7A7072]">
                          List the required items:
                        </label>
                        {enumerationInputs.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#8C8385] w-6">#{idx + 1}</span>
                            <input
                              type="text"
                              disabled={isAnswerSubmitted}
                              value={item}
                              onChange={(e) => {
                                const copy = [...enumerationInputs];
                                copy[idx] = e.target.value;
                                setEnumerationInputs(copy);
                              }}
                              placeholder={`Item ${idx + 1}`}
                              className="flex-1 bg-[#FCF8F7] border border-[#EFE5E3] rounded-xl px-3.5 py-2 text-xs text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Essay Input */}
                    {currentQ.type === 'essay' && (
                      <div className="space-y-3">
                        <label className="block text-xs font-medium text-[#7A7072]">
                          Write your structured response:
                        </label>
                        <textarea
                          rows={5}
                          disabled={isAnswerSubmitted}
                          value={essayInput}
                          onChange={(e) => setEssayInput(e.target.value)}
                          placeholder="Provide a comprehensive explanation connecting the core principles..."
                          className="w-full bg-[#FCF8F7] border border-[#EFE5E3] rounded-2xl p-4 text-xs sm:text-sm text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 focus:border-[#EE5D7E] outline-none resize-none leading-relaxed"
                        />
                      </div>
                    )}
                  </div>

                  {/* FEEDBACK & EXPLANATION BANNER */}
                  {isAnswerSubmitted && (
                    <div
                      className={`p-5 rounded-2xl border animate-in fade-in duration-200 ${
                        isAnswerCorrect
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-rose-50/70 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {isAnswerCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span className="text-xs font-bold text-emerald-800">
                              Nicely done! Correct answer.
                            </span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-4 h-4 text-rose-600" />
                            <span className="text-xs font-bold text-rose-800">
                              Not quite. Here is the breakdown:
                            </span>
                          </>
                        )}
                      </div>

                      {/* Display correct answer */}
                      <div className="text-xs mb-2">
                        <span className="font-semibold">Correct Answer: </span>
                        <span className="font-medium underline decoration-current">
                          {Array.isArray(currentQ.correctAnswer)
                            ? currentQ.correctAnswer.join(', ')
                            : currentQ.correctAnswer}
                        </span>
                      </div>

                      {/* Explanation */}
                      <p className="text-xs text-[#524B4D] leading-relaxed pt-1 border-t border-black/5">
                        {currentQ.explanation}
                      </p>

                      {/* Sample Essay Answer if essay */}
                      {currentQ.type === 'essay' && currentQ.sampleEssayAnswer && (
                        <div className="mt-3 p-3 bg-white/80 rounded-xl text-xs text-[#453610] border border-amber-200/50">
                          <span className="font-bold text-amber-900 block mb-1">
                            Model Essay Answer:
                          </span>
                          <p className="leading-relaxed">{currentQ.sampleEssayAnswer}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* BOTTOM ACTION BUTTONS */}
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-[#8C8385]">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>

                    {!isAnswerSubmitted ? (
                      <button
                        onClick={handleSubmitAnswer}
                        disabled={
                          (currentQ.type === 'multiple_choice' && !selectedMCOption) ||
                          (currentQ.type === 'identification' && !identificationInput.trim()) ||
                          (currentQ.type === 'enumeration' && !enumerationInputs.some(Boolean)) ||
                          (currentQ.type === 'essay' && !essayInput.trim())
                        }
                        className="bg-[#EE5D7E] hover:bg-[#E34E70] text-white px-6 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="bg-[#231F20] hover:bg-black text-white px-6 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>
                          {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* QUIZ COMPLETED SCREEN */
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F0E6E4] shadow-sm text-center max-w-xl mx-auto space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-3xl bg-[#FDEEF1] text-[#EE5D7E] flex items-center justify-center mx-auto shadow-sm shadow-pink-200">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#EE5D7E] block mb-1">
                  Session Completed
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#231F20]">
                  Great review session!
                </h2>
                <p className="text-xs text-[#7D7375] mt-1">
                  You’ve finished reviewing {currentReviewer.name}.
                </p>
              </div>

              {/* Score Display Card */}
              <div className="bg-[#FAF4F3] rounded-2xl p-6 border border-[#F0DFE2] flex items-center justify-around">
                <div>
                  <span className="text-[11px] text-[#8C8385] uppercase font-bold block mb-1">
                    Total Score
                  </span>
                  <span className="font-serif text-3xl font-bold text-[#231F20]">
                    {userScore} pts
                  </span>
                </div>
                <div className="h-10 w-px bg-[#E8DDD9]" />
                <div>
                  <span className="text-[11px] text-[#8C8385] uppercase font-bold block mb-1">
                    Accuracy
                  </span>
                  <span className="font-serif text-3xl font-bold text-[#EE5D7E]">
                    {Math.round(
                      (historyResults.filter(r => r.isCorrect).length / (questions.length || 1)) * 100
                    )}%
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleRestartQuiz}
                  className="flex-1 py-3 rounded-2xl bg-white border border-[#EFE5E3] hover:bg-[#FAF4F3] text-xs font-semibold text-[#645E60] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
                <button
                  onClick={() => onNavigateToTab('notes')}
                  className="flex-1 py-3 rounded-2xl bg-[#EE5D7E] hover:bg-[#E34E70] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Review Notes</span>
                </button>
              </div>

              {/* Continue with other subjects in this exam */}
              {allSubjects && allSubjects.length > 1 && (
                <div className="pt-6 border-t border-[#F0E6E4] text-left space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#9C8F90]">
                      Continue with Other Subjects
                    </p>
                    <span className="text-[10px] text-[#A09898]">In this Exam Set</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {allSubjects
                      .filter(s => s.id !== currentSubject?.id)
                      .slice(0, 4)
                      .map(otherSubj => {
                        const quizRev = otherSubj.reviewers.find(r => r.questions.length > 0) || otherSubj.reviewers[0];
                        return (
                          <div
                            key={otherSubj.id}
                            className="p-3 rounded-2xl bg-[#FAF6F5] border border-[#EFE5E3] hover:border-[#CBD5E1] transition-all flex items-center justify-between gap-2"
                          >
                            <div className="truncate">
                              <p className="text-xs font-bold text-[#1E293B] truncate uppercase">{otherSubj.name}</p>
                              <p className="text-[10px] text-[#64748B] truncate">{quizRev?.name} • {quizRev?.questions.length || 0} Qs</p>
                            </div>
                            <button
                              onClick={() => {
                                if (quizRev) {
                                  onSelectReviewerAndTab?.(otherSubj.id, quizRev.id, 'quiz');
                                }
                              }}
                              className="px-2.5 py-1 rounded-xl text-white text-[10px] font-semibold shrink-0 cursor-pointer"
                              style={{ backgroundColor: theme.primary }}
                            >
                              Quiz →
                            </button>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* MODE 2: FLASHCARDS MODE */}
      {activeMode === 'flashcards' && (
        <div className="max-w-xl mx-auto py-6 space-y-6">
          <div className="flex items-center justify-between text-xs text-[#7A7072]">
            <span>
              Question {flashcardIndex + 1} of {questions.length}
            </span>
            <span className="text-[11px] bg-[#FDEEF1] text-[#EE5D7E] px-2.5 py-0.5 rounded-full font-semibold">
              Tap card to flip
            </span>
          </div>

          {questions[flashcardIndex] && (
            <div
              onClick={() => setIsFlashcardFlipped(!isFlashcardFlipped)}
              className="min-h-[320px] bg-white rounded-3xl p-8 border-2 border-[#F0E5E3] hover:border-[#EE5D7E]/50 transition-all cursor-pointer shadow-md flex flex-col justify-between text-center select-none"
            >
              <div className="flex justify-between items-center text-xs">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    getTypeBadge(questions[flashcardIndex].type).color
                  }`}
                >
                  {getTypeBadge(questions[flashcardIndex].type).label}
                </span>
                <span className="text-[11px] text-[#A09898]">
                  {isFlashcardFlipped ? 'Answer' : 'Question'}
                </span>
              </div>

              <div className="my-auto py-6">
                {!isFlashcardFlipped ? (
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#231F20] leading-snug">
                      {questions[flashcardIndex].question}
                    </h3>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                      Correct Answer
                    </span>
                    <p className="font-serif text-xl font-bold text-[#231F20]">
                      {Array.isArray(questions[flashcardIndex].correctAnswer)
                        ? questions[flashcardIndex].correctAnswer.join(', ')
                        : questions[flashcardIndex].correctAnswer}
                    </p>
                    <p className="text-xs text-[#7A7072] leading-relaxed pt-2 border-t border-[#F5EAE8]">
                      {questions[flashcardIndex].explanation}
                    </p>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-[#A09898]">
                {isFlashcardFlipped ? 'Click to show question' : 'Click to reveal answer'}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => {
                setIsFlashcardFlipped(false);
                setFlashcardIndex(prev => Math.max(0, prev - 1));
              }}
              disabled={flashcardIndex === 0}
              className="flex-1 py-2.5 rounded-2xl border border-[#EFE5E3] bg-white hover:bg-[#FAF4F3] text-xs font-semibold text-[#645E60] disabled:opacity-40 transition-colors cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={() => {
                setIsFlashcardFlipped(false);
                setFlashcardIndex(prev => Math.min(questions.length - 1, prev + 1));
              }}
              disabled={flashcardIndex === questions.length - 1}
              className="flex-1 py-2.5 rounded-2xl bg-[#EE5D7E] hover:bg-[#E34E70] text-white text-xs font-semibold shadow-xs disabled:opacity-40 transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* MODE 3: QUESTION BANK */}
      {activeMode === 'bank' && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {['all', 'multiple_choice', 'identification', 'enumeration', 'essay'].map((f) => (
              <button
                key={f}
                onClick={() => setBankFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  bankFilter === f
                    ? 'bg-[#EE5D7E] text-white font-semibold shadow-2xs'
                    : 'bg-white border border-[#EFE5E3] text-[#645E60] hover:bg-[#FDEEF1]'
                }`}
              >
                {f === 'all' ? 'All Types' : f.replace('_', ' ')}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {questions
              .filter(q => bankFilter === 'all' || q.type === bankFilter)
              .map((q, idx) => (
                <div
                  key={q.id}
                  className="bg-white rounded-3xl p-6 border border-[#F0E6E4] shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        getTypeBadge(q.type).color
                      }`}
                    >
                      {getTypeBadge(q.type).label}
                    </span>
                    <span className="text-xs font-semibold text-[#8C8385]">
                      Question #{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#231F20]">
                    {q.question}
                  </h4>

                  {q.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#524B4D]">
                      {q.options.map((opt, i) => (
                        <div
                          key={i}
                          className={`p-2 rounded-xl border ${
                            normalize(opt) === normalize(q.correctAnswer as string)
                              ? 'bg-emerald-50 border-emerald-300 font-semibold text-emerald-900'
                              : 'bg-[#FCF8F7] border-[#F0E6E4]'
                          }`}
                        >
                          {String.fromCharCode(65 + i)}. {opt}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-2 text-xs">
                    <span className="font-bold text-[#231F20]">Correct Answer: </span>
                    <span className="text-[#EE5D7E] font-semibold">
                      {Array.isArray(q.correctAnswer)
                        ? q.correctAnswer.join(', ')
                        : q.correctAnswer}
                    </span>
                  </div>

                  <p className="text-[11px] text-[#7A7072] leading-relaxed pt-1 border-t border-[#F5EAE8]">
                    <span className="font-semibold text-[#444]">Explanation: </span>
                    {q.explanation}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
