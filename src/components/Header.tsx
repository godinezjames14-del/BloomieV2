import React, { useState } from 'react';
import { Search, Flame, Check, Bell, Award, Sparkles, X } from 'lucide-react';
import { Reviewer } from '../types';

interface HeaderProps {
  currentReviewer: Reviewer;
  onSearchSelect?: (type: 'note' | 'question', id: string) => void;
  streakDays: number;
  isDeveloperMode: boolean;
  onOpenDeveloperModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentReviewer,
  onSearchSelect,
  streakDays,
  isDeveloperMode,
  onOpenDeveloperModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Search through notes and questions
  const filteredNotes = searchQuery.trim()
    ? currentReviewer.notes.filter(
        n =>
          n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          n.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const filteredQuestions = searchQuery.trim()
    ? currentReviewer.questions.filter(
        q =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.explanation.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const hasResults = filteredNotes.length > 0 || filteredQuestions.length > 0;

  return (
    <header className="h-16 px-8 flex items-center justify-between border-b border-[#F0E6E4]/70 bg-[#FAF6F4]/90 backdrop-blur-sm sticky top-0 z-20">
      {/* Search Input matching the top right search icon in Image 1 */}
      <div className="relative w-80 max-w-full">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-[#A89F9F] absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search notes, questions, concepts..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchResults(true);
            }}
            onFocus={() => setShowSearchResults(true)}
            className="w-full bg-white/80 border border-[#EFE5E3] rounded-full pl-9 pr-8 py-1.5 text-xs text-[#2D2A2E] placeholder-[#A89F9F] focus:outline-none focus:ring-2 focus:ring-[#EE5D7E]/30 focus:border-[#EE5D7E] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setShowSearchResults(false);
              }}
              className="absolute right-2.5 text-[#A89F9F] hover:text-[#444]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Quick Search Dropdown */}
        {showSearchResults && searchQuery.trim().length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-[#F0E5E3] p-3 z-50 max-h-80 overflow-y-auto animate-in fade-in-50 zoom-in-95">
            <div className="flex justify-between items-center pb-2 border-b border-[#F5ECE9] mb-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#A09898]">Search Results</span>
              <button 
                onClick={() => setShowSearchResults(false)}
                className="text-[10px] text-[#A09898] hover:text-[#2D2A2E]"
              >
                Close
              </button>
            </div>

            {!hasResults ? (
              <p className="text-xs text-[#8C8385] py-3 text-center">No matching notes or questions found.</p>
            ) : (
              <div className="space-y-3">
                {filteredNotes.length > 0 && (
                  <div>
                    <p className="text-[10px] font-semibold text-[#EE5D7E] uppercase mb-1">Notes ({filteredNotes.length})</p>
                    <div className="space-y-1">
                      {filteredNotes.slice(0, 3).map(note => (
                        <div
                          key={note.id}
                          onClick={() => {
                            setShowSearchResults(false);
                            onSearchSelect?.('note', note.id);
                          }}
                          className="p-2 rounded-lg hover:bg-[#FDEEF1] cursor-pointer transition-colors text-left"
                        >
                          <p className="text-xs font-semibold text-[#2D2A2E] truncate">{note.title}</p>
                          <p className="text-[11px] text-[#7A7274] line-clamp-1">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {filteredQuestions.length > 0 && (
                  <div>
                    <p className="text-[10px] font-semibold text-[#3B82F6] uppercase mb-1">Questions ({filteredQuestions.length})</p>
                    <div className="space-y-1">
                      {filteredQuestions.slice(0, 3).map(q => (
                        <div
                          key={q.id}
                          onClick={() => {
                            setShowSearchResults(false);
                            onSearchSelect?.('question', q.id);
                          }}
                          className="p-2 rounded-lg hover:bg-[#F0F8FF] cursor-pointer transition-colors text-left"
                        >
                          <p className="text-xs font-semibold text-[#2D2A2E] line-clamp-1">{q.question}</p>
                          <span className="text-[10px] text-[#7A7274] uppercase">{q.type.replace('_', ' ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Developer Mode Pill */}
        {isDeveloperMode ? (
          <button
            onClick={onOpenDeveloperModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-colors shadow-2xs cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Developer Mode</span>
          </button>
        ) : (
          <button
            onClick={onOpenDeveloperModal}
            title="Unlock developer controls"
            className="hidden sm:flex items-center gap-1 text-[11px] text-[#A09898] hover:text-[#EE5D7E] px-2 py-1 rounded-lg transition-colors cursor-pointer"
          >
            <span>Dev Access</span>
          </button>
        )}

        {/* Quiet Streak Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE5E3] text-[#EE5D7E] text-xs font-medium shadow-2xs select-none">
          <Flame className="w-3.5 h-3.5 fill-[#EE5D7E] text-[#EE5D7E]" />
          <span>{streakDays} day streak</span>
        </div>

        {/* User Profile Avatar matching "A" in pink circle in Image 1 */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-8 h-8 rounded-full bg-[#EE5D7E] text-white font-medium text-sm flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm shadow-pink-200 cursor-pointer"
          >
            A
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#F0E5E3] p-4 z-50 text-left animate-in fade-in zoom-in-95">
              <div className="flex items-center gap-3 pb-3 border-b border-[#F5ECE9]">
                <div className="w-10 h-10 rounded-full bg-[#EE5D7E] text-white font-semibold flex items-center justify-center text-base">
                  A
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2D2A2E]">Alex Rivera</p>
                  <p className="text-[11px] text-[#8C8385]">alex@bloomie.study</p>
                </div>
              </div>

              <div className="py-3 space-y-2 border-b border-[#F5ECE9] text-xs text-[#645E60]">
                <div className="flex justify-between items-center">
                  <span>Current Reviewer</span>
                  <span className="font-semibold text-[#2D2A2E]">{currentReviewer.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Target Test Date</span>
                  <span className="font-semibold text-[#EE5D7E]">{currentReviewer.testDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Study Streak</span>
                  <span className="font-semibold text-amber-600">{streakDays} days 🌸</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowProfileMenu(false)}
                  className="w-full text-center text-xs text-[#EE5D7E] font-medium py-1.5 rounded-lg hover:bg-[#FDEEF1] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
