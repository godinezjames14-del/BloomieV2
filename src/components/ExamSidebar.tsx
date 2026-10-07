import React, { useState } from 'react';
import { 
  ArrowLeft, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  Check, 
  BookOpen, 
  HelpCircle,
  Plus,
  Eye,
  Award,
  PanelLeftClose,
  X
} from 'lucide-react';
import { Exam, Subject, Reviewer, WorkspaceTab } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';
import { ThemePicker } from './ThemePicker';

interface ExamSidebarProps {
  exam: Exam;
  activeSubjectId: string;
  activeReviewerId: string;
  activeTab: WorkspaceTab;
  onSelectReviewer: (subjectId: string, reviewerId: string, preferredTab?: WorkspaceTab) => void;
  onSelectTab: (tab: WorkspaceTab) => void;
  onBackToHome: () => void;
  onCloseMobileDrawer?: () => void;
  onToggleRetract?: () => void;
}

export const ExamSidebar: React.FC<ExamSidebarProps> = ({
  exam,
  activeSubjectId,
  activeReviewerId,
  activeTab,
  onSelectReviewer,
  onSelectTab,
  onBackToHome,
  onCloseMobileDrawer,
  onToggleRetract
}) => {
  const { theme } = useFlowerTheme();
  const [filterQuery, setFilterQuery] = useState('');

  // Expand all subjects by default so users can see all subjects and reviewers!
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    exam.subjects.forEach(s => {
      initial[s.id] = true;
    });
    return initial;
  });

  // Ensure active subject is always expanded when changed
  React.useEffect(() => {
    if (activeSubjectId) {
      setExpandedSubjects(prev => ({
        ...prev,
        [activeSubjectId]: true
      }));
    }
  }, [activeSubjectId]);

  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects(prev => ({
      ...prev,
      [subjectId]: !prev[subjectId]
    }));
  };

  const handleToggleAll = (expand: boolean) => {
    const updated: Record<string, boolean> = {};
    exam.subjects.forEach(s => {
      updated[s.id] = expand;
    });
    setExpandedSubjects(updated);
  };

  const areAllExpanded = exam.subjects.every(s => expandedSubjects[s.id]);

  const formatDateLabel = (dateStr?: string) => {
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

  const activeSubject = exam.subjects.find(s => s.id === activeSubjectId) || exam.subjects[0];
  const activeReviewer =
    activeSubject?.reviewers.find(r => r.id === activeReviewerId) ||
    activeSubject?.reviewers[0];

  // Filter subjects and reviewers
  const filteredSubjects = exam.subjects.map(subj => {
    const query = filterQuery.toLowerCase().trim();
    if (!query) return subj;
    const subjMatches = subj.name.toLowerCase().includes(query);
    const matchingReviewers = subj.reviewers.filter(r =>
      r.name.toLowerCase().includes(query) ||
      (r.fileName && r.fileName.toLowerCase().includes(query)) ||
      (r.fileSnippet && r.fileSnippet.toLowerCase().includes(query))
    );
    if (subjMatches) return subj;
    if (matchingReviewers.length > 0) {
      return {
        ...subj,
        reviewers: matchingReviewers
      };
    }
    return null;
  }).filter(Boolean) as Subject[];

  return (
    <aside className="w-80 min-w-[20rem] bg-white border-r border-[#EAE2E0] flex flex-col justify-between h-screen sticky top-0 z-30 select-none">
      {/* Scrollable Subjects & Reviewers Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* Top Header: Back to Home + Retract Toggle + Close for Mobile Drawer */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 px-2 py-1 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Exams</span>
          </button>

          <div className="flex items-center gap-1">
            {onToggleRetract && (
              <button
                onClick={onToggleRetract}
                className="hidden md:flex p-1.5 rounded-xl text-[#8C8385] hover:text-[#2D2A2E] hover:bg-[#FAF4F3] transition-colors cursor-pointer"
                title="Collapse sidebar"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            )}

            {onCloseMobileDrawer && (
              <button
                onClick={onCloseMobileDrawer}
                className="p-1.5 rounded-xl text-[#8C8385] hover:text-[#2D2A2E] hover:bg-[#FAF4F3] transition-colors md:hidden cursor-pointer"
                title="Close subjects drawer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Input for Subjects and Reviewers */}
        <div className="relative">
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search..."
            className="w-full text-xs pl-8 pr-3 py-1.5 rounded-xl bg-[#FAF6F5] border border-[#EFE5E3] focus:outline-none focus:border-[#CBD5E1] text-[#2D2A2E] placeholder-[#94A3B8]"
          />
          <div className="absolute left-2.5 top-2 text-[#94A3B8]">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          {filterQuery && (
            <button
              onClick={() => setFilterQuery('')}
              className="absolute right-2.5 top-1.5 text-xs text-[#94A3B8] hover:text-[#2D2A2E]"
            >
              ✕
            </button>
          )}
        </div>

        {/* Section Header with Expand / Collapse All */}
        <div className="flex items-center justify-between px-1 text-[11px] text-[#8C8385] pt-1">
          <span className="font-bold uppercase tracking-wider text-[10px]">
            Subjects ({filteredSubjects.length})
          </span>
          <button
            onClick={() => handleToggleAll(!areAllExpanded)}
            className="hover:text-[#231F20] font-medium transition-colors cursor-pointer text-[10px]"
          >
            {areAllExpanded ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {/* ALL SUBJECTS LIST matching reference image */}
        <div className="space-y-1">
          {filteredSubjects.length === 0 ? (
            <div className="p-4 text-center text-xs text-[#94A3B8]">
              No subjects or reviewers match "{filterQuery}"
            </div>
          ) : (
            filteredSubjects.map((subj) => {
              const isExpanded = expandedSubjects[subj.id] ?? true;
              const isSubjActive = subj.id === activeSubjectId;

              return (
                <div key={subj.id} className="border-b border-[#F5ECE9]/60 pb-1">
                  {/* Subject Header Row matching screenshot */}
                  <button
                    onClick={() => toggleSubject(subj.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer group ${
                      isSubjActive
                        ? 'text-[#0F172A] font-bold bg-[#FAF4F3]'
                        : 'text-[#334155] hover:text-[#0F172A] hover:bg-[#FAF6F5]'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: isSubjActive ? theme.primary : '#94A3B8' }}
                      />
                      <span className="text-[12px] font-bold tracking-wider uppercase truncate">
                        {subj.name}
                      </span>
                      <span className="text-[10px] text-[#94A3B8] font-normal">
                        ({subj.reviewers.length})
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-[#94A3B8] group-hover:text-[#64748B] transition-transform shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#64748B] transition-transform shrink-0" />
                    )}
                  </button>

                  {/* Sub-items when expanded */}
                  {isExpanded && (
                    <div className="space-y-1 pl-1 pr-1 pb-2 animate-in fade-in-50 duration-150">
                      {subj.reviewers.map((rev) => {
                        const isRevSelected = isSubjActive && rev.id === activeReviewerId;
                        const isNotesItem = rev.name.toLowerCase().includes('notes');
                        const isCompletedPrelimOrQuiz = rev.name.includes('✓') || rev.quizAccuracy?.completed;

                        return (
                          <div
                            key={rev.id}
                            onClick={() => {
                              const targetTab = isNotesItem ? 'notes' : 'quiz';
                              onSelectReviewer(subj.id, rev.id, targetTab);
                              onCloseMobileDrawer?.();
                            }}
                            className={`w-full flex items-start gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                              isRevSelected
                                ? 'bg-[#E0F4F4] shadow-2xs font-semibold'
                                : 'hover:bg-[#FAF4F3] text-[#475569]'
                            }`}
                            style={{
                              backgroundColor: isRevSelected ? '#E0F4F4' : undefined
                            }}
                          >
                            {/* Item Icon */}
                            <div className="mt-0.5 shrink-0">
                              {isCompletedPrelimOrQuiz ? (
                                <FileText className={`w-4 h-4 ${isRevSelected ? 'text-[#0E7490]' : 'text-[#64748B]'}`} />
                              ) : isNotesItem ? (
                                <BookOpen className={`w-4 h-4 ${isRevSelected ? 'text-[#0E7490]' : 'text-[#64748B]'}`} />
                              ) : (
                                <FileText className={`w-4 h-4 ${isRevSelected ? 'text-[#0E7490]' : 'text-[#64748B]'}`} />
                              )}
                            </div>

                            {/* Item Title and Date Subtitle matching reference */}
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1">
                                <span
                                  className={`text-xs truncate ${
                                    isRevSelected ? 'font-bold text-[#0E7490]' : 'text-[#334155]'
                                  }`}
                                >
                                  {rev.name}
                                </span>
                                {rev.quizAccuracy?.completed && (
                                  <span className="text-[10px] text-emerald-700 font-bold shrink-0">
                                    {rev.quizAccuracy.scorePercent}%
                                  </span>
                                )}
                              </div>

                              {/* Date Subtitle matching screenshot (e.g. Oct 5, 2026) */}
                              {rev.testDate && (
                                <p className={`text-[10px] mt-0.5 truncate ${
                                  isRevSelected ? 'text-[#0E7490]/80 font-medium' : 'text-[#94A3B8]'
                                }`}>
                                  {formatDateLabel(rev.testDate)}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Bottom Footer: Active Reviewer Reading Progress & Accuracy */}
      <div className="p-4 border-t border-[#EAE2E0] bg-[#FCF8F7] space-y-3">
        {activeReviewer && (
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[11px]">
              <span className="font-bold text-[#334155] truncate">
                {activeReviewer.name}
              </span>
              <span className="text-[10px] text-[#64748B] font-mono">
                {activeReviewer.notes.length} notes • {activeReviewer.questions.length} Qs
              </span>
            </div>

            {/* Reading Scroll Progress */}
            <div>
              <div className="flex justify-between items-center text-[10px] mb-1 text-[#64748B]">
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>Read</span>
                </span>
                <span className="font-bold" style={{ color: theme.primary }}>
                  {activeReviewer.notesScrollProgress || 0}%
                </span>
              </div>
              <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.max(activeReviewer.notesScrollProgress ? 5 : 0, activeReviewer.notesScrollProgress || 0)}%`,
                    backgroundColor: theme.primary
                  }}
                />
              </div>
            </div>

            {/* Quiz Accuracy Score */}
            <div className="pt-1 flex justify-between items-center text-[10px]">
              <span className="text-[#64748B] flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>Accuracy</span>
              </span>
              {activeReviewer.quizAccuracy?.completed ? (
                <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                  {activeReviewer.quizAccuracy.scorePercent}%
                </span>
              ) : (
                <span className="text-[#94A3B8]">Pending</span>
              )}
            </div>
          </div>
        )}

        {/* Theme Picker in Footer */}
        <div className="pt-2 border-t border-[#F1E9E7] flex justify-end items-center">
          <ThemePicker />
        </div>
      </div>
    </aside>
  );
};
