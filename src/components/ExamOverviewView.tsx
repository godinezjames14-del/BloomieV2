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
    <div className="max-w-5xl mx-auto px-8 py-10 space-y-10 animate-in fade-in duration-300">
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl p-8 border border-[#F0E6E4] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span 
              className="text-[11px] font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
            >
              {exam.status === 'upcoming'
                ? `Test scheduled for ${formatDateDisplay(exam.date)}`
                : `Past Exam Set • ${formatDateDisplay(exam.date)}`}
            </span>
            {exam.code && (
              <span className="text-[10px] font-mono font-bold text-[#8C8385] bg-[#FCF8F7] px-2 py-0.5 rounded-md border border-[#F3E7E5]">
                {exam.code}
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#231F20]">
            {exam.title}
          </h1>

          <p className="text-xs sm:text-sm text-[#7D7375] mt-2 max-w-2xl leading-relaxed">
            {exam.description}
          </p>
        </div>

        {exam.status === 'upcoming' && daysLeft > 0 && (
          <div className="bg-[#FAF4F3] border border-[#F0DFE2] rounded-2xl p-4 text-center shrink-0 min-w-[120px]">
            <span className="font-serif text-3xl font-bold block" style={{ color: theme.primary }}>
              {daysLeft}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C8385]">
              Days Left
            </span>
          </div>
        )}
      </div>

      {/* Subjects & Reviewers Catalog */}
      <div className="space-y-8">
        <div>
          <p className="text-[11px] font-bold tracking-widest text-[#9C8F90] uppercase">
            Curated Subjects
          </p>
          <h2 className="font-serif text-2xl font-bold text-[#231F20]">
            Subjects & Review Modules
          </h2>
        </div>

        {exam.subjects.map((subject) => (
          <div key={subject.id} className="space-y-4">
            {/* Subject Banner */}
            <div className="flex items-center gap-3 pb-2 border-b border-[#F0E6E4]">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.primary }} />
              <h3 className="font-serif text-xl font-bold text-[#231F20]">
                {subject.name}
              </h3>
              <span className="text-xs text-[#8C8385]">
                ({subject.reviewers.length} reviewer{subject.reviewers.length > 1 ? 's' : ''})
              </span>
            </div>

            {/* Reviewers Grid under this subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {subject.reviewers.map((reviewer) => {
                const scroll = reviewer.notesScrollProgress || 0;
                const quiz = reviewer.quizAccuracy;

                return (
                  <div
                    key={reviewer.id}
                    className="bg-white rounded-3xl p-6 border border-[#F0E6E4] hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-serif text-lg font-bold text-[#231F20] truncate">
                          {reviewer.name}
                        </h4>
                        {quiz?.completed ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                            {quiz.scorePercent}% Accuracy
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#FAF4F3] text-[#8C8385] shrink-0">
                            Quiz pending
                          </span>
                        )}
                      </div>

                      <p className="text-xs font-mono text-[#8C8385] mb-2 truncate">
                        📄 {reviewer.fileName}
                      </p>

                      <p className="text-xs text-[#524B4D] line-clamp-2 leading-relaxed mb-4">
                        {reviewer.fileSnippet || 'Comprehensive review notes and active recall question bank.'}
                      </p>

                      {/* AUTHENTIC READING SCROLL PROGRESS LINE */}
                      <div className="mb-4 p-3 bg-[#FCF8F7] rounded-2xl border border-[#F5ECE9] space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#645E60] flex items-center gap-1 font-medium text-[11px]">
                            <Eye className="w-3 h-3 text-[#A09898]" />
                            <span>Notes Reading Progress:</span>
                          </span>
                          <span className="font-bold text-xs" style={{ color: theme.primary }}>
                            {scroll}%
                          </span>
                        </div>
                        <div className="w-full bg-[#EFE5E3] h-1.5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: `${Math.max(scroll > 0 ? 5 : 0, scroll)}%`,
                              backgroundColor: theme.primary
                            }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-[#7D7375] mb-4">
                        <div className="flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" style={{ color: theme.primary }} />
                          <span>{reviewer.notes.length} notes</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
                          <span>{reviewer.questions.length} questions</span>
                        </div>
                      </div>
                    </div>

                    {/* Direct Launch Buttons */}
                    <div className="pt-3 border-t border-[#F5EAE8] flex gap-2">
                      <button
                        onClick={() => onSelectReviewerAndTab(subject.id, reviewer.id, 'notes')}
                        className="flex-1 py-2.5 rounded-xl bg-[#FAF4F3] hover:bg-[#F5EBE8] text-xs font-semibold transition-colors text-center cursor-pointer"
                        style={{ color: theme.primary }}
                      >
                        Study Notes
                      </button>
                      <button
                        onClick={() => onSelectReviewerAndTab(subject.id, reviewer.id, 'quiz')}
                        className="flex-1 py-2.5 rounded-xl text-white text-xs font-semibold transition-colors text-center shadow-xs cursor-pointer"
                        style={{ backgroundColor: theme.primary }}
                      >
                        Take Quiz
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
