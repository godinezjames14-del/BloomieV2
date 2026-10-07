import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  ArrowRight, 
  Check, 
  Clock, 
  FileText, 
  HelpCircle,
  BookOpen,
  Award,
  Layers,
  Plus
} from 'lucide-react';
import { Reviewer, ActiveTab } from '../types';

interface DashboardViewProps {
  currentReviewer: Reviewer;
  allReviewers: Reviewer[];
  onUpdateReviewer: (updated: Partial<Reviewer>) => void;
  onSelectReviewer: (id: string) => void;
  onNavigateToTab: (tab: ActiveTab) => void;
  onOpenUploadModal: () => void;
  streakDays: number;
  isDeveloperMode: boolean;
  onOpenDeveloperModal: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  currentReviewer,
  allReviewers,
  onUpdateReviewer,
  onSelectReviewer,
  onNavigateToTab,
  onOpenUploadModal,
  streakDays,
  isDeveloperMode,
  onOpenDeveloperModal
}) => {
  // Calendar State
  const testDateObj = new Date(currentReviewer.testDate || '2026-09-25T00:00:00');
  const [calendarYear, setCalendarYear] = useState(testDateObj.getFullYear() || 2026);
  const [calendarMonth, setCalendarMonth] = useState(testDateObj.getMonth()); // 0-indexed (8 = September)

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Calendar navigation
  const prevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear(calendarYear - 1);
    } else {
      setCalendarMonth(calendarMonth - 1);
    }
  };

  const nextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear(calendarYear + 1);
    } else {
      setCalendarMonth(calendarMonth + 1);
    }
  };

  const resetToTestDate = () => {
    const d = new Date(currentReviewer.testDate || '2026-09-25T00:00:00');
    setCalendarYear(d.getFullYear());
    setCalendarMonth(d.getMonth());
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInCurrentMonth = getDaysInMonth(calendarYear, calendarMonth);
  const firstDay = getFirstDayOfWeek(calendarYear, calendarMonth);

  const parseTestDate = () => {
    try {
      const parts = currentReviewer.testDate.split('-');
      if (parts.length === 3) {
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10) - 1;
        const d = parseInt(parts[2], 10);
        return { year: y, month: m, day: d };
      }
    } catch {
      // fallback
    }
    return { year: 2026, month: 8, day: 25 };
  };

  const selectedDate = parseTestDate();

  const handleSelectDay = (day: number) => {
    const formattedMonth = String(calendarMonth + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    const newDateStr = `${calendarYear}-${formattedMonth}-${formattedDay}`;
    onUpdateReviewer({ testDate: newDateStr });
  };

  const formatTestDateDisplay = () => {
    try {
      const d = new Date(`${currentReviewer.testDate}T00:00:00`);
      return d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return currentReviewer.testDate;
    }
  };

  const calculateDaysLeft = () => {
    const now = new Date();
    const test = new Date(`${currentReviewer.testDate}T00:00:00`);
    const diffTime = test.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysRemaining = calculateDaysLeft();

  // Summary counts
  const conceptsCount = currentReviewer.notes.filter(n => n.category === 'Concept').length;
  const definitionsCount = currentReviewer.notes.filter(n => n.category === 'Definition').length;
  const formulasCount = currentReviewer.notes.filter(n => n.category === 'Formula').length;
  const mcCount = currentReviewer.questions.filter(q => q.type === 'multiple_choice').length;
  const otherQCount = currentReviewer.questions.length - mcCount;

  return (
    <div className="max-w-6xl mx-auto px-8 py-10 space-y-12 animate-in fade-in duration-300">
      {/* Top Hero Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold tracking-widest text-[#9C8F90] uppercase mb-1">
            Your Study Space
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#231F20]">
            Let’s make it <span className="text-[#EE5D7E] italic">bloom.</span>
          </h1>
          <p className="text-sm text-[#7D7375] mt-2">
            A calm place for your notes, questions, and little wins.
          </p>
        </div>

        {/* Quiet Study Status Pill */}
        <div className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F0DFE2] bg-white text-xs font-medium text-[#7D7375] shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#EE5D7E]" />
          <span>Curated Module: <strong className="text-[#231F20] font-semibold">{currentReviewer.name}</strong></span>
        </div>
      </div>

      {/* Main Study Hub: Clean Active Reviewer Spotlight & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Spotlight Card: Coral Pink Card (7 columns) */}
        <div className="lg:col-span-7 bg-[#EE5D7E] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-pink-200/50 flex flex-col justify-between min-h-[320px]">
          {/* Subtle Organic Background Wave Motif */}
          <svg
            className="absolute -bottom-6 -right-6 w-48 h-48 text-[#F47E99]/40 pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          >
            <path d="M 10,80 Q 30,30 50,75 T 90,40" />
          </svg>

          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-bold text-white/90 bg-white/15 px-3 py-1 rounded-full mb-5">
              <span>Active Reviewer</span>
              <Sparkles className="w-2.5 h-2.5 fill-white" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-2">
              {currentReviewer.name}
            </h2>

            <p className="text-xs font-mono text-white/90 mb-3 flex items-center gap-1.5">
              <span>📄</span>
              <span>{currentReviewer.fileName}</span>
            </p>

            <p className="text-xs sm:text-sm text-white/85 max-w-lg font-light leading-relaxed">
              {currentReviewer.fileSnippet || 'Curated study materials covering fundamental laws, concepts, and review exercises.'}
            </p>
          </div>

          {/* Quick Action Buttons to directly jump into Notes or Quiz */}
          <div className="mt-8 z-10 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigateToTab('notes')}
              className="bg-white text-[#EE5D7E] hover:bg-white/95 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Study Notes ({currentReviewer.notes.length})</span>
            </button>

            <button
              onClick={() => onNavigateToTab('quiz')}
              className="bg-[#231F20] text-white hover:bg-black px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Practice Quiz ({currentReviewer.questions.length})</span>
            </button>
          </div>
        </div>

        {/* Right Column: 2 Clean Study Overview Cards (5 columns) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Card 1: Butter Yellow Notes Breakdown Card */}
          <div className="bg-[#FEF3C7] rounded-3xl p-6 text-[#453610] shadow-sm flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-200/80 flex items-center justify-center text-amber-900">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#3E300B]">Notes & Key Concepts</h3>
                    <p className="text-xs text-amber-900/80">{currentReviewer.notes.length} curated study cards</p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-amber-200/90 text-amber-900 px-2.5 py-0.5 rounded-full">
                  {currentReviewer.notes.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 my-3">
                {conceptsCount > 0 && (
                  <span className="text-[10px] font-medium bg-white/70 px-2 py-0.5 rounded-md text-amber-900">
                    {conceptsCount} Concepts
                  </span>
                )}
                {definitionsCount > 0 && (
                  <span className="text-[10px] font-medium bg-white/70 px-2 py-0.5 rounded-md text-amber-900">
                    {definitionsCount} Definitions
                  </span>
                )}
                {formulasCount > 0 && (
                  <span className="text-[10px] font-medium bg-white/70 px-2 py-0.5 rounded-md text-amber-900">
                    {formulasCount} Formulas
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={() => onNavigateToTab('notes')}
              className="mt-3 text-xs font-bold text-amber-950 hover:text-amber-800 flex items-center gap-1 cursor-pointer self-start"
            >
              <span>Review notes & flashcards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Soft Mint Question Bank Overview Card */}
          <div className="bg-[#E0F4F4] rounded-3xl p-6 text-[#1A4545] shadow-sm flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-200/70 flex items-center justify-center text-teal-900">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#143B3B]">Quiz Questions</h3>
                    <p className="text-xs text-[#386262]">{currentReviewer.questions.length} test items prepared</p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-teal-200/90 text-teal-900 px-2.5 py-0.5 rounded-full">
                  {currentReviewer.questions.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 my-3">
                <span className="text-[10px] font-medium bg-white/70 px-2 py-0.5 rounded-md text-[#143B3B]">
                  {mcCount} Multiple Choice
                </span>
                <span className="text-[10px] font-medium bg-white/70 px-2 py-0.5 rounded-md text-[#143B3B]">
                  {otherQCount} Open Response
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigateToTab('quiz')}
              className="mt-3 text-xs font-bold text-[#143B3B] hover:text-teal-950 flex items-center gap-1 cursor-pointer self-start"
            >
              <span>Start practice session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* PLAN AHEAD: Calendar Card */}
      <div className="bg-white rounded-3xl p-8 border border-[#F0E6E4] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text & Test Status Pill */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <p className="text-[11px] font-bold tracking-widest text-[#9C8F90] uppercase mb-1">
                Plan Ahead
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#231F20]">
                When is your <span className="text-[#EE5D7E] font-serif">test?</span>
              </h2>
              <p className="text-xs text-[#7D7375] mt-2 leading-relaxed">
                Choose a date so Bloomie can keep your review session in sight.
              </p>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#FDEEF1] text-[#EE5D7E] text-xs font-semibold">
              <CalendarIcon className="w-3.5 h-3.5 text-[#EE5D7E]" />
              <span>Test scheduled for {formatTestDateDisplay()}.</span>
              {daysRemaining > 0 && (
                <span className="ml-1 text-[11px] bg-[#EE5D7E] text-white px-2 py-0.5 rounded-full">
                  {daysRemaining}d away
                </span>
              )}
            </div>
          </div>

          {/* Right Calendar View */}
          <div className="lg:col-span-7 bg-[#FCF8F7] rounded-2xl p-6 border border-[#F5EAE8]">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="p-1.5 rounded-xl hover:bg-[#F3E7E5] text-[#7A7072] transition-colors"
                title="Previous Month"
              >
                <ChevronLeft className="w-4 h-4 text-[#EE5D7E]" />
              </button>

              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-[#231F20]">
                  {monthNames[calendarMonth]} {calendarYear}
                </span>
                <button
                  onClick={resetToTestDate}
                  title="Reset to test date"
                  className="p-1 rounded-full hover:bg-[#FDEEF1] text-[#EE5D7E] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={nextMonth}
                className="p-1.5 rounded-xl hover:bg-[#F3E7E5] text-[#7A7072] transition-colors"
                title="Next Month"
              >
                <ChevronRight className="w-4 h-4 text-[#EE5D7E]" />
              </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-[#8C8284] mb-2">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="h-8 w-8 mx-auto" />
              ))}

              {Array.from({ length: daysInCurrentMonth }).map((_, i) => {
                const dayNum = i + 1;
                const isSelected =
                  selectedDate.year === calendarYear &&
                  selectedDate.month === calendarMonth &&
                  selectedDate.day === dayNum;

                return (
                  <button
                    key={`day-${dayNum}`}
                    onClick={() => handleSelectDay(dayNum)}
                    className={`h-8 w-8 mx-auto rounded-xl flex items-center justify-center font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#EE5D7E] text-white font-bold shadow-md shadow-pink-200 scale-105'
                        : 'text-[#443E40] hover:bg-[#F5E8E6] hover:text-[#231F20]'
                    }`}
                  >
                    {dayNum}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* YOUR MATERIALS: Study Shelf Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-[#9C8F90] uppercase">
              Your Materials
            </p>
            <h2 className="font-serif text-2xl font-bold text-[#231F20]">
              Your study shelf
            </h2>
          </div>
          {isDeveloperMode ? (
            <button
              onClick={onOpenUploadModal}
              className="text-xs font-semibold text-[#EE5D7E] hover:text-[#D8385E] flex items-center gap-1.5 cursor-pointer bg-[#FDEEF1] px-3.5 py-1.5 rounded-full"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Reviewer (Dev)</span>
            </button>
          ) : (
            <button
              onClick={onOpenDeveloperModal}
              className="text-xs text-[#8C8385] hover:text-[#EE5D7E] flex items-center gap-1 cursor-pointer"
            >
              <span>Curated Collection • Dev Access 🔒</span>
            </button>
          )}
        </div>

        {/* Reviewers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allReviewers.map((rev) => {
            const isActive = rev.id === currentReviewer.id;
            return (
              <div
                key={rev.id}
                className={`bg-white rounded-3xl p-6 border transition-all ${
                  isActive
                    ? 'border-[#F8CCD6] ring-2 ring-[#EE5D7E]/20 shadow-md'
                    : 'border-[#F0E6E4] hover:border-[#E8D4D2] shadow-2xs hover:shadow-sm'
                } flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="font-serif text-lg font-bold text-[#2D2A2E] truncate">
                      {rev.name}
                    </span>
                    {isActive ? (
                      <span className="text-[10px] bg-[#FDEEF1] text-[#EE5D7E] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                        Active
                      </span>
                    ) : (
                      <button
                        onClick={() => onSelectReviewer(rev.id)}
                        className="text-[10px] text-[#8C8385] hover:text-[#EE5D7E] font-semibold uppercase tracking-wider shrink-0 cursor-pointer"
                      >
                        Set Active
                      </button>
                    )}
                  </div>

                  <p className="text-xs text-[#8C8385] font-mono mb-4 truncate">
                    📄 {rev.fileName}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-[#645E60] mb-4">
                    <div className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#EE5D7E]" />
                      <span>{rev.notes.length} notes</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
                      <span>{rev.questions.length} questions</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F5EAE8] flex gap-2">
                  <button
                    onClick={() => {
                      onSelectReviewer(rev.id);
                      onNavigateToTab('notes');
                    }}
                    className="flex-1 py-2 rounded-xl bg-[#FAF4F3] hover:bg-[#FDEEF1] text-[#EE5D7E] text-xs font-semibold transition-colors text-center cursor-pointer"
                  >
                    Study Notes
                  </button>
                  <button
                    onClick={() => {
                      onSelectReviewer(rev.id);
                      onNavigateToTab('quiz');
                    }}
                    className="flex-1 py-2 rounded-xl bg-[#EE5D7E] hover:bg-[#E34E70] text-white text-xs font-semibold transition-colors text-center shadow-xs cursor-pointer"
                  >
                    Take Quiz
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
