import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Highlighter, 
  Volume2, 
  Copy, 
  Check, 
  Trash2, 
  Edit3, 
  Sparkles, 
  Layers, 
  BookOpen, 
  ArrowRight,
  Filter,
  X,
  VolumeX,
  RotateCw,
  Eye
} from 'lucide-react';
import { NoteItem, Reviewer, ActiveTab, Subject, WorkspaceTab } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';

interface NotesViewProps {
  currentReviewer: Reviewer;
  currentSubject?: Subject;
  allSubjects?: Subject[];
  examTitle?: string;
  onSelectReviewerAndTab?: (subjectId: string, reviewerId: string, tab: WorkspaceTab) => void;
  onUpdateNotes: (notes: NoteItem[]) => void;
  onNavigateToTab: (tab: ActiveTab) => void;
  isDeveloperMode: boolean;
  onOpenDeveloperModal: () => void;
  onUpdateScrollProgress?: (progress: number) => void;
}

export const NotesView: React.FC<NotesViewProps> = ({
  currentReviewer,
  currentSubject,
  allSubjects,
  examTitle,
  onSelectReviewerAndTab,
  onUpdateNotes,
  onNavigateToTab,
  isDeveloperMode,
  onOpenDeveloperModal,
  onUpdateScrollProgress
}) => {
  const { theme } = useFlowerTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'flashcards'>('cards');
  const [activeFlashcardIndex, setActiveFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedNoteId, setCopiedNoteId] = useState<string | null>(null);
  const [speakingNoteId, setSpeakingNoteId] = useState<string | null>(null);

  // Track scroll depth
  const [scrollDepth, setScrollDepth] = useState<number>(() => currentReviewer.notesScrollProgress || 0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 50) {
        const scrolled = Math.min(100, Math.max(0, Math.round((window.scrollY / docHeight) * 100)));
        setScrollDepth(prev => {
          const max = Math.max(prev, scrolled);
          if (max > (currentReviewer.notesScrollProgress || 0)) {
            onUpdateScrollProgress?.(max);
          }
          return max;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentReviewer.id, currentReviewer.notesScrollProgress, onUpdateScrollProgress]);

  // New Note Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<NoteItem | null>(null);
  const [noteFormTitle, setNoteFormTitle] = useState('');
  const [noteFormCategory, setNoteFormCategory] = useState<NoteItem['category']>('Concept');
  const [noteFormContent, setNoteFormContent] = useState('');
  const [noteFormTags, setNoteFormTags] = useState('');
  const [noteFormImportance, setNoteFormImportance] = useState<NoteItem['importance']>('high');

  // Categories list
  const categories = ['All', 'Concept', 'Definition', 'Formula', 'Key Takeaway', 'Summary'];

  // Filter notes
  const filteredNotes = currentReviewer.notes.filter(note => {
    const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Toggle Highlight
  const handleToggleHighlight = (id: string) => {
    const updated = currentReviewer.notes.map(n => 
      n.id === id ? { ...n, highlighted: !n.highlighted } : n
    );
    onUpdateNotes(updated);
  };

  // Delete note
  const handleDeleteNote = (id: string) => {
    if (confirm('Delete this note card?')) {
      const updated = currentReviewer.notes.filter(n => n.id !== id);
      onUpdateNotes(updated);
    }
  };

  // Copy note content
  const handleCopyNote = (note: NoteItem) => {
    navigator.clipboard.writeText(`${note.title}\n\n${note.content}`);
    setCopiedNoteId(note.id);
    setTimeout(() => setCopiedNoteId(null), 2000);
  };

  // Text to Speech
  const handleSpeakNote = (note: NoteItem) => {
    if ('speechSynthesis' in window) {
      if (speakingNoteId === note.id) {
        window.speechSynthesis.cancel();
        setSpeakingNoteId(null);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(`${note.title}. ${note.content}`);
      utterance.rate = 0.95;
      utterance.onend = () => setSpeakingNoteId(null);
      utterance.onerror = () => setSpeakingNoteId(null);
      setSpeakingNoteId(note.id);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Open Edit Modal
  const openEditModal = (note: NoteItem) => {
    setEditingNote(note);
    setNoteFormTitle(note.title);
    setNoteFormCategory(note.category);
    setNoteFormContent(note.content);
    setNoteFormTags(note.tags.join(', '));
    setNoteFormImportance(note.importance);
    setIsAddModalOpen(true);
  };

  // Open Create Modal
  const openCreateModal = () => {
    setEditingNote(null);
    setNoteFormTitle('');
    setNoteFormCategory('Concept');
    setNoteFormContent('');
    setNoteFormTags('');
    setNoteFormImportance('high');
    setIsAddModalOpen(true);
  };

  // Save Note (Add or Update)
  const handleSaveNoteForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteFormTitle.trim() || !noteFormContent.trim()) return;

    const tagsArray = noteFormTags
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    if (editingNote) {
      const updated = currentReviewer.notes.map(n =>
        n.id === editingNote.id
          ? {
              ...n,
              title: noteFormTitle.trim(),
              category: noteFormCategory,
              content: noteFormContent.trim(),
              tags: tagsArray.length > 0 ? tagsArray : n.tags,
              importance: noteFormImportance
            }
          : n
      );
      onUpdateNotes(updated);
    } else {
      const newNote: NoteItem = {
        id: `note-${Date.now()}`,
        title: noteFormTitle.trim(),
        category: noteFormCategory,
        content: noteFormContent.trim(),
        tags: tagsArray.length > 0 ? tagsArray : ['Study Note'],
        importance: noteFormImportance,
        highlighted: false
      };
      onUpdateNotes([newNote, ...currentReviewer.notes]);
    }

    setIsAddModalOpen(false);
  };

  // Helper for category badge colors
  const getCategoryBadgeClass = (cat: NoteItem['category']) => {
    switch (cat) {
      case 'Concept':
        return 'bg-[#EDE9FE] text-[#6D28D9] border-[#DDD6FE]';
      case 'Definition':
        return 'bg-[#E0F4F4] text-[#0D6E6E] border-[#BEE7E7]';
      case 'Formula':
        return 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]';
      case 'Key Takeaway':
        return 'bg-[#FDEEF1] text-[#EE5D7E] border-[#FBCFD8]';
      case 'Summary':
        return 'bg-[#F3F4F6] text-[#374151] border-[#E5E7EB]';
      default:
        return 'bg-[#FDEEF1] text-[#EE5D7E] border-[#FBCFD8]';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-10 space-y-8 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F0E6E4]">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#8C8385] mb-1">
            {currentSubject && (
              <>
                <span className="font-bold uppercase tracking-wider text-[11px]" style={{ color: theme.primary }}>
                  {currentSubject.name}
                </span>
                <span>/</span>
              </>
            )}
            <span className="font-semibold text-[#2D2A2E]">{currentReviewer.name}</span>
            <span>/</span>
            <span>Study Notes</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#231F20]">
            Notes & Concepts
          </h1>
          <p className="text-xs text-[#7D7375] mt-1">
            Carefully structured knowledge points distilled from {currentReviewer.fileName}.
          </p>
        </div>

        {/* View Mode Toggle and Add Note button */}
        <div className="flex items-center gap-3">
          <div className="bg-[#FCF8F7] border border-[#EFE5E3] p-1 rounded-2xl flex items-center">
            <button
              onClick={() => setViewMode('cards')}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              style={{
                backgroundColor: viewMode === 'cards' ? '#FFFFFF' : 'transparent',
                color: viewMode === 'cards' ? theme.primary : '#7D7375',
                boxShadow: viewMode === 'cards' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Linear Notes ({currentReviewer.notes.length})</span>
            </button>
            <button
              onClick={() => {
                setViewMode('flashcards');
                setIsFlipped(false);
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              style={{
                backgroundColor: viewMode === 'flashcards' ? '#FFFFFF' : 'transparent',
                color: viewMode === 'flashcards' ? theme.primary : '#7D7375',
                boxShadow: viewMode === 'flashcards' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Flashcards</span>
            </button>
          </div>

          {isDeveloperMode ? (
            <button
              onClick={openCreateModal}
              className="text-white px-4 py-2 rounded-2xl text-xs font-bold transition-all shadow-sm hover:scale-[1.02] flex items-center gap-1.5 cursor-pointer"
              style={{ backgroundColor: theme.primary }}
            >
              <Plus className="w-4 h-4" />
              <span>Add Note</span>
            </button>
          ) : (
            <button
              onClick={onOpenDeveloperModal}
              title="Only developer can add notes"
              className="border border-[#EFE5E3] hover:border-[#EE5D7E] text-[#8C8385] hover:text-[#EE5D7E] px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer bg-white"
            >
              <span>🔒 Dev Add Note</span>
            </button>
          )}
        </div>
      </div>

      {/* Reading Depth Progress Line */}
      <div className="bg-white rounded-2xl p-4 border border-[#F0E6E4] shadow-2xs">
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="flex items-center gap-2">
            <Eye className="w-3.5 h-3.5" style={{ color: theme.primary }} />
            <span className="font-semibold text-[#2D2A2E]">Reading & Scroll Progress:</span>
            <span className="font-bold" style={{ color: theme.primary }}>
              {scrollDepth}%
            </span>
            {scrollDepth >= 90 && (
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Completed All the Way to Bottom ✨
              </span>
            )}
          </div>
          <span className="text-[11px] text-[#8C8385]">
            Scroll through all linear notes to reach 100%
          </span>
        </div>
        <div className="w-full bg-[#F3EBE9] h-2 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(100, Math.max(3, scrollDepth))}%`,
              backgroundColor: theme.primary
            }}
          />
        </div>
      </div>

      {/* Control Bar: Categories & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === 'All'
                ? currentReviewer.notes.length
                : currentReviewer.notes.filter(n => n.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer"
                style={{
                  backgroundColor: isSelected ? theme.primary : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#645E60',
                  border: isSelected ? 'none' : '1px solid #EFE5E3',
                  boxShadow: isSelected ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {cat} <span className="text-[10px] opacity-80">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Local Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-3.5 h-3.5 text-[#A09898] absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search within notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#EFE5E3] rounded-full pl-8 pr-3 py-1.5 text-xs text-[#231F20] placeholder-[#A09898] focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
      </div>

      {/* CONTENT: Either Linear Stream or Flashcards */}
      {viewMode === 'cards' ? (
        <>
          {filteredNotes.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#F0E6E4] max-w-lg mx-auto">
              <BookOpen className="w-10 h-10 opacity-40 mx-auto mb-3" style={{ color: theme.primary }} />
              <h3 className="font-serif text-lg font-bold text-[#231F20]">No notes found</h3>
              <p className="text-xs text-[#8C8385] mt-1 mb-4">
                Try clearing your search or add a new study note to this reviewer.
              </p>
              <button
                onClick={openCreateModal}
                className="text-white px-4 py-2 rounded-xl text-xs font-semibold"
                style={{ backgroundColor: theme.primary }}
              >
                Create First Note
              </button>
            </div>
          ) : (
            /* LINEAR NOTES: Continuous single-column stream all the way to the bottom */
            <div className="flex flex-col space-y-5 w-full">
              {filteredNotes.map((note, index) => (
                <div
                  key={note.id}
                  className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all ${
                    note.highlighted
                      ? 'border-[#F8CCD6] bg-[#FFFBFB] ring-2 shadow-sm'
                      : 'border-[#F0E6E4] hover:border-[#E8D4D2] shadow-2xs hover:shadow-sm'
                  } flex flex-col justify-between`}
                  style={{
                    borderColor: note.highlighted ? theme.primaryBorder : undefined,
                    boxShadow: note.highlighted ? `0 0 0 1px ${theme.primary}` : undefined
                  }}
                >
                  <div>
                    {/* Top Row: Sequential Step/Index + Category + Importance + Action buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F7EEEE]">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        {/* Linear Sequence Number */}
                        <span
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold tracking-tight"
                          style={{
                            backgroundColor: theme.primaryLight,
                            color: theme.primary
                          }}
                        >
                          {String(index + 1).padStart(2, '0')} / {String(filteredNotes.length).padStart(2, '0')}
                        </span>

                        {/* Category Badge */}
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getCategoryBadgeClass(
                            note.category
                          )}`}
                        >
                          {note.category}
                        </span>

                        {/* Importance Badge */}
                        {note.importance === 'high' && (
                          <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                            High Yield ⭐
                          </span>
                        )}
                        {note.importance === 'medium' && (
                          <span className="text-[10px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200">
                            Medium Yield
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1">
                        {/* Highlight button */}
                        <button
                          onClick={() => handleToggleHighlight(note.id)}
                          title={note.highlighted ? 'Remove highlight' : 'Highlight note'}
                          className="p-1.5 rounded-lg transition-colors cursor-pointer"
                          style={{
                            backgroundColor: note.highlighted ? theme.primaryLight : 'transparent',
                            color: note.highlighted ? theme.primary : '#A09898'
                          }}
                        >
                          <Highlighter className="w-3.5 h-3.5" />
                        </button>

                        {/* Read Aloud button */}
                        <button
                          onClick={() => handleSpeakNote(note)}
                          title={speakingNoteId === note.id ? 'Stop reading' : 'Read aloud'}
                          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                            speakingNoteId === note.id
                              ? 'bg-teal-50 text-teal-600 animate-pulse'
                              : 'text-[#A09898] hover:bg-[#FAF4F3] hover:text-teal-600'
                          }`}
                        >
                          {speakingNoteId === note.id ? (
                            <VolumeX className="w-3.5 h-3.5" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {/* Copy button */}
                        <button
                          onClick={() => handleCopyNote(note)}
                          title="Copy note"
                          className="p-1.5 rounded-lg text-[#A09898] hover:bg-[#FAF4F3] hover:text-[#231F20] transition-colors cursor-pointer"
                        >
                          {copiedNoteId === note.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {/* Edit button (Developer Only) */}
                        {isDeveloperMode && (
                          <button
                            onClick={() => openEditModal(note)}
                            title="Edit note"
                            className="p-1.5 rounded-lg text-[#A09898] hover:bg-[#FAF4F3] hover:text-[#231F20] transition-colors cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {/* Delete button (Developer Only) */}
                        {isDeveloperMode && (
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            title="Delete note"
                            className="p-1.5 rounded-lg text-[#A09898] hover:bg-[#FAF4F3] hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Note Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#231F20] mb-3 leading-snug">
                      {note.title}
                    </h3>

                    {/* Note Content */}
                    <p className="text-sm text-[#443E40] leading-relaxed whitespace-pre-line font-normal">
                      {note.content}
                    </p>
                  </div>

                  {/* Bottom Tags */}
                  <div className="mt-5 pt-4 border-t border-[#F5EAE8] flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {note.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-[#FCF8F7] text-[#7A7072] px-2 py-0.5 rounded-md border border-[#F3E7E5]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-[11px] text-[#A3999B] font-mono">
                      Part {index + 1} of {filteredNotes.length}
                    </span>
                  </div>
                </div>
              ))}

              {/* End of Linear Notes Marker */}
              <div className="text-center py-6 px-4 bg-white/70 rounded-3xl border border-dashed border-[#E5D7D5] space-y-2">
                <div
                  className="w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
                >
                  ✓
                </div>
                <h4 className="font-serif text-base font-bold text-[#231F20]">
                  End of Linear Notes
                </h4>
                <p className="text-xs text-[#8C8385] max-w-md mx-auto">
                  You've reached the bottom of all {filteredNotes.length} linear study notes for <span className="font-semibold text-[#2D2A2E]">{currentReviewer.name}</span>.
                </p>
              </div>
            </div>
          )}

          {/* Bottom Banner: Ready to test your knowledge? Take Quiz → */}
          <div className="bg-[#FAF4F3] rounded-3xl p-6 border border-[#F0DFE2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-2xl text-white flex items-center justify-center shrink-0 shadow-sm"
                style={{ backgroundColor: theme.primary }}
              >
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#231F20]">
                  Ready to test your recall?
                </h4>
                <p className="text-xs text-[#7A7072]">
                  Take the interactive quiz ({currentReviewer.questions.length} questions ready).
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigateToTab('quiz')}
              className="text-white px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm hover:scale-[1.02] flex items-center gap-2 cursor-pointer shrink-0"
              style={{ backgroundColor: theme.primary }}
            >
              <span>Start Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </>
      ) : (
        /* Flashcards Mode */
        <div className="max-w-xl mx-auto py-6 space-y-6">
          <div className="flex items-center justify-between text-xs text-[#7A7072]">
            <span>
              Card {activeFlashcardIndex + 1} of {currentReviewer.notes.length}
            </span>
            <span className="text-[11px] bg-[#FDEEF1] text-[#EE5D7E] px-2.5 py-0.5 rounded-full font-semibold">
              Click card to flip
            </span>
          </div>

          {currentReviewer.notes[activeFlashcardIndex] && (
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="min-h-[300px] bg-white rounded-3xl p-8 border-2 border-[#F0E5E3] hover:border-[#EE5D7E]/50 transition-all cursor-pointer shadow-md flex flex-col justify-between text-center select-none group"
            >
              <div className="flex justify-between items-center text-xs">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getCategoryBadgeClass(
                    currentReviewer.notes[activeFlashcardIndex].category
                  )}`}
                >
                  {currentReviewer.notes[activeFlashcardIndex].category}
                </span>
                <span className="text-[11px] text-[#A09898] flex items-center gap-1 group-hover:text-[#EE5D7E]">
                  <RotateCw className="w-3 h-3" />
                  Flip
                </span>
              </div>

              <div className="my-auto py-6">
                {!isFlipped ? (
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-[#EE5D7E] uppercase block mb-3">
                      Concept
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#231F20]">
                      {currentReviewer.notes[activeFlashcardIndex].title}
                    </h3>
                  </div>
                ) : (
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-teal-600 uppercase block mb-3">
                      Explanation & Details
                    </span>
                    <p className="text-sm text-[#443E40] leading-relaxed whitespace-pre-line">
                      {currentReviewer.notes[activeFlashcardIndex].content}
                    </p>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-[#A09898]">
                {isFlipped ? 'Click to show title' : 'Click to reveal explanation'}
              </div>
            </div>
          )}

          {/* Flashcard Navigation Buttons */}
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => {
                setIsFlipped(false);
                setActiveFlashcardIndex(prev => Math.max(0, prev - 1));
              }}
              disabled={activeFlashcardIndex === 0}
              className="flex-1 py-2.5 rounded-2xl border border-[#EFE5E3] bg-white hover:bg-[#FAF4F3] text-xs font-semibold text-[#645E60] disabled:opacity-40 transition-colors cursor-pointer"
            >
              Previous Card
            </button>
            <button
              onClick={() => {
                setIsFlipped(false);
                setActiveFlashcardIndex(prev =>
                  Math.min(currentReviewer.notes.length - 1, prev + 1)
                );
              }}
              disabled={activeFlashcardIndex === currentReviewer.notes.length - 1}
              className="flex-1 py-2.5 rounded-2xl text-white text-xs font-semibold shadow-xs disabled:opacity-40 transition-colors cursor-pointer"
              style={{ backgroundColor: theme.primary }}
            >
              Next Card
            </button>
          </div>
        </div>
      )}

      {/* CROSS-SUBJECT STUDY SHELF: See other subjects in this exam! */}
      {allSubjects && allSubjects.length > 1 && (
        <div className="mt-14 pt-8 border-t border-[#F0E6E4] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#9C8F90]">
                Curated Modules
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#231F20]">
                Other Subjects in {examTitle || 'this Exam'}
              </h3>
            </div>
            <span className="text-xs text-[#8C8385]">
              Jump straight to notes or quiz in another subject
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allSubjects
              .filter(s => s.id !== currentSubject?.id)
              .map(otherSubj => (
                <div
                  key={otherSubj.id}
                  className="bg-white rounded-2xl p-5 border border-[#F0E6E4] hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: theme.primary }} />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E293B] truncate">
                        {otherSubj.name}
                      </h4>
                    </div>

                    <p className="text-xs text-[#64748B] line-clamp-2 mb-3">
                      {otherSubj.description}
                    </p>

                    <div className="space-y-1 mb-4">
                      {otherSubj.reviewers.map(r => (
                        <div key={r.id} className="text-[11px] text-[#475569] flex items-center justify-between py-0.5">
                          <span className="truncate max-w-[150px]">• {r.name}</span>
                          <span className="text-[10px] text-[#94A3B8] font-mono">
                            {r.notes.length} notes / {r.questions.length} Qs
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#F5EAE8] flex gap-2">
                    <button
                      onClick={() => {
                        const defaultRev = otherSubj.reviewers[0];
                        if (defaultRev) {
                          onSelectReviewerAndTab?.(otherSubj.id, defaultRev.id, 'notes');
                        }
                      }}
                      className="flex-1 py-1.5 rounded-xl bg-[#FAF4F3] hover:bg-[#F5EBE8] text-[11px] font-semibold text-[#2D2A2E] transition-colors cursor-pointer text-center"
                    >
                      View Notes
                    </button>
                    <button
                      onClick={() => {
                        const defaultRev = otherSubj.reviewers.find(r => r.questions.length > 0) || otherSubj.reviewers[0];
                        if (defaultRev) {
                          onSelectReviewerAndTab?.(otherSubj.id, defaultRev.id, 'quiz');
                        }
                      }}
                      className="flex-1 py-1.5 rounded-xl text-white text-[11px] font-semibold transition-colors cursor-pointer text-center"
                      style={{ backgroundColor: theme.primary }}
                    >
                      Take Quiz
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Add / Edit Note Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#F0E6E4] animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#F5EAE8] mb-4">
              <h3 className="font-serif text-lg font-bold text-[#231F20]">
                {editingNote ? 'Edit Study Note' : 'Add New Study Note'}
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-[#A09898] hover:text-[#231F20] p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveNoteForm} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-1">
                  Title / Concept
                </label>
                <input
                  type="text"
                  required
                  value={noteFormTitle}
                  onChange={(e) => setNoteFormTitle(e.target.value)}
                  placeholder="e.g. Kinetic Theory of Particles"
                  className="w-full border border-[#EFE5E3] rounded-xl px-3.5 py-2 text-xs text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 focus:border-[#EE5D7E] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-1">
                    Category
                  </label>
                  <select
                    value={noteFormCategory}
                    onChange={(e) => setNoteFormCategory(e.target.value as any)}
                    className="w-full border border-[#EFE5E3] rounded-xl px-3 py-2 text-xs text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 outline-none bg-white"
                  >
                    <option value="Concept">Concept</option>
                    <option value="Definition">Definition</option>
                    <option value="Formula">Formula</option>
                    <option value="Key Takeaway">Key Takeaway</option>
                    <option value="Summary">Summary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-1">
                    Importance
                  </label>
                  <select
                    value={noteFormImportance}
                    onChange={(e) => setNoteFormImportance(e.target.value as any)}
                    className="w-full border border-[#EFE5E3] rounded-xl px-3 py-2 text-xs text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 outline-none bg-white"
                  >
                    <option value="high">High Yield ⭐</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-1">
                  Content & Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={noteFormContent}
                  onChange={(e) => setNoteFormContent(e.target.value)}
                  placeholder="Explain the mechanism, definition, or key rules here..."
                  className="w-full border border-[#EFE5E3] rounded-xl px-3.5 py-2 text-xs text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 focus:border-[#EE5D7E] outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={noteFormTags}
                  onChange={(e) => setNoteFormTags(e.target.value)}
                  placeholder="Matter, Gas Laws, Particles"
                  className="w-full border border-[#EFE5E3] rounded-xl px-3.5 py-2 text-xs text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#F5EAE8]">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#7A7072] hover:bg-[#FAF4F3]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white shadow-xs cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  {editingNote ? 'Save Changes' : 'Create Note'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
