import React, { useState } from 'react';
import { 
  Home, 
  FileText, 
  HelpCircle, 
  Plus, 
  ChevronDown, 
  Sparkles,
  BookOpen,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { Reviewer, ActiveTab } from '../types';

interface SidebarProps {
  reviewers: Reviewer[];
  activeReviewerId: string;
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onSelectReviewer: (id: string) => void;
  onOpenUploadModal: () => void;
  onDeleteReviewer?: (id: string) => void;
  isDeveloperMode: boolean;
  onOpenDeveloperModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  reviewers,
  activeReviewerId,
  activeTab,
  onSelectTab,
  onSelectReviewer,
  onOpenUploadModal,
  onDeleteReviewer,
  isDeveloperMode,
  onOpenDeveloperModal
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentReviewer = reviewers.find(r => r.id === activeReviewerId) || reviewers[0];

  const notesCount = currentReviewer?.notes.length || 0;
  const questionsCount = currentReviewer?.questions.length || 0;

  return (
    <aside className="w-64 min-w-[16rem] bg-white border-r border-[#F0E6E4] flex flex-col justify-between h-screen sticky top-0 z-30 select-none">
      <div className="p-6">
        {/* Brand Logo matching Bloomie. */}
        <div 
          onClick={() => onSelectTab('dashboard')}
          className="flex items-center gap-2.5 cursor-pointer mb-8 group"
        >
          <div className="w-8 h-8 rounded-xl bg-[#EE5D7E] flex items-center justify-center text-white shadow-sm shadow-pink-200 transition-transform group-hover:scale-105">
            <Sparkles className="w-4 h-4 fill-white" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#2D2A2E]">
            Bloomie<span className="text-[#EE5D7E]">.</span>
          </span>
        </div>

        {/* Section: MENU / STUDY SPACE */}
        <div className="mb-6">
          <p className="text-[11px] font-bold tracking-wider text-[#A09898] uppercase mb-2">
            Study Hub
          </p>
          <button
            onClick={() => onSelectTab('dashboard')}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-[#FDEEF1] text-[#EE5D7E] font-semibold'
                : 'text-[#645E60] hover:bg-[#FAF4F3] hover:text-[#2D2A2E]'
            }`}
          >
            <Home className={`w-4 h-4 ${activeTab === 'dashboard' ? 'text-[#EE5D7E]' : 'text-[#8A8284]'}`} />
            <span>Dashboard</span>
          </button>
        </div>

        {/* Section: CURRENT REVIEWER */}
        <div className="mb-6">
          <p className="text-[11px] font-bold tracking-wider text-[#A09898] uppercase mb-2">
            Active Reviewer
          </p>

          {/* Active Reviewer Header / Switcher */}
          <div className="relative mb-2">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-[#F3E7E5] bg-[#FCF8F7] hover:bg-[#F9F1EF] transition-colors text-left"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-6 h-6 rounded-lg bg-[#FDEEF1] text-[#EE5D7E] flex items-center justify-center shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold text-[#2D2A2E] truncate">
                  {currentReviewer?.name || 'Select reviewer'}
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#8A8284] transition-transform shrink-0 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown for selecting reviewer */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#EFE5E3] rounded-xl shadow-lg z-50 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                {reviewers.map(rev => (
                  <div
                    key={rev.id}
                    className={`flex items-center justify-between px-3 py-2 text-xs cursor-pointer hover:bg-[#FDEEF1] ${
                      rev.id === currentReviewer?.id ? 'bg-[#FFF5F7] font-semibold text-[#EE5D7E]' : 'text-[#444]'
                    }`}
                    onClick={() => {
                      onSelectReviewer(rev.id);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className="truncate">{rev.name}</span>
                    {rev.id === currentReviewer?.id ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EE5D7E] shrink-0" />
                    ) : (
                      isDeveloperMode && onDeleteReviewer && reviewers.length > 1 && (
                        <button
                          title="Delete reviewer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (confirm(`Delete "${rev.name}"?`)) {
                              onDeleteReviewer(rev.id);
                            }
                          }}
                          className="text-[#B3A9A7] hover:text-red-500 p-1"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Subtabs: Notes and Questions/Quiz */}
          <div className="space-y-1 pl-1">
            {/* Notes Tab */}
            <button
              onClick={() => onSelectTab('notes')}
              className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-sm transition-all ${
                activeTab === 'notes'
                  ? 'bg-[#FDEEF1] text-[#EE5D7E] font-semibold'
                  : 'text-[#645E60] hover:bg-[#FAF4F3] hover:text-[#2D2A2E]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className={`w-4 h-4 ${activeTab === 'notes' ? 'text-[#EE5D7E]' : 'text-[#8A8284]'}`} />
                <span>Notes</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                activeTab === 'notes' ? 'bg-[#FBCFD8] text-[#D8385E]' : 'bg-[#F3EBEA] text-[#7A7274]'
              }`}>
                {notesCount}
              </span>
            </button>

            {/* Questions Tab */}
            <button
              onClick={() => onSelectTab('quiz')}
              className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-sm transition-all ${
                activeTab === 'quiz'
                  ? 'bg-[#FDEEF1] text-[#EE5D7E] font-semibold'
                  : 'text-[#645E60] hover:bg-[#FAF4F3] hover:text-[#2D2A2E]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <HelpCircle className={`w-4 h-4 ${activeTab === 'quiz' ? 'text-[#EE5D7E]' : 'text-[#8A8284]'}`} />
                <span>Questions</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                activeTab === 'quiz' ? 'bg-[#FBCFD8] text-[#D8385E]' : 'bg-[#F3EBEA] text-[#7A7274]'
              }`}>
                {questionsCount}
              </span>
            </button>
          </div>

          {/* Developer-Only Add Action */}
          {isDeveloperMode && (
            <button
              onClick={onOpenUploadModal}
              className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#EE5D7E] hover:text-[#D8385E] px-2 py-1.5 rounded-lg hover:bg-[#FDEEF1] transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Add new reviewer</span>
            </button>
          )}
        </div>
      </div>

      {/* Bottom Section: Clean Study Progress */}
      <div className="p-6 border-t border-[#F5EDEB]">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-bold text-[#2D2A2E]">Study Progress</p>
          <span className="text-xs font-bold text-[#EE5D7E]">{currentReviewer?.masteryScore || 75}%</span>
        </div>
        <p className="text-[11px] text-[#8C8385] mb-2.5">
          {currentReviewer.notes.length} notes • {currentReviewer.questions.length} questions
        </p>
        <div className="w-full bg-[#F3EBE9] h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[#EE5D7E] h-full rounded-full transition-all duration-500" 
            style={{ width: `${Math.min(100, Math.max(15, (currentReviewer?.masteryScore || 75)))}%` }} 
          />
        </div>

        {/* Developer Access Footer */}
        <div className="mt-4 pt-3 border-t border-[#F5EAE8] flex justify-between items-center text-[10px]">
          <span className="text-[#A09898]">Bloomie Study Space</span>
          <button
            onClick={onOpenDeveloperModal}
            className={`font-semibold px-2 py-0.5 rounded-md cursor-pointer transition-colors ${
              isDeveloperMode
                ? 'bg-emerald-100 text-emerald-800'
                : 'text-[#B0A7A8] hover:text-[#EE5D7E]'
            }`}
          >
            {isDeveloperMode ? '👨‍💻 Dev Mode' : 'Dev Access 🔒'}
          </button>
        </div>
      </div>
    </aside>
  );
};
