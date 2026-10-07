import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  Layers, 
  Search,
  Eye,
  Check
} from 'lucide-react';
import { Exam } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';
import { ThemePicker } from './ThemePicker';

interface HomePageProps {
  exams: Exam[];
  onSelectExam: (examId: string) => void;
  isDeveloperMode: boolean;
  onOpenDeveloperModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  exams,
  onSelectExam,
  isDeveloperMode,
  onOpenDeveloperModal
}) => {
  const { theme } = useFlowerTheme();
  const [filterTab, setFilterTab] = useState<'all' | 'upcoming' | 'past'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const upcomingExams = exams.filter(e => e.status === 'upcoming');
  const pastExams = exams.filter(e => e.status === 'past');

  const filteredExams = exams.filter(e => {
    const matchesTab = filterTab === 'all' || e.status === filterTab;
    const matchesSearch =
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.code && e.code.toLowerCase().includes(searchQuery.toLowerCase())) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.subjects.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const calculateDaysLeft = (dateStr: string) => {
    const now = new Date();
    const target = new Date(`${dateStr}T00:00:00`);
    return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  };

  const formatDateDisplay = (dateStr: string) => {
    try {
      const d = new Date(`${dateStr}T00:00:00`);
      return d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen text-[#2D2A2E]" style={{ backgroundColor: theme.bgPage }}>
      {/* Clean Top Navigation Bar */}
      <header className="h-16 px-6 sm:px-12 flex items-center justify-between border-b border-[#F0E6E4] bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div 
            className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform hover:scale-105"
            style={{ backgroundColor: theme.primary }}
          >
            <Sparkles className="w-4 h-4 fill-white" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#231F20]">
            Bloomie<span style={{ color: theme.primary }}>.</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Flower Theme Selector */}
          <ThemePicker />

          {/* Dev Access Badge */}
          <button
            onClick={onOpenDeveloperModal}
            className={`text-xs px-3 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
              isDeveloperMode
                ? 'bg-emerald-100 text-emerald-800 font-semibold'
                : 'text-[#9A9193] hover:text-[#231F20] hover:bg-[#FAF4F3]'
            }`}
          >
            {isDeveloperMode ? '👨‍💻 Developer Mode' : 'Dev Access 🔒'}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 sm:px-8 py-12 space-y-10 animate-in fade-in duration-300">
        {/* Clean Hero Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[11px] font-bold tracking-widest text-[#9C8F90] uppercase">
            Your Exam Schedule & Study Space
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-[#231F20]">
            Let’s make it <span className="italic" style={{ color: theme.primary }}>bloom.</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#7D7375] leading-relaxed">
            Select an exam to study its subjects, scroll through lecture notes, and test your question accuracy.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Tabs */}
          <div className="flex items-center gap-2 bg-[#FCF8F7] p-1 rounded-2xl border border-[#EFE5E3]">
            <button
              onClick={() => setFilterTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterTab === 'all'
                  ? 'bg-white shadow-2xs font-bold'
                  : 'text-[#7D7375] hover:text-[#231F20]'
              }`}
              style={{ color: filterTab === 'all' ? theme.primary : undefined }}
            >
              All Exams ({exams.length})
            </button>
            <button
              onClick={() => setFilterTab('upcoming')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterTab === 'upcoming'
                  ? 'bg-white shadow-2xs font-bold'
                  : 'text-[#7D7375] hover:text-[#231F20]'
              }`}
              style={{ color: filterTab === 'upcoming' ? theme.primary : undefined }}
            >
              Upcoming ({upcomingExams.length})
            </button>
            <button
              onClick={() => setFilterTab('past')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterTab === 'past'
                  ? 'bg-white shadow-2xs font-bold'
                  : 'text-[#7D7375] hover:text-[#231F20]'
              }`}
              style={{ color: filterTab === 'past' ? theme.primary : undefined }}
            >
              Past ({pastExams.length})
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-[#A09898] absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search exams or subjects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#EFE5E3] rounded-full pl-9 pr-4 py-2 text-xs text-[#231F20] placeholder-[#A09898] focus:outline-none focus:ring-2"
              style={{ borderColor: '#EFE5E3' }}
            />
          </div>
        </div>

        {/* Exams Grid */}
        <div className="space-y-6">
          {filteredExams.map((exam) => {
            const daysLeft = calculateDaysLeft(exam.date);
            const allReviewers = exam.subjects.flatMap(s => s.reviewers);
            const totalReviewers = allReviewers.length;

            // Calculate authentic reading progress (average scroll depth of reviewers)
            const totalScroll = allReviewers.reduce((sum, r) => sum + (r.notesScrollProgress || 0), 0);
            const avgScrollProgress = totalReviewers > 0 ? Math.round(totalScroll / totalReviewers) : 0;

            // Calculate authentic accuracy if finished questions
            const completedQuizzes = allReviewers.filter(r => r.quizAccuracy?.completed);
            const totalCorrect = completedQuizzes.reduce((sum, r) => sum + (r.quizAccuracy?.correctCount || 0), 0);
            const totalQuestionsAnswered = completedQuizzes.reduce((sum, r) => sum + (r.quizAccuracy?.totalCount || 0), 0);
            const avgAccuracy = totalQuestionsAnswered > 0 ? Math.round((totalCorrect / totalQuestionsAnswered) * 100) : null;

            const isUpcoming = exam.status === 'upcoming';

            return (
              <div
                key={exam.id}
                onClick={() => onSelectExam(exam.id)}
                className={`bg-white rounded-3xl p-6 sm:p-8 border transition-all cursor-pointer ${
                  isUpcoming
                    ? 'border-[#F0E6E4] hover:shadow-md hover:scale-[1.005]'
                    : 'border-[#F0E6E4] hover:border-[#E8DDD9] opacity-95 hover:opacity-100'
                } group`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    {/* Status Pill & Code */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {isUpcoming ? (
                        <span 
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full"
                          style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                        >
                          <Clock className="w-3 h-3" />
                          <span>{daysLeft > 0 ? `${daysLeft} days until test` : 'Scheduled Today'}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-[#FCF8F7] text-[#645E60] px-3 py-1 rounded-full border border-[#EFE5E3]">
                          <span>Past Exam Set</span>
                        </span>
                      )}

                      {exam.code && (
                        <span className="text-[10px] font-mono font-bold text-[#8C8385] bg-[#FCF8F7] px-2 py-0.5 rounded-md border border-[#F3E7E5]">
                          {exam.code}
                        </span>
                      )}
                    </div>

                    <h2 
                      className="font-serif text-2xl sm:text-3xl font-bold text-[#231F20] transition-colors"
                      style={{ color: '#231F20' }}
                    >
                      {exam.title}
                    </h2>

                    <p className="text-xs text-[#7D7375] mt-1.5 max-w-2xl leading-relaxed">
                      {exam.description}
                    </p>
                  </div>

                  {/* Date badge */}
                  <div className="shrink-0 text-left sm:text-right">
                    <span className="text-[11px] uppercase font-bold text-[#A09898] block">
                      {isUpcoming ? 'Exam Date' : 'Completed Date'}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-[#231F20]">
                      {formatDateDisplay(exam.date)}
                    </span>
                  </div>
                </div>

                {/* AUTHENTIC READING PROGRESS & QUIZ ACCURACY BARS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 p-4 rounded-2xl bg-[#FCF8F7] border border-[#F5ECE9]">
                  {/* Real Scroll Progress Line */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#8C8385]" />
                        <span className="font-semibold text-[#443E40]">Notes Reading Progress</span>
                      </div>
                      <span className="font-bold text-xs" style={{ color: theme.primary }}>
                        {avgScrollProgress}%
                      </span>
                    </div>
                    <div className="w-full bg-[#EFE5E3] h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${Math.max(avgScrollProgress > 0 ? 5 : 0, avgScrollProgress)}%`,
                          backgroundColor: theme.primary
                        }}
                      />
                    </div>
                    <p className="text-[10px] text-[#A09898]">
                      {avgScrollProgress === 0
                        ? 'Not started yet • Scroll through notes to track'
                        : avgScrollProgress >= 90
                        ? 'Fully read across all modules ✨'
                        : `${avgScrollProgress}% of notes scrolled & reviewed`}
                    </p>
                  </div>

                  {/* Real Quiz Accuracy if completed */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-[#8C8385]" />
                        <span className="font-semibold text-[#443E40]">Question Accuracy</span>
                      </div>
                      {avgAccuracy !== null ? (
                        <span className="font-bold text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {avgAccuracy}% Accuracy
                        </span>
                      ) : (
                        <span className="text-[11px] text-[#A09898]">Not finished yet</span>
                      )}
                    </div>

                    <div className="w-full bg-[#EFE5E3] h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${avgAccuracy !== null ? Math.max(5, avgAccuracy) : 0}%`,
                          backgroundColor: avgAccuracy !== null ? '#10B981' : '#D1D5DB'
                        }}
                      />
                    </div>

                    <p className="text-[10px] text-[#A09898]">
                      {avgAccuracy !== null
                        ? `${totalCorrect}/${totalQuestionsAnswered} correct answers in practice questions`
                        : `${allReviewers.reduce((s, r) => s + r.questions.length, 0)} questions ready for testing`}
                    </p>
                  </div>
                </div>

                {/* Subjects Badges & CTA */}
                <div className="pt-3 border-t border-[#F5EAE8] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A09898] mr-1">
                      Subjects:
                    </span>
                    {exam.subjects.map((subj) => (
                      <span
                        key={subj.id}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF4F3] text-[#443E40] border border-[#F0E5E3]"
                      >
                        {subj.name} ({subj.reviewers.length} rev)
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div 
                    className="flex items-center gap-1 font-bold text-xs transition-transform group-hover:translate-x-1"
                    style={{ color: theme.primary }}
                  >
                    <span>Open Reviewers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
