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
  Award,
  Plus,
  Upload,
  FolderPlus,
  ListChecks
} from 'lucide-react';
import { Exam, Reviewer, WorkspaceTab } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';

interface ExamOverviewViewProps {
  exam: Exam;
  onSelectReviewerAndTab: (subjectId: string, reviewerId: string, tab: WorkspaceTab) => void;
  onOpenAddModal?: (subjectId?: string, mode?: 'source' | 'subject' | 'quiz') => void;
}

export const ExamOverviewView: React.FC<ExamOverviewViewProps> = ({
  exam,
  onSelectReviewerAndTab,
  onOpenAddModal
}) => {
  const { theme } = useFlowerTheme();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-6 animate-in fade-in duration-200">
      {/* Top Header Card */}
      <div 
        className="rounded-2xl p-6 border shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{ 
          backgroundColor: theme.bgCard,
          borderColor: theme.borderSubtle,
          color: theme.fontPrimary
        }}
      >
        <div>
          {exam.code && (
            <div className="flex items-center gap-2 mb-1.5">
              <span 
                className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
                style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
              >
                {exam.code}
              </span>
            </div>
          )}

          <h1 className="font-serif text-2xl sm:text-3xl font-bold">
            {exam.title}
          </h1>

          {exam.description && (
            <p className="text-xs sm:text-sm opacity-75 mt-1.5 leading-relaxed max-w-3xl break-words">
              {exam.description}
            </p>
          )}
        </div>
      </div>

      {/* Quick Action Bar to Add Sources, Subjects, and Quizzes */}
      {onOpenAddModal && (
        <div 
          className="rounded-2xl p-4 border flex flex-wrap items-center justify-between gap-3"
          style={{ 
            backgroundColor: theme.bgCard,
            borderColor: theme.borderSubtle 
          }}
        >
          <div className="flex items-center gap-2">
            <div 
              className="w-7 h-7 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: theme.primary }}
            >
              <Sparkles className="w-3.5 h-3.5 fill-white" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight" style={{ color: theme.fontPrimary }}>
                Study Sources & Subjects
              </p>
              <p className="text-[11px] opacity-65">
                Upload files, paste lecture notes, or add new subjects & quizzes
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onOpenAddModal(exam.subjects[0]?.id, 'source')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-2xs hover:opacity-95 transition-opacity flex items-center gap-1.5 cursor-pointer"
              style={{ backgroundColor: theme.primary }}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>+ Add Sources</span>
            </button>

            <button
              onClick={() => onOpenAddModal(undefined, 'subject')}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold border hover:opacity-85 transition-opacity flex items-center gap-1.5 cursor-pointer"
              style={{ 
                borderColor: theme.primaryBorder,
                backgroundColor: theme.primaryLight,
                color: theme.primary 
              }}
            >
              <FolderPlus className="w-3.5 h-3.5" />
              <span>+ New Subject</span>
            </button>

            <button
              onClick={() => onOpenAddModal(exam.subjects[0]?.id, 'quiz')}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold border hover:opacity-85 transition-opacity flex items-center gap-1.5 cursor-pointer"
              style={{ 
                borderColor: theme.borderSubtle,
                backgroundColor: theme.bgPage,
                color: theme.fontPrimary 
              }}
            >
              <ListChecks className="w-3.5 h-3.5" />
              <span>+ Build Quiz</span>
            </button>
          </div>
        </div>
      )}

      {/* Subjects Catalog */}
      <div className="space-y-6">
        {exam.subjects.map((subject) => (
          <div key={subject.id} className="space-y-3">
            {/* Subject Banner */}
            <div 
              className="flex items-center justify-between pb-2 border-b"
              style={{ borderColor: theme.borderSubtle }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: subject.color || theme.primary }} />
                <h2 className="font-serif text-lg font-bold" style={{ color: theme.fontPrimary }}>
                  {subject.name}
                </h2>
                <span className="text-xs opacity-60">
                  ({subject.reviewers.length} materials)
                </span>
              </div>

              {onOpenAddModal && (
                <button
                  onClick={() => onOpenAddModal(subject.id, 'source')}
                  className="text-xs font-semibold px-2.5 py-1 rounded-lg border flex items-center gap-1 transition-all cursor-pointer hover:opacity-85"
                  style={{ 
                    borderColor: theme.primaryBorder,
                    backgroundColor: theme.primaryLight,
                    color: theme.primary 
                  }}
                >
                  <Plus className="w-3 h-3" />
                  <span>Add Source to Subject</span>
                </button>
              )}
            </div>

            {/* Reviewers Grid under this subject */}
            {subject.reviewers.length === 0 ? (
              <div 
                className="rounded-2xl p-6 border text-center space-y-2"
                style={{ backgroundColor: theme.bgCard, borderColor: theme.borderSubtle }}
              >
                <p className="text-xs opacity-65">
                  No study materials or quizzes added yet for {subject.name}.
                </p>
                {onOpenAddModal && (
                  <button
                    onClick={() => onOpenAddModal(subject.id, 'source')}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Upload or Generate First Source</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subject.reviewers.map((reviewer) => {
                  const quiz = reviewer.quizAccuracy;

                  return (
                    <div
                      key={reviewer.id}
                      className="rounded-2xl p-5 border hover:shadow-2xs transition-all flex flex-col justify-between space-y-3"
                      style={{ 
                        backgroundColor: theme.bgCard,
                        borderColor: theme.borderSubtle,
                        color: theme.fontPrimary 
                      }}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-serif text-base font-bold leading-snug break-words">
                            {reviewer.name}
                          </h3>
                          {quiz?.completed && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 shrink-0">
                              {quiz.scorePercent}%
                            </span>
                          )}
                        </div>

                        {reviewer.fileSnippet && (
                          <p className="text-xs opacity-65 line-clamp-2 mt-1">
                            {reviewer.fileSnippet}
                          </p>
                        )}

                        <div className="flex items-center gap-3 text-[11px] opacity-60 mt-2.5">
                          {reviewer.notes && reviewer.notes.length > 0 && (
                            <span className="flex items-center gap-1">
                              <BookOpen className="w-3 h-3" />
                              <span>{reviewer.notes.length} notes</span>
                            </span>
                          )}
                          {reviewer.questions && reviewer.questions.length > 0 && (
                            <span className="flex items-center gap-1">
                              <HelpCircle className="w-3 h-3" />
                              <span>{reviewer.questions.length} questions</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Direct Launch Button */}
                      <div className="pt-2 border-t flex" style={{ borderColor: theme.borderSubtle }}>
                        <button
                          onClick={() => {
                            const tab = reviewer.notes.length > 0 ? 'notes' : 'quiz';
                            onSelectReviewerAndTab(subject.id, reviewer.id, tab);
                          }}
                          className="w-full py-2 rounded-xl text-white text-xs font-semibold transition-colors text-center shadow-xs cursor-pointer hover:opacity-95"
                          style={{ backgroundColor: theme.primary }}
                        >
                          Open Reviewer
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
