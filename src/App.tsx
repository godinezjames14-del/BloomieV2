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
import { 
  Menu,
  PanelLeft,
  PanelLeftClose,
  Home
} from 'lucide-react';

function AppContent() {
  const { theme } = useFlowerTheme();

  // Load exams from localStorage or fallback to defaults
  const [exams, setExams] = useState<Exam[]>(() => {
    try {
      const saved = localStorage.getItem('bloomie_microbio_v9');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 5) {
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
  const [workspaceTab, setWorkspaceTab] = useState<WorkspaceTab>('notes');

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isSidebarRetracted, setIsSidebarRetracted] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Sync exams to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bloomie_microbio_v9', JSON.stringify(exams));
    } catch (e) {
      console.warn('Failed to save exams', e);
    }
  }, [exams]);

  // Window scroll tracker for minimalistic progress bar in sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 10) {
        const pct = Math.min(100, Math.max(0, Math.round((scrollTop / scrollHeight) * 100)));
        setScrollPercent(pct);
      } else {
        setScrollPercent(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    // Reset or recalculate upon tab/view switch
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pageView, workspaceTab, selectedReviewerId]);

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
    setWorkspaceTab('notes');
    setPageView('exam_workspace');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Direct Navigation to specific exam, subject, reviewer, and tab
  const handleSelectExamAndReviewer = (
    examId: string, 
    subjectId?: string, 
    reviewerId?: string, 
    preferredTab: WorkspaceTab = 'notes'
  ) => {
    setSelectedExamId(examId);
    const targetExam = exams.find(e => e.id === examId) || exams[0];
    const targetSubject = subjectId 
      ? targetExam?.subjects.find(s => s.id === subjectId) 
      : targetExam?.subjects[0];

    if (targetSubject) {
      setSelectedSubjectId(targetSubject.id);
      if (reviewerId) {
        setSelectedReviewerId(reviewerId);
      } else if (targetSubject.reviewers.length > 0) {
        setSelectedReviewerId(targetSubject.reviewers[0].id);
      }
    }
    setWorkspaceTab(preferredTab);
    setPageView('exam_workspace');
    window.scrollTo({ top: 0, behavior: 'instant' });
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
    } else {
      const subj = currentExam?.subjects.find(s => s.id === subjectId);
      const rev = subj?.reviewers.find(r => r.id === reviewerId);
      if (rev && rev.notes.length === 0 && rev.questions.length > 0) {
        setWorkspaceTab('quiz');
      } else {
        setWorkspaceTab('notes');
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
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
    window.scrollTo({ top: 0, behavior: 'instant' });
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

  return (
    <div 
      className="min-h-screen antialiased transition-colors" 
      style={{ backgroundColor: theme.bgPage, color: theme.fontPrimary }}
    >
      {/* PAGE 1: HOME PAGE (CLEAN, NO SIDEBAR) */}
      {pageView === 'home' && (
        <HomePage
          exams={exams}
          onSelectExam={handleSelectExam}
        />
      )}

      {/* PAGE 2: EXAM WORKSPACE PAGE (WITH RETRACTABLE SIDEBAR) */}
      {pageView === 'exam_workspace' && currentExam && (
        <div className="flex min-h-screen">
          {/* Retractable Desktop Sidebar */}
          <div 
            className={`hidden md:block shrink-0 transition-all duration-300 ease-in-out ${
              isSidebarRetracted 
                ? 'w-0 overflow-hidden opacity-0 pointer-events-none' 
                : 'w-80 opacity-100'
            }`}
          >
            <ExamSidebar
              exam={currentExam}
              allExams={exams}
              activeSubjectId={currentSubject?.id || ''}
              activeReviewerId={currentReviewer?.id || ''}
              activeTab={workspaceTab}
              onSelectReviewer={handleSelectReviewer}
              onSelectExam={(examId, subjId, revId, prefTab) => {
                handleSelectExamAndReviewer(examId, subjId, revId, prefTab);
              }}
              onSelectTab={setWorkspaceTab}
              onBackToHome={() => {
                setPageView('home');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              onToggleRetract={() => setIsSidebarRetracted(true)}
            />
          </div>

          {/* Mobile Overlay Drawer */}
          {isMobileDrawerOpen && (
            <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex md:hidden animate-in fade-in duration-150">
              <div 
                className="w-80 max-w-[85vw] h-full shadow-2xl animate-in slide-in-from-left duration-200 border-r"
                style={{ backgroundColor: theme.bgCard, borderColor: theme.borderSubtle }}
              >
                <ExamSidebar
                  exam={currentExam}
                  allExams={exams}
                  activeSubjectId={currentSubject?.id || ''}
                  activeReviewerId={currentReviewer?.id || ''}
                  activeTab={workspaceTab}
                  onSelectReviewer={(subjId, revId, prefTab) => {
                    handleSelectReviewer(subjId, revId, prefTab);
                    setIsMobileDrawerOpen(false);
                  }}
                  onSelectExam={(examId, subjId, revId, prefTab) => {
                    handleSelectExamAndReviewer(examId, subjId, revId, prefTab);
                    setIsMobileDrawerOpen(false);
                  }}
                  onSelectTab={(tab) => {
                    setWorkspaceTab(tab);
                    setIsMobileDrawerOpen(false);
                  }}
                  onBackToHome={() => {
                    setIsMobileDrawerOpen(false);
                    setPageView('home');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  onCloseMobileDrawer={() => setIsMobileDrawerOpen(false)}
                />
              </div>
              <div className="flex-1" onClick={() => setIsMobileDrawerOpen(false)} />
            </div>
          )}

          {/* Main Workspace Area */}
          <div className="flex-1 flex flex-col min-w-0 min-h-screen">
            {/* Top Workspace Header Bar (Sidebar Button + Mini Home Button + Theme Button + Minimalist Scroll Progress) */}
            <header 
              className="h-14 px-3 sm:px-6 flex items-center justify-between border-b backdrop-blur-md sticky top-0 z-30 transition-colors"
              style={{ backgroundColor: theme.bgCard, borderColor: theme.borderSubtle }}
            >
              {/* Left Controls: Sidebar Toggle + Mini Home Button */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Mobile Hamburger to open Subjects Sidebar Drawer */}
                <button
                  onClick={() => setIsMobileDrawerOpen(true)}
                  className="md:hidden p-2 rounded-xl transition-colors cursor-pointer border active:scale-95"
                  style={{
                    backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.06)' : theme.bgPage,
                    borderColor: theme.borderSubtle,
                    color: theme.fontPrimary
                  }}
                  title="Open sidebar"
                  aria-label="Open sidebar"
                >
                  <Menu className="w-4 h-4" />
                </button>

                {/* Desktop Retract/Expand Sidebar Toggle */}
                <button
                  onClick={() => setIsSidebarRetracted(!isSidebarRetracted)}
                  className="hidden md:flex p-2 rounded-xl transition-colors cursor-pointer border"
                  style={{
                    backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.06)' : theme.bgPage,
                    borderColor: theme.borderSubtle,
                    color: theme.fontPrimary
                  }}
                  title={isSidebarRetracted ? "Show sidebar" : "Hide sidebar"}
                >
                  {isSidebarRetracted ? (
                    <PanelLeft className="w-4 h-4" />
                  ) : (
                    <PanelLeftClose className="w-4 h-4" />
                  )}
                </button>

                {/* Mini Home Button */}
                <button
                  onClick={() => {
                    setPageView('home');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="p-2 rounded-xl transition-colors cursor-pointer border active:scale-95"
                  style={{
                    backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.06)' : theme.bgPage,
                    borderColor: theme.borderSubtle,
                    color: theme.fontPrimary
                  }}
                  title="Return to home"
                  aria-label="Return to home"
                >
                  <Home className="w-4 h-4" />
                </button>
              </div>

              {/* Right Controls: Theme Selector */}
              <div className="flex items-center">
                <ThemePicker />
              </div>

              {/* Minimalistic Scroll Progress Bar (visible when you scroll) */}
              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black/5 overflow-hidden pointer-events-none">
                <div 
                  className="h-full transition-all duration-150 ease-out"
                  style={{
                    width: `${scrollPercent}%`,
                    backgroundColor: theme.primary
                  }}
                />
              </div>
            </header>

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
                  onUpdateNotes={handleUpdateNotes}
                  onNavigateToTab={(tab) =>
                    setWorkspaceTab(tab === 'dashboard' ? 'overview' : (tab as WorkspaceTab))
                  }
                  onUpdateScrollProgress={handleUpdateScrollProgress}
                />
              )}

              {workspaceTab === 'quiz' && currentReviewer && (
                <QuizView
                  currentReviewer={currentReviewer}
                  subjectName={currentSubject?.name}
                  currentSubject={currentSubject}
                  allSubjects={currentExam.subjects}
                  examTitle={currentExam.title}
                  onSelectReviewerAndTab={handleSelectReviewerAndTab}
                  onUpdateQuestions={handleUpdateQuestions}
                  onUpdateQuizAccuracy={handleUpdateQuizAccuracy}
                  onNavigateToTab={(tab) =>
                    setWorkspaceTab(tab === 'dashboard' ? 'overview' : (tab as WorkspaceTab))
                  }
                />
              )}
            </main>
          </div>
        </div>
      )}
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
