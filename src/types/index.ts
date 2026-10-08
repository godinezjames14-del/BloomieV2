export type QuestionType = 'multiple_choice' | 'enumeration' | 'identification' | 'essay';

export interface NoteItem {
  id: string;
  title: string;
  category: 'Concept' | 'Definition' | 'Formula' | 'Key Takeaway' | 'Summary';
  content: string;
  importance: 'high' | 'medium' | 'low';
  tags: string[];
  highlighted?: boolean;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[]; // For multiple choice
  correctAnswer: string | string[]; // string for mc/id, array for enumeration
  explanation: string;
  points: number;
  sampleEssayAnswer?: string; // For essay evaluation
}

export interface QuizAccuracyResult {
  completed: boolean;
  scorePercent: number; // 0-100
  correctCount: number;
  totalCount: number;
  completedAt?: string;
}

export interface Reviewer {
  id: string;
  name: string;
  fileName: string;
  fileSnippet?: string;
  testDate: string; // YYYY-MM-DD
  questionTypes: QuestionType[];
  questionCount: number;
  notes: NoteItem[];
  questions: QuizQuestion[];
  createdAt: string;
  notesScrollProgress?: number; // 0 to 100 based on actual scroll depth
  quizAccuracy?: QuizAccuracyResult; // only set if questions tab was finished
  masteryScore?: number;
  studyStreakDays?: number;
}

export interface Subject {
  id: string;
  name: string;
  iconName?: string;
  description: string;
  color: string; // pastel accent
  reviewers: Reviewer[];
}

export interface Exam {
  id: string;
  title: string;
  code?: string;
  description: string;
  date: string; // YYYY-MM-DD
  status: 'upcoming' | 'past';
  subjects: Subject[];
}

export type PageView = 'home' | 'exam_workspace';
export type WorkspaceTab = 'overview' | 'notes' | 'quiz';
export type ActiveTab = 'dashboard' | 'overview' | 'notes' | 'quiz';

export type BaseFlowerColor = 'pink' | 'purple' | 'blue' | 'yellow' | 'green';

export type FlowerThemeId = 
  | 'pink' | 'pink_dark'
  | 'purple' | 'purple_dark'
  | 'blue' | 'blue_dark'
  | 'yellow' | 'yellow_dark'
  | 'green' | 'green_dark'
  | 'inverted';

export interface FlowerTheme {
  id: FlowerThemeId;
  baseColor: BaseFlowerColor;
  name: string;
  modeName: string; // e.g. "Light" or "Dark Inverted"
  flower: string; // emoji/flower name
  primary: string; // main button/accent hex
  primaryHover: string;
  primaryLight: string; // soft pill background
  primaryBorder: string;
  borderSubtle: string; // subtle surface border matching the theme
  bgPage: string; // page background (tinted to theme)
  bgCard: string; // card / surface background (lighter shade of theme, no stark white)
  textPrimary: string;
  isInverted: boolean;
  highlightBg: string; // Background for highlighted text / marks
  highlightText: string; // Text color for highlighted text / marks
  highlightBorder: string; // Border color for highlighted text / marks
  highlightCardBg: string; // Background tint for highlighted note sections
  fontPrimary: string; // Primary font color (in dark mode: lighter pastel shade of theme; in light mode: deep contrast)
  fontBody: string; // Body font color (in dark mode: lighter shade of theme; in light mode: readable slate)
  fontMuted: string; // Muted font color (in dark mode: theme-tinted muted shade)
  textOnPrimary: string; // Font color for text-white / buttons (lighter shade of theme, not blinding pure white)
}
