import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  BookOpen, 
  HelpCircle,
  Sparkles,
  CheckCircle2,
  PanelLeftClose,
  X,
  Search
} from 'lucide-react';
import { Exam, Subject, Reviewer, WorkspaceTab } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';
import { ThemePicker } from './ThemePicker';
import { formatScientificText } from '../utils/textFormatter';

interface ExamSidebarProps {
  exam: Exam; // Currently active exam
  allExams?: Exam[]; // All exam entries
  activeSubjectId: string;
  activeReviewerId: string;
  activeTab: WorkspaceTab;
  onSelectReviewer: (subjectId: string, reviewerId: string, preferredTab?: WorkspaceTab) => void;
  onSelectExam?: (examId: string, subjectId?: string, reviewerId?: string, preferredTab?: WorkspaceTab) => void;
  onSelectTab: (tab: WorkspaceTab) => void;
  onBackToHome: () => void;
  onCloseMobileDrawer?: () => void;
  onToggleRetract?: () => void;
}

export const ExamSidebar: React.FC<ExamSidebarProps> = ({
  exam,
  allExams = [exam],
  activeSubjectId,
  activeReviewerId,
  activeTab,
  onSelectReviewer,
  onSelectExam,
  onSelectTab,
  onBackToHome,
  onCloseMobileDrawer,
  onToggleRetract,
}) => {
  const { theme } = useFlowerTheme();
  const [filterQuery, setFilterQuery] = useState('');

  // Keep track of which exams are expanded.
  // Active exam is expanded by default, other entries are collapsed so users can easily jump between them.
  const [expandedExams, setExpandedExams] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    allExams.forEach(e => {
      initial[e.id] = e.id === exam.id;
    });
    return initial;
  });

  // Ensure currently active exam is expanded whenever it changes
  useEffect(() => {
    setExpandedExams(prev => ({
      ...prev,
      [exam.id]: true
    }));
  }, [exam.id]);

  const toggleExam = (examId: string) => {
    setExpandedExams(prev => ({
      ...prev,
      [examId]: !prev[examId]
    }));
  };

  const handleToggleAll = (expand: boolean) => {
    const updated: Record<string, boolean> = {};
    allExams.forEach(e => {
      updated[e.id] = expand;
    });
    setExpandedExams(updated);
  };

  const areAllExpanded = allExams.every(e => expandedExams[e.id]);

  // Filter exams and their reviewers based on search query
  const filteredExams = allExams.map(entry => {
    const query = filterQuery.toLowerCase().trim();
    if (!query) return entry;

    const entryMatches =
      entry.title.toLowerCase().includes(query) ||
      (entry.code && entry.code.toLowerCase().includes(query)) ||
      (entry.description && entry.description.toLowerCase().includes(query));

    const matchingSubjects = entry.subjects.map(subj => {
      const subjMatches = subj.name.toLowerCase().includes(query);
      const matchingRev = subj.reviewers.filter(r =>
        r.name.toLowerCase().includes(query) ||
        (r.fileName && r.fileName.toLowerCase().includes(query))
      );
      if (subjMatches) return subj;
      if (matchingRev.length > 0) return { ...subj, reviewers: matchingRev };
      return null;
    }).filter(Boolean) as Subject[];

    if (entryMatches) return entry;
    if (matchingSubjects.length > 0) {
      return { ...entry, subjects: matchingSubjects };
    }
    return null;
  }).filter(Boolean) as Exam[];

  const activeSubject = exam.subjects.find(s => s.id === activeSubjectId) || exam.subjects[0];
  const activeReviewer =
    activeSubject?.reviewers.find(r => r.id === activeReviewerId) ||
    activeSubject?.reviewers[0];

  return (
    <aside 
      className="w-80 min-w-[20rem] border-r flex flex-col justify-between h-screen sticky top-0 z-30 select-none transition-colors"
      style={{ backgroundColor: theme.bgCard, borderColor: theme.borderSubtle, color: theme.fontPrimary }}
    >
      {/* Scrollable Entries & Reviewers Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* Top Header: Back to Home + Retract Toggle + Close for Mobile Drawer */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-xl transition-colors cursor-pointer group hover:opacity-80"
            style={{ color: theme.fontMuted }}
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Exams</span>
          </button>

          <div className="flex items-center gap-1">
            {onToggleRetract && (
              <button
                onClick={onToggleRetract}
                className="hidden md:flex p-1.5 rounded-xl hover:opacity-80 transition-colors cursor-pointer"
                style={{ color: theme.fontMuted }}
                title="Collapse sidebar"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            )}

            {onCloseMobileDrawer && (
              <button
                onClick={onCloseMobileDrawer}
                className="p-1.5 rounded-xl hover:opacity-80 transition-colors md:hidden cursor-pointer"
                style={{ color: theme.fontMuted }}
                title="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter / Search Input */}
        <div className="relative">
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search subjects & quizzes..."
            className="w-full text-xs pl-8 pr-3 py-1.5 rounded-xl border focus:outline-none transition-colors"
            style={{
              backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.06)' : theme.bgPage,
              borderColor: theme.borderSubtle,
              color: theme.fontPrimary
            }}
          />
          <div className="absolute left-2.5 top-2" style={{ color: theme.fontMuted }}>
            <Search className="w-3.5 h-3.5" />
          </div>
          {filterQuery && (
            <button
              onClick={() => setFilterQuery('')}
              className="absolute right-2.5 top-1.5 text-xs hover:opacity-80"
              style={{ color: theme.fontMuted }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Section Header with Expand / Collapse All */}
        <div className="flex items-center justify-between px-1 text-[11px] pt-1" style={{ color: theme.fontMuted }}>
          <span className="font-bold uppercase tracking-wider text-[10px]">
            Subjects ({allExams.length})
          </span>
          <button
            onClick={() => handleToggleAll(!areAllExpanded)}
            className="hover:underline font-medium transition-colors cursor-pointer text-[10px]"
          >
            {areAllExpanded ? 'Collapse All' : 'Expand All'}
          </button>
        </div>

        {/* ALL ENTRIES LIST (Active is expanded, others collapsed for easy jumping) */}
        <div className="space-y-1.5">
          {filteredExams.length === 0 ? (
            <div className="p-4 text-center text-xs" style={{ color: theme.fontMuted }}>
              No subjects match "{filterQuery}"
            </div>
          ) : (
            filteredExams.map((entry) => {
              const isEntryActive = entry.id === exam.id;
              const isExpanded = expandedExams[entry.id] ?? isEntryActive;

              // Collect reviewers for this entry
              const primarySubject = entry.subjects[0];
              const reviewersList = entry.subjects.flatMap(s => 
                s.reviewers.map(r => ({ ...r, subjectId: s.id }))
              );

              return (
                <div key={entry.id} className="border-b pb-1.5" style={{ borderColor: theme.borderSubtle }}>
                  {/* Entry Header: Click to jump or expand */}
                  <div className="flex items-center justify-between group">
                    <button
                      onClick={() => {
                        toggleExam(entry.id);
                        if (!isEntryActive && onSelectExam) {
                          onSelectExam(entry.id);
                          onCloseMobileDrawer?.();
                        }
                      }}
                      className="flex-1 flex items-start justify-between gap-2 px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer hover:opacity-90"
                      style={{
                        backgroundColor: isEntryActive ? theme.primaryLight : undefined,
                        color: isEntryActive ? theme.primary : theme.fontPrimary
                      }}
                    >
                      <div className="flex items-start gap-2.5 min-w-0 flex-1">
                        <span
                          className="w-2 h-2 rounded-full shrink-0 mt-1.5"
                          style={{
                            backgroundColor: isEntryActive ? (primarySubject?.color || theme.primary) : theme.borderSubtle
                          }}
                        />
                        <div className="min-w-0 flex-1">
                          {entry.code && (
                            <div className="mb-0.5">
                              <span 
                                className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded inline-block leading-none"
                                style={{ 
                                  backgroundColor: isEntryActive ? theme.primary : (theme.isInverted ? 'rgba(255,255,255,0.08)' : theme.primaryLight),
                                  color: isEntryActive ? '#FFFFFF' : theme.primary 
                                }}
                              >
                                {entry.code}
                              </span>
                            </div>
                          )}
                          <p 
                            className="text-[12px] font-bold tracking-tight leading-snug break-words"
                            title={entry.title}
                          >
                            {formatScientificText(entry.title)}
                          </p>
                        </div>
                      </div>

                      <div className="mt-1 shrink-0" style={{ color: theme.fontMuted }}>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </div>
                    </button>
                  </div>

                  {/* Reviewers List when expanded */}
                  {isExpanded && (
                    <div className="space-y-1 pl-2 pr-1 pt-1 animate-in fade-in-50 duration-150">
                      {reviewersList.map((rev) => {
                        const isRevSelected = isEntryActive && rev.id === activeReviewerId;
                        const isNotesItem = rev.name.toLowerCase().includes('notes');
                        const isIdentItem = rev.name.toLowerCase().includes('identification');

                        return (
                          <div
                            key={rev.id}
                            onClick={() => {
                              const targetTab: WorkspaceTab = isNotesItem ? 'notes' : 'quiz';
                              if (onSelectExam) {
                                onSelectExam(entry.id, rev.subjectId, rev.id, targetTab);
                              } else {
                                onSelectReviewer(rev.subjectId, rev.id, targetTab);
                              }
                              onCloseMobileDrawer?.();
                            }}
                            className="w-full flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl cursor-pointer transition-all hover:opacity-90"
                            style={{
                              backgroundColor: isRevSelected ? theme.primaryLight : undefined,
                              color: isRevSelected ? theme.primary : theme.fontBody
                            }}
                          >
                            <div className="flex items-center gap-2 min-w-0 flex-1">
                              <div className="shrink-0" style={{ color: isRevSelected ? theme.primary : theme.fontMuted }}>
                                {isNotesItem ? (
                                  <BookOpen className="w-3.5 h-3.5" />
                                ) : isIdentItem ? (
                                  <Sparkles className="w-3.5 h-3.5" />
                                ) : (
                                  <HelpCircle className="w-3.5 h-3.5" />
                                )}
                              </div>
                              <span
                                className={`text-xs leading-snug break-words flex-1 min-w-0 ${
                                  isRevSelected ? 'font-bold' : ''
                                }`}
                                style={{ color: isRevSelected ? theme.primary : theme.fontBody }}
                                title={rev.name}
                              >
                                {formatScientificText(rev.name)}
                              </span>
                            </div>

                            {rev.quizAccuracy?.completed && (
                              <span className="text-[10px] text-emerald-600 font-bold shrink-0">
                                {rev.quizAccuracy.scorePercent}%
                              </span>
                            )}
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

      {/* Bottom Footer with Active Reviewer & Theme Picker */}
      <div 
        className="p-3.5 border-t flex justify-between items-center gap-2 transition-colors"
        style={{
          backgroundColor: theme.isInverted ? 'rgba(0,0,0,0.18)' : theme.bgPage,
          borderColor: theme.borderSubtle
        }}
      >
        {activeReviewer && (
          <span 
            className="text-[11px] font-semibold truncate flex-1 min-w-0"
            style={{ color: theme.fontPrimary }}
            title={activeReviewer.name}
          >
            {activeReviewer.name}
          </span>
        )}
        <div className="shrink-0">
          <ThemePicker />
        </div>
      </div>
    </aside>
  );
};
