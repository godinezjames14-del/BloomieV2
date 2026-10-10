import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ArrowRight 
} from 'lucide-react';
import { Exam } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';
import { ThemePicker } from './ThemePicker';
import { formatScientificText } from '../utils/textFormatter';
import { GcashSupportCard } from './GcashSupportCard';

interface HomePageProps {
  exams: Exam[];
  onSelectExam: (examId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  exams,
  onSelectExam
}) => {
  const { theme } = useFlowerTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExams = exams.filter(e => {
    const cleanSearch = searchQuery.toLowerCase().trim();
    if (!cleanSearch) return true;

    return (
      e.title.toLowerCase().includes(cleanSearch) ||
      (e.code && e.code.toLowerCase().includes(cleanSearch)) ||
      e.description.toLowerCase().includes(cleanSearch) ||
      e.subjects.some(s => s.name.toLowerCase().includes(cleanSearch))
    );
  });

  return (
    <div className="min-h-screen antialiased" style={{ backgroundColor: theme.bgPage, color: theme.fontPrimary }}>
      {/* Clean Top Navigation Bar */}
      <header 
        className="h-16 px-4 sm:px-10 flex items-center justify-between border-b backdrop-blur-sm sticky top-0 z-30"
        style={{ borderColor: theme.borderSubtle, backgroundColor: `${theme.bgCard}E6` }}
      >
        <div className="flex items-center gap-2.5">
          <div 
            className="w-7 h-7 rounded-xl flex items-center justify-center text-white shadow-xs"
            style={{ backgroundColor: theme.primary }}
          >
            <Sparkles className="w-3.5 h-3.5 fill-white" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">
            Bloomie<span style={{ color: theme.primary }}>.</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <ThemePicker />
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-3.5 sm:px-6 py-8 space-y-6 animate-in fade-in duration-200">
        {/* Support & Donation Container (GCash / InstaPay QR) */}
        <GcashSupportCard />

        {/* Header & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-semibold">
              Exams
            </h1>
          </div>

          <div className="relative w-full sm:w-auto">
            <Search className="w-3.5 h-3.5 opacity-40 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-xl pl-8 pr-3 py-1.5 text-xs outline-none w-full sm:w-56 focus:ring-1 transition-all"
              style={{ 
                backgroundColor: theme.bgCard,
                borderColor: theme.borderSubtle,
                color: theme.fontPrimary
              }}
            />
          </div>
        </div>

        {/* Minimal Exams List - Clean, Simple, No Dates, No "1 subjects" */}
        <div className="space-y-4">
          {filteredExams.map((exam) => {
            return (
              <div
                key={exam.id}
                onClick={() => onSelectExam(exam.id)}
                className="rounded-2xl p-4 sm:p-6 border hover:shadow-xs transition-all cursor-pointer space-y-3.5 group"
                style={{ 
                  backgroundColor: theme.bgCard,
                  borderColor: theme.borderSubtle 
                }}
              >
                <div className="flex items-center gap-2.5 flex-wrap">
                  {exam.code && (
                    <span 
                      className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md shrink-0"
                      style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                    >
                      {exam.code}
                    </span>
                  )}
                  <h2 className="font-serif text-xl sm:text-2xl font-bold group-hover:underline break-words">
                    {formatScientificText(exam.title)}
                  </h2>
                </div>

                {exam.description && (
                  <p className="text-xs sm:text-sm opacity-75 leading-relaxed line-clamp-2 break-words">
                    {formatScientificText(exam.description)}
                  </p>
                )}

                <div 
                  className="flex items-center justify-end text-xs opacity-75 pt-2 border-t"
                  style={{ borderColor: theme.borderSubtle }}
                >
                  <span 
                    className="font-semibold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0" 
                    style={{ color: theme.primary }}
                  >
                    <span>Open</span>
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
