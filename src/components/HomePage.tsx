import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Eye,
  Award,
  Search,
  ArrowRight
} from 'lucide-react';
import { Exam } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';
import { ThemePicker } from './ThemePicker';

interface HomePageProps {
  exams: Exam[];
  onSelectExam: (examId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  exams,
  onSelectExam
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
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen text-slate-800" style={{ backgroundColor: theme.bgPage }}>
      {/* Clean Top Navigation Bar */}
      <header className="h-16 px-6 sm:px-10 flex items-center justify-between border-b border-[#F0E6E4] bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div 
            className="w-7 h-7 rounded-xl flex items-center justify-center text-white shadow-xs"
            style={{ backgroundColor: theme.primary }}
          >
            <Sparkles className="w-3.5 h-3.5 fill-white" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-slate-900">
            Bloomie<span style={{ color: theme.primary }}>.</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <ThemePicker />
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6 animate-in fade-in duration-200">
        {/* Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900">
              Exams
            </h1>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center bg-[#FAF7F6] p-1 rounded-xl border border-slate-200 text-xs">
              <button
                onClick={() => setFilterTab('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  filterTab === 'all'
                    ? 'bg-white shadow-2xs font-bold text-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                All ({exams.length})
              </button>
              <button
                onClick={() => setFilterTab('upcoming')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  filterTab === 'upcoming'
                    ? 'bg-white shadow-2xs font-bold text-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Upcoming ({upcomingExams.length})
              </button>
              <button
                onClick={() => setFilterTab('past')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  filterTab === 'past'
                    ? 'bg-white shadow-2xs font-bold text-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Past ({pastExams.length})
              </button>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 outline-none w-40 sm:w-48 focus:border-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Minimal Exams List */}
        <div className="space-y-4">
          {filteredExams.map((exam) => {
            const daysLeft = calculateDaysLeft(exam.date);
            const allReviewers = exam.subjects.flatMap(s => s.reviewers);
            const totalReviewers = allReviewers.length;

            const totalScroll = allReviewers.reduce((sum, r) => sum + (r.notesScrollProgress || 0), 0);
            const avgScrollProgress = totalReviewers > 0 ? Math.round(totalScroll / totalReviewers) : 0;

            const completedQuizzes = allReviewers.filter(r => r.quizAccuracy?.completed);
            const totalCorrect = completedQuizzes.reduce((sum, r) => sum + (r.quizAccuracy?.correctCount || 0), 0);
            const totalQuestionsAnswered = completedQuizzes.reduce((sum, r) => sum + (r.quizAccuracy?.totalCount || 0), 0);
            const avgAccuracy = totalQuestionsAnswered > 0 ? Math.round((totalCorrect / totalQuestionsAnswered) * 100) : null;

            const isUpcoming = exam.status === 'upcoming';

            return (
              <div
                key={exam.id}
                onClick={() => onSelectExam(exam.id)}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EFE5E3] hover:border-slate-300 hover:shadow-xs transition-all cursor-pointer space-y-3.5 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {exam.code && (
                      <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {exam.code}
                      </span>
                    )}
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-black">
                      {exam.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 shrink-0">
                    {isUpcoming ? (
                      <span 
                        className="inline-flex items-center gap-1 font-semibold text-xs"
                        style={{ color: theme.primary }}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{daysLeft > 0 ? `${daysLeft}d left` : 'Today'}</span>
                      </span>
                    ) : (
                      <span className="text-slate-400">Past</span>
                    )}
                    <span>·</span>
                    <span>{formatDateDisplay(exam.date)}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      <span>Read:</span>
                      <span className="font-bold text-slate-800">{avgScrollProgress}%</span>
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-slate-400" />
                      <span>Accuracy:</span>
                      <span className="font-bold text-slate-800">
                        {avgAccuracy !== null ? `${avgAccuracy}%` : '—'}
                      </span>
                    </span>

                    <span>·</span>
                    <span>{exam.subjects.length} subjects</span>
                  </div>

                  <span className="font-semibold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform" style={{ color: theme.primary }}>
                    <span>Open Reviewer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
