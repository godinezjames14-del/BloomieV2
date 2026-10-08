import React from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  FileText,
  Eye,
  Award
} from 'lucide-react';
import { Exam, Reviewer, WorkspaceTab } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';

interface ExamOverviewViewProps {
  exam: Exam;
  onSelectReviewerAndTab: (subjectId: string, reviewerId: string, tab: WorkspaceTab) => void;
}

export const ExamOverviewView: React.FC<ExamOverviewViewProps> = ({
  exam,
  onSelectReviewerAndTab
}) => {
  const { theme } = useFlowerTheme();

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

  const calculateDaysLeft = (dateStr: string) => {
    const now = new Date();
    const target = new Date(`${dateStr}T00:00:00`);
    return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  };

  const daysLeft = calculateDaysLeft(exam.date);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl p-6 border border-[#F0E6E4] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs text-slate-500">
              {formatDateDisplay(exam.date)}
            </span>
            {exam.code && (
              <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                {exam.code}
              </span>
            )}
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            {exam.title}
          </h1>

          {exam.description && (
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              {exam.description}
            </p>
          )}
        </div>

        {exam.status === 'upcoming' && daysLeft > 0 && (
          <div className="bg-[#FAF4F3] border border-[#F0DFE2] rounded-xl px-4 py-3 text-center shrink-0">
            <span className="font-serif text-2xl font-bold block" style={{ color: theme.primary }}>
              {daysLeft}d
            </span>
            <span className="text-[10px] font-medium text-slate-400">
              remaining
            </span>
          </div>
        )}
      </div>

      {/* Subjects Catalog */}
      <div className="space-y-6">
        {exam.subjects.map((subject) => (
          <div key={subject.id} className="space-y-3">
            {/* Subject Banner */}
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#F0E6E4]">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.primary }} />
              <h2 className="font-serif text-lg font-bold text-slate-900">
                {subject.name}
              </h2>
              <span className="text-xs text-slate-400">
                ({subject.reviewers.length})
              </span>
            </div>

            {/* Reviewers Grid under this subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subject.reviewers.map((reviewer) => {
                const scroll = reviewer.notesScrollProgress || 0;
                const quiz = reviewer.quizAccuracy;

                return (
                  <div
                    key={reviewer.id}
                    className="bg-white rounded-2xl p-5 border border-[#F0E6E4] hover:shadow-2xs transition-all flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-serif text-base font-bold text-slate-900 truncate">
                          {reviewer.name}
                        </h3>
                        {quiz?.completed && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                            {quiz.scorePercent}%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Direct Launch Button */}
                    <div className="pt-2 border-t border-slate-100 flex">
                      <button
                        onClick={() => {
                          const tab = reviewer.notes.length > 0 ? 'notes' : 'quiz';
                          onSelectReviewerAndTab(subject.id, reviewer.id, tab);
                        }}
                        className="w-full py-2 rounded-xl text-white text-xs font-semibold transition-colors text-center shadow-xs cursor-pointer hover:opacity-95"
                        style={{ backgroundColor: theme.primary }}
                      >
                        Open
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
