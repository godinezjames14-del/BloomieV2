import React, { useState, useEffect } from 'react';
import { initialExams } from './data/defaultExams';
import { 
  Exam, 
  Subject, 
  Reviewer, 
  NoteItem, 
  QuizQuestion, 
  PageView, 
  WorkspaceTab, 
  QuizAccuracyResult 
} from './types';
import { ThemeProvider, useFlowerTheme } from './context/ThemeContext';
import { ThemePicker } from './components/ThemePicker';
import { HomePage } from './components/HomePage';
import { ExamSidebar } from './components/ExamSidebar';
import { ExamOverviewView } from './components/ExamOverviewView';
import { NotesView } from './components/NotesView';
import { QuizView } from './components/QuizView';
import { UploadModal } from './components/UploadModal';
import { DeveloperModal } from './components/DeveloperModal';
import { ArrowLeft, BookOpen, HelpCircle, LayoutGrid, Layers, ChevronDown, Check, Menu } from 'lucide-react';

function AppContent() {
  const { theme } = useFlowerTheme();

  // Load exams from localStorage or fallback to defaults
  const [exams, setExams] = useState<Exam[]>(() => {
    try {
      // Clear legacy storage keys containing old dummy data
      localStorage.removeItem('bloomie_exams_v3');
      localStorage.removeItem('bloomie_exams_v2');
      localStorage.removeItem('bloomie_exams_v1');
      localStorage.removeItem('bloomie_reviewers_v2');
      localStorage.removeItem('bloomie_reviewers_v1');

      const saved = localStorage.getItem('bloomie_microbio_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved exams', e);
    }
    return initialExams;
  });

  const [pageView, setPageView] = useState<PageView>('home');
  const [selectedExamId, setSelectedExamId] = useState<string>(() => initialExams[0]?.id || '');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
  const [selectedReviewerId, setSelectedReviewerId] = useState<string>('');
  const [workspaceTab, setWorkspaceTab] = useState<WorkspaceTab>('overview');

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);

  const [isDeveloperMode, setIsDeveloperMode] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('bloomie_dev_mode') === 'true';
    } catch {
      return false;
    }
  });

  // Sync exams to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bloomie_microbio_v1', JSON.stringify(exams));
    } catch (e) {
      console.warn('Failed to save exams', e);
    }
  }, [exams]);

  // Current Exam
  const currentExam = exams.find(e => e.id === selectedExamId) || exams[0];

  // Resolve Subject and Reviewer
  const currentSubject =
    currentExam?.subjects.find(s => s.id === selectedSubjectId) ||
    currentExam?.subjects[0];

  const currentReviewer =
    currentSubject?.reviewers.find(r => r.id === selectedReviewerId) ||
    currentSubject?.reviewers[0];

  // Sync subject and reviewer when exam changes
  useEffect(() => {
    if (currentExam && currentExam.subjects.length > 0) {
      if (!selectedSubjectId || !currentExam.subjects.some(s => s.id === selectedSubjectId)) {
        const firstSubject = currentExam.subjects[0];
        setSelectedSubjectId(firstSubject.id);
        if (firstSubject.reviewers.length > 0) {
          setSelectedReviewerId(firstSubject.reviewers[0].id);
        }
      }
    }
  }, [selectedExamId, currentExam]);

  // Developer Passcode Unlock
  const handleUnlockDeveloperMode = (passcode: string): boolean => {
    const clean = passcode.trim().toLowerCase();
    if (clean === 'bloomie' || clean === 'admin' || clean === 'dev123') {
      setIsDeveloperMode(true);
      try {
        sessionStorage.setItem('bloomie_dev_mode', 'true');
      } catch {}
      return true;
    }
    return false;
  };

  const handleLockDeveloperMode = () => {
    setIsDeveloperMode(false);
    try {
      sessionStorage.removeItem('bloomie_dev_mode');
    } catch {}
  };

  // Select an Exam from Homepage
  const handleSelectExam = (examId: string) => {
    setSelectedExamId(examId);
    const targetExam = exams.find(e => e.id === examId) || exams[0];
    if (targetExam && targetExam.subjects.length > 0) {
      setSelectedSubjectId(targetExam.subjects[0].id);
      if (targetExam.subjects[0].reviewers.length > 0) {
        setSelectedReviewerId(targetExam.subjects[0].reviewers[0].id);
      }
    }
    setWorkspaceTab('overview');
    setPageView('exam_workspace');
  };

  // Select a Reviewer inside Exam Sidebar or Cross-Subject Navigator
  const handleSelectReviewer = (
    subjectId: string, 
    reviewerId: string, 
    preferredTab?: WorkspaceTab
  ) => {
    setSelectedSubjectId(subjectId);
    setSelectedReviewerId(reviewerId);
    if (preferredTab) {
      setWorkspaceTab(preferredTab);
    } else if (workspaceTab === 'overview') {
      const subj = currentExam?.subjects.find(s => s.id === subjectId);
      const rev = subj?.reviewers.find(r => r.id === reviewerId);
      if (rev && rev.notes.length === 0 && rev.questions.length > 0) {
        setWorkspaceTab('quiz');
      } else {
        setWorkspaceTab('notes');
      }
    }
  };

  // Direct Shortcut from Overview
  const handleSelectReviewerAndTab = (
    subjectId: string,
    reviewerId: string,
    tab: WorkspaceTab
  ) => {
    setSelectedSubjectId(subjectId);
    setSelectedReviewerId(reviewerId);
    setWorkspaceTab(tab);
  };

  // Authentic Reading Scroll Progress Tracker
  const handleUpdateScrollProgress = (progressPercent: number) => {
    if (!currentReviewer) return;
    setExams(prevExams =>
      prevExams.map(ex => {
        if (ex.id !== currentExam.id) return ex;
        return {
          ...ex,
          subjects: ex.subjects.map(sb => {
            if (sb.id !== currentSubject.id) return sb;
            return {
              ...sb,
              reviewers: sb.reviewers.map(rv => {
                if (rv.id !== currentReviewer.id) return rv;
                const maxProgress = Math.max(rv.notesScrollProgress || 0, progressPercent);
                return { ...rv, notesScrollProgress: maxProgress };
              })
            };
          })
        };
      })
    );
  };

  // Authentic Quiz Accuracy Tracker (Saved when questions tab is finished)
  const handleUpdateQuizAccuracy = (accuracy: QuizAccuracyResult) => {
    if (!currentReviewer) return;
    setExams(prevExams =>
      prevExams.map(ex => {
        if (ex.id !== currentExam.id) return ex;
        return {
          ...ex,
          subjects: ex.subjects.map(sb => {
            if (sb.id !== currentSubject.id) return sb;
            return {
              ...sb,
              reviewers: sb.reviewers.map(rv => {
                if (rv.id !== currentReviewer.id) return rv;
                return { ...rv, quizAccuracy: accuracy };
              })
            };
          })
        };
      })
    );
  };

  // Update Notes
  const handleUpdateNotes = (notes: NoteItem[]) => {
    if (!currentReviewer) return;
    setExams(prevExams =>
      prevExams.map(ex => {
        if (ex.id !== currentExam.id) return ex;
        return {
          ...ex,
          subjects: ex.subjects.map(sb => {
            if (sb.id !== currentSubject.id) return sb;
            return {
              ...sb,
              reviewers: sb.reviewers.map(rv => {
                if (rv.id !== currentReviewer.id) return rv;
                return { ...rv, notes };
              })
            };
          })
        };
      })
    );
  };

  // Update Questions
  const handleUpdateQuestions = (questions: QuizQuestion[]) => {
    if (!currentReviewer) return;
    setExams(prevExams =>
      prevExams.map(ex => {
        if (ex.id !== currentExam.id) return ex;
        return {
          ...ex,
          subjects: ex.subjects.map(sb => {
            if (sb.id !== currentSubject.id) return sb;
            return {
              ...sb,
              reviewers: sb.reviewers.map(rv => {
                if (rv.id !== currentReviewer.id) return rv;
                return { ...rv, questions };
              })
            };
          })
        };
      })
    );
  };

  // Add New Reviewer to Active Subject (Developer only)
  const handleAddReviewer = (newReviewer: Reviewer) => {
    if (!isDeveloperMode) {
      setIsDeveloperModalOpen(true);
      return;
    }
    setExams(prevExams =>
      prevExams.map(ex => {
        if (ex.id !== currentExam.id) return ex;
        return {
          ...ex,
          subjects: ex.subjects.map(sb => {
            if (sb.id !== currentSubject.id) return sb;
            return {
              ...sb,
              reviewers: [newReviewer, ...sb.reviewers]
            };
          })
        };
      })
    );
    setSelectedReviewerId(newReviewer.id);
    setWorkspaceTab('notes');
  };

  return (
    <div 
      className="min-h-screen text-[#2D2A2E] antialiased" 
      style={{ backgroundColor: theme.bgPage }}
    >
      {/* PAGE 1: HOME PAGE (CLEAN, NO SIDEBAR) */}
      {pageView === 'home' && (
        <HomePage
          exams={exams}
          onSelectExam={handleSelectExam}
          isDeveloperMode={isDeveloperMode}
          onOpenDeveloperModal={() => setIsDeveloperModalOpen(true)}
        />
      )}

      {/* PAGE 2: EXAM WORKSPACE PAGE (WITH SIDEBAR FOR SUBJECTS & REVIEWERS) */}
      {pageView === 'exam_workspace' && currentExam && (
        <div className="flex min-h-screen">
          {/* Permanent Desktop Sidebar */}
          <div className="hidden md:block shrink-0">
            <ExamSidebar
              exam={currentExam}
              activeSubjectId={currentSubject?.id || ''}
              activeReviewerId={currentReviewer?.id || ''}
              activeTab={workspaceTab}
              onSelectReviewer={handleSelectReviewer}
              onSelectTab={setWorkspaceTab}
              onBackToHome={() => setPageView('home')}
              isDeveloperMode={isDeveloperMode}
              onOpenDeveloperModal={() => setIsDeveloperModalOpen(true)}
              onOpenAddReviewerModal={() => setIsUploadModalOpen(true)}
            />
          </div>

          {/* Mobile Overlay Drawer */}
          {isMobileDrawerOpen && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex md:hidden animate-in fade-in duration-150">
              <div className="w-80 max-w-[85vw] bg-white h-full shadow-2xl animate-in slide-in-from-left duration-200">
                <ExamSidebar
                  exam={currentExam}
                  activeSubjectId={currentSubject?.id || ''}
                  activeReviewerId={currentReviewer?.id || ''}
                  activeTab={workspaceTab}
                  onSelectReviewer={(subjId, revId, prefTab) => {
                    handleSelectReviewer(subjId, revId, prefTab);
                    setIsMobileDrawerOpen(false);
                  }}
                  onSelectTab={(tab) => {
                    setWorkspaceTab(tab);
                    setIsMobileDrawerOpen(false);
                  }}
                  onBackToHome={() => {
                    setIsMobileDrawerOpen(false);
                    setPageView('home');
                  }}
                  isDeveloperMode={isDeveloperMode}
                  onOpenDeveloperModal={() => {
                    setIsMobileDrawerOpen(false);
                    setIsDeveloperModalOpen(true);
                  }}
                  onOpenAddReviewerModal={() => {
                    setIsMobileDrawerOpen(false);
                    setIsUploadModalOpen(true);
                  }}
                  onCloseMobileDrawer={() => setIsMobileDrawerOpen(false)}
                />
              </div>
              <div className="flex-1" onClick={() => setIsMobileDrawerOpen(false)} />
            </div>
          )}

          {/* Main Workspace Area */}
          <div className="flex-1 flex flex-col min-w-0 min-h-screen">
            {/* Top Workspace Header Bar */}
            <header className="h-16 px-4 sm:px-8 flex items-center justify-between border-b border-[#F0E6E4] bg-white/80 backdrop-blur-sm sticky top-0 z-20">
              {/* Breadcrumbs with Interactive Subject Switcher */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#8C8385] min-w-0">
                {/* Mobile Hamburger to open Subjects Sidebar */}
                <button
                  onClick={() => setIsMobileDrawerOpen(true)}
                  className="md:hidden p-1.5 -ml-1 text-[#475569] hover:text-[#0F172A] hover:bg-[#FAF4F3] rounded-xl transition-colors cursor-pointer mr-1"
                  title="Open Subjects Menu"
                >
                  <Menu className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setPageView('home')}
                  className="hover:text-[#231F20] flex items-center gap-1 font-medium transition-colors cursor-pointer shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Exams</span>
                </button>
                <span>/</span>
                <span className="truncate font-semibold text-[#2D2A2E] hidden lg:inline max-w-[140px]">
                  {currentExam.title}
                </span>
                <span className="hidden lg:inline">/</span>

                {/* Interactive Subject Pill with Dropdown */}
                {currentSubject && (
                  <div className="relative">
                    <button
                      onClick={() => setIsSubjectDropdownOpen(!isSubjectDropdownOpen)}
                      className="flex items-center gap-1 font-bold px-2.5 py-1 rounded-xl bg-[#FAF4F3] hover:bg-[#F5ECE9] transition-colors cursor-pointer text-[#1E293B] max-w-[180px] sm:max-w-none truncate"
                      style={{ color: theme.primary }}
                    >
                      <span className="truncate uppercase text-[11px] tracking-wider">
                        {currentSubject.name}
                      </span>
                      <ChevronDown className="w-3 h-3 shrink-0 opacity-70" />
                    </button>

                    {/* Subject Switcher Dropdown */}
                    {isSubjectDropdownOpen && (
                      <div className="absolute left-0 top-full mt-1.5 w-64 bg-white rounded-2xl shadow-xl border border-[#F0E5E3] p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                        <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] border-b border-[#F5ECE9] flex justify-between items-center">
                          <span>All Subjects in Exam</span>
                          <span>{currentExam.subjects.length} Total</span>
                        </div>
                        <div className="space-y-1 mt-1 max-h-60 overflow-y-auto">
                          {currentExam.subjects.map((s) => {
                            const isSelected = s.id === currentSubject.id;
                            return (
                              <button
                                key={s.id}
                                onClick={() => {
                                  setSelectedSubjectId(s.id);
                                  if (s.reviewers.length > 0) {
                                    setSelectedReviewerId(s.reviewers[0].id);
                                  }
                                  setIsSubjectDropdownOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs text-left transition-colors cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#E0F4F4] font-bold text-[#0E7490]'
                                    : 'hover:bg-[#FAF4F3] text-[#334155]'
                                }`}
                              >
                                <div className="truncate">
                                  <p className="truncate text-xs font-semibold">{s.name}</p>
                                  <p className="text-[10px] text-[#94A3B8] font-normal">
                                    {s.reviewers.length} reviewer{s.reviewers.length > 1 ? 's' : ''}
                                  </p>
                                </div>
                                {isSelected && <Check className="w-3.5 h-3.5 text-[#0E7490] shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {currentReviewer && (
                  <>
                    <span>/</span>
                    <span className="font-bold truncate text-[#475569] max-w-[120px] sm:max-w-none">
                      {currentReviewer.name}
                    </span>
                  </>
                )}
              </div>

              {/* Tab Switcher & Theme Selector */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-[#FCF8F7] border border-[#EFE5E3] p-1 rounded-2xl flex items-center">
                  <button
                    onClick={() => setWorkspaceTab('overview')}
                    className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      workspaceTab === 'overview'
                        ? 'bg-white shadow-2xs font-bold'
                        : 'text-[#7D7375] hover:text-[#231F20]'
                    }`}
                    style={{ color: workspaceTab === 'overview' ? theme.primary : undefined }}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Overview</span>
                  </button>

                  {currentReviewer && (
                    <>
                      <button
                        onClick={() => setWorkspaceTab('notes')}
                        className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          workspaceTab === 'notes'
                            ? 'bg-white shadow-2xs font-bold'
                            : 'text-[#7D7375] hover:text-[#231F20]'
                        }`}
                        style={{ color: workspaceTab === 'notes' ? theme.primary : undefined }}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Notes ({currentReviewer.notes.length})</span>
                      </button>

                      <button
                        onClick={() => setWorkspaceTab('quiz')}
                        className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          workspaceTab === 'quiz'
                            ? 'bg-white shadow-2xs font-bold'
                            : 'text-[#7D7375] hover:text-[#231F20]'
                        }`}
                        style={{ color: workspaceTab === 'quiz' ? theme.primary : undefined }}
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Quiz ({currentReviewer.questions.length})</span>
                      </button>
                    </>
                  )}
                </div>

                <ThemePicker />
              </div>
            </header>

            {/* HORIZONTAL CROSS-SUBJECT NAVIGATOR BAR */}
            <div className="bg-[#FAF6F4] border-b border-[#EFE5E3] px-4 sm:px-8 py-2.5 flex items-center justify-between gap-3 sticky top-16 z-10 backdrop-blur-sm">
              <div className="flex items-center gap-2 overflow-x-auto py-0.5 no-scrollbar flex-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8385] shrink-0 mr-1 flex items-center gap-1">
                  <Layers className="w-3 h-3" />
                  <span className="hidden sm:inline">Subjects:</span>
                </span>
                {currentExam.subjects.map((subj) => {
                  const isSubjActive = subj.id === currentSubject?.id;
                  return (
                    <button
                      key={subj.id}
                      onClick={() => {
                        setSelectedSubjectId(subj.id);
                        if (subj.reviewers.length > 0) {
                          const defaultRev = subj.reviewers[0];
                          setSelectedReviewerId(defaultRev.id);
                          if (workspaceTab === 'overview') {
                            setWorkspaceTab('notes');
                          }
                        }
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all shrink-0 cursor-pointer ${
                        isSubjActive
                          ? 'bg-[#E0F4F4] text-[#0E7490] font-bold shadow-2xs border border-[#BCE4E4]'
                          : 'bg-white hover:bg-[#FAF4F3] text-[#475569] border border-[#EFE5E3]'
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: isSubjActive ? theme.primary : '#94A3B8' }}
                      />
                      <span className="truncate max-w-[130px] sm:max-w-none">{subj.name}</span>
                      <span className="text-[10px] opacity-70">({subj.reviewers.length})</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile button to open full drawer */}
              <button
                onClick={() => setIsMobileDrawerOpen(true)}
                className="md:hidden flex items-center gap-1 text-[11px] font-bold px-2.5 py-1.5 rounded-full bg-white border border-[#EFE5E3] text-[#475569] shrink-0 shadow-2xs"
              >
                <BookOpen className="w-3 h-3" />
                <span>All</span>
              </button>
            </div>

            {/* SIBLING REVIEWER PILLS FOR ACTIVE SUBJECT (if in notes or quiz) */}
            {currentSubject && currentSubject.reviewers.length > 1 && (workspaceTab === 'notes' || workspaceTab === 'quiz') && (
              <div className="bg-white/90 border-b border-[#F0E6E4] px-4 sm:px-8 py-2 flex items-center gap-2 overflow-x-auto text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] shrink-0">
                  {currentSubject.name}:
                </span>
                {currentSubject.reviewers.map((rev) => {
                  const isRevActive = rev.id === currentReviewer?.id;
                  const isNotes = rev.name.toLowerCase().includes('notes');
                  return (
                    <button
                      key={rev.id}
                      onClick={() => {
                        setSelectedReviewerId(rev.id);
                        if (isNotes && workspaceTab !== 'notes') setWorkspaceTab('notes');
                        if (!isNotes && workspaceTab !== 'quiz' && rev.questions.length > 0) setWorkspaceTab('quiz');
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
                        isRevActive
                          ? 'bg-[#FAF4F3] font-bold text-[#231F20] border border-[#EFE5E3]'
                          : 'hover:bg-[#FAF6F5] text-[#64748B]'
                      }`}
                      style={{ color: isRevActive ? theme.primary : undefined }}
                    >
                      <span>{rev.name}</span>
                      {rev.quizAccuracy?.completed && (
                        <span className="text-[10px] text-emerald-700 font-bold">
                          ✓ {rev.quizAccuracy.scorePercent}%
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Workspace Content Body */}
            <main className="flex-1 pb-16">
              {workspaceTab === 'overview' && (
                <ExamOverviewView
                  exam={currentExam}
                  onSelectReviewerAndTab={handleSelectReviewerAndTab}
                />
              )}

              {workspaceTab === 'notes' && currentReviewer && (
                <NotesView
                  currentReviewer={currentReviewer}
                  currentSubject={currentSubject}
                  allSubjects={currentExam.subjects}
                  examTitle={currentExam.title}
                  onSelectReviewerAndTab={handleSelectReviewerAndTab}
                  onUpdateNotes={handleUpdateNotes}
                  onNavigateToTab={(tab) =>
                    setWorkspaceTab(tab === 'dashboard' ? 'overview' : (tab as WorkspaceTab))
                  }
                  isDeveloperMode={isDeveloperMode}
                  onOpenDeveloperModal={() => setIsDeveloperModalOpen(true)}
                  onUpdateScrollProgress={handleUpdateScrollProgress}
                />
              )}

              {workspaceTab === 'quiz' && currentReviewer && (
                <QuizView
                  currentReviewer={currentReviewer}
                  currentSubject={currentSubject}
                  allSubjects={currentExam.subjects}
                  examTitle={currentExam.title}
                  onSelectReviewerAndTab={handleSelectReviewerAndTab}
                  onUpdateQuestions={handleUpdateQuestions}
                  onUpdateQuizAccuracy={handleUpdateQuizAccuracy}
                  onNavigateToTab={(tab) =>
                    setWorkspaceTab(tab === 'dashboard' ? 'overview' : (tab as WorkspaceTab))
                  }
                  isDeveloperMode={isDeveloperMode}
                  onOpenDeveloperModal={() => setIsDeveloperModalOpen(true)}
                />
              )}
            </main>
          </div>
        </div>
      )}

      {/* Developer Passcode & Export Modal */}
      <DeveloperModal
        isOpen={isDeveloperModalOpen}
        onClose={() => setIsDeveloperModalOpen(false)}
        isDeveloperMode={isDeveloperMode}
        onUnlockDeveloperMode={handleUnlockDeveloperMode}
        onLockDeveloperMode={handleLockDeveloperMode}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
        exams={exams}
      />

      {/* Upload / Add Reviewer Modal (Developer Only) */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onAddReviewer={handleAddReviewer}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
