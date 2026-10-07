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
  Layers, 
  BookOpen, 
  ArrowRight,
  X,
  VolumeX,
  RotateCw,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { NoteItem, Reviewer, ActiveTab, Subject, WorkspaceTab } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';
import { 
  HierarchyOfControlsDiagram, 
  PpeSequenceDiagram, 
  BscClassificationDiagram, 
  BslMatrixDiagram, 
  NfpaDiamondDiagram, 
  BleachProtocolDiagram 
} from './LectureDiagrams';

interface NotesViewProps {
  currentReviewer: Reviewer;
  currentSubject?: Subject;
  allSubjects?: Subject[];
  examTitle?: string;
  onSelectReviewerAndTab?: (subjectId: string, reviewerId: string, tab: WorkspaceTab) => void;
  onUpdateNotes: (notes: NoteItem[]) => void;
  onNavigateToTab: (tab: ActiveTab) => void;
  onUpdateScrollProgress?: (progress: number) => void;
}

export const NotesView: React.FC<NotesViewProps> = ({
  currentReviewer,
  currentSubject,
  onUpdateNotes,
  onNavigateToTab,
  onUpdateScrollProgress
}) => {
  const { theme } = useFlowerTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'linear' | 'flashcards'>('linear');
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
    if (confirm('Delete this note?')) {
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

  // Save Note
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

  // Category Badge
  const getCategoryBadgeClass = (cat: NoteItem['category']) => {
    switch (cat) {
      case 'Concept':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Definition':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'Formula':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Key Takeaway':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Summary':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  // Render visual lecture pictures from source based on section
  const renderLecturePicture = (note: NoteItem) => {
    const id = note.id;
    const titleLower = note.title.toLowerCase();

    if (id === 'mb-n-2' || titleLower.includes('donning & doffing') || titleLower.includes('ppe')) {
      return <PpeSequenceDiagram />;
    }
    if (id === 'mb-n-3' || titleLower.includes('bleach') || titleLower.includes('disinfection')) {
      return <BleachProtocolDiagram />;
    }
    if (id === 'mb-n-5' || titleLower.includes('chemical safety') || titleLower.includes('hazardous chemicals')) {
      return <NfpaDiamondDiagram />;
    }
    if (id === 'mb-n-8' || titleLower.includes('biological safety cabinet') || titleLower.includes('bsc')) {
      return <BscClassificationDiagram />;
    }
    if (id === 'mb-n-9' || titleLower.includes('biosafety level') || titleLower.includes('bsl')) {
      return <BslMatrixDiagram />;
    }
    if (id === 'mb-n-10' || titleLower.includes('hierarchy of control')) {
      return <HierarchyOfControlsDiagram />;
    }
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6 space-y-6 animate-in fade-in duration-200">
      {/* Top Document Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F0E6E4]">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            {currentSubject && (
              <>
                <span className="font-semibold uppercase tracking-wider text-[11px]" style={{ color: theme.primary }}>
                  {currentSubject.name}
                </span>
                <span>·</span>
              </>
            )}
            <span>Official Lecture Reviewer</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900">
            {currentReviewer.name}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Prepared by Michelle Gie Cabarde-Obial, RMT, DTA, MSMT · {currentReviewer.notes.length} Sections
          </p>
        </div>

        {/* View Mode & Add */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="bg-[#FAF7F6] border border-slate-200 p-1 rounded-xl flex items-center text-xs">
            <button
              onClick={() => setViewMode('linear')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'linear'
                  ? 'bg-white shadow-2xs text-slate-900 font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Notes</span>
            </button>
            <button
              onClick={() => {
                setViewMode('flashcards');
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'flashcards'
                  ? 'bg-white shadow-2xs text-slate-900 font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Flashcards</span>
            </button>
          </div>

          <button
            onClick={openCreateModal}
            className="text-white px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-xs flex items-center gap-1 cursor-pointer"
            style={{ backgroundColor: theme.primary }}
            title="Add a new note to this reviewer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Reading Progress Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 py-0.5">
        <span className="font-medium text-slate-600 flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-slate-400" />
          <span>Read: {scrollDepth}%</span>
        </span>
        <div className="w-40 sm:w-64 bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${Math.min(100, Math.max(4, scrollDepth))}%`,
              backgroundColor: theme.primary
            }}
          />
        </div>
      </div>

      {/* Control Bar: Categories & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-2.5 py-1 rounded-lg font-medium transition-all shrink-0 cursor-pointer text-xs"
                style={{
                  backgroundColor: isSelected ? theme.primary : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#64748B',
                  border: isSelected ? 'none' : '1px solid #E2E8F0'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Local Search Input */}
        <div className="relative w-full sm:w-52">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-slate-400"
          />
        </div>
      </div>

      {/* MAIN CONTENT: EITHER LINEAR READING DOCUMENT OR FLASHCARDS */}
      {viewMode === 'linear' ? (
        <>
          {filteredNotes.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-[#F0E6E4] max-w-md mx-auto">
              <BookOpen className="w-8 h-8 opacity-40 mx-auto mb-2" style={{ color: theme.primary }} />
              <h3 className="font-serif text-base font-bold text-slate-900">No notes found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Try clearing your search or add a new study note.
              </p>
              <button
                onClick={openCreateModal}
                className="text-white px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                Create Note
              </button>
            </div>
          ) : (
            /* LINEAR LECTURE NOTES (NO BOXES/GRID, FLUID EDITORIAL READING SURFACE) */
            <div className="bg-white rounded-3xl border border-[#F0E6E4] p-6 sm:p-10 md:p-12 shadow-2xs space-y-12">
              {filteredNotes.map((note, index) => {
                const pictureComponent = renderLecturePicture(note);

                return (
                  <article
                    key={note.id}
                    className={`transition-all ${
                      note.highlighted ? 'p-5 rounded-2xl bg-[#FFFBFB] ring-1' : ''
                    }`}
                    style={{
                      borderColor: note.highlighted ? theme.primaryBorder : undefined,
                      boxShadow: note.highlighted ? `0 0 0 1px ${theme.primary}` : undefined
                    }}
                  >
                    {/* Section Header Row */}
                    <div className="flex items-center justify-between gap-3 mb-3 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        {/* Section Number */}
                        <span
                          className="px-2 py-0.5 rounded-md text-xs font-mono font-bold tracking-tight"
                          style={{
                            backgroundColor: theme.primaryLight,
                            color: theme.primary
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        {/* Category Badge */}
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryBadgeClass(
                            note.category
                          )}`}
                        >
                          {note.category}
                        </span>
                      </div>

                      {/* Quiet Action Icons */}
                      <div className="flex items-center gap-1 text-slate-400">
                        {/* Highlight */}
                        <button
                          onClick={() => handleToggleHighlight(note.id)}
                          title={note.highlighted ? 'Remove highlight' : 'Highlight section'}
                          className="p-1 rounded-md hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer"
                          style={{
                            color: note.highlighted ? theme.primary : undefined
                          }}
                        >
                          <Highlighter className="w-3.5 h-3.5" />
                        </button>

                        {/* Read Aloud */}
                        <button
                          onClick={() => handleSpeakNote(note)}
                          title={speakingNoteId === note.id ? 'Stop reading' : 'Read aloud'}
                          className={`p-1 rounded-md transition-colors cursor-pointer ${
                            speakingNoteId === note.id
                              ? 'bg-teal-50 text-teal-600 animate-pulse'
                              : 'hover:bg-slate-50 hover:text-teal-600'
                          }`}
                        >
                          {speakingNoteId === note.id ? (
                            <VolumeX className="w-3.5 h-3.5" />
                          ) : (
                            <Volume2 className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {/* Copy */}
                        <button
                          onClick={() => handleCopyNote(note)}
                          title="Copy text"
                          className="p-1 rounded-md hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer"
                        >
                          {copiedNoteId === note.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        {/* Edit */}
                        <button
                          onClick={() => openEditModal(note)}
                          title="Edit note"
                          className="p-1 rounded-md hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => handleDeleteNote(note.id)}
                          title="Delete note"
                          className="p-1 rounded-md hover:bg-slate-50 hover:text-rose-500 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Section Title */}
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                      {note.title}
                    </h2>

                    {/* Section Text Content */}
                    <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line font-normal space-y-2">
                      {note.content}
                    </div>

                    {/* Embedded Picture from the Source */}
                    {pictureComponent && (
                      <div className="my-4">
                        {pictureComponent}
                      </div>
                    )}

                    {/* Tags */}
                    {note.tags.length > 0 && (
                      <div className="mt-4 pt-2.5 flex flex-wrap items-center gap-1.5">
                        {note.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Subtle divider between linear sections */}
                    {index < filteredNotes.length - 1 && (
                      <div className="border-b border-[#F0E6E4] mt-10 pt-2" />
                    )}
                  </article>
                );
              })}

              {/* End of Notes & Clean Navigation to Questions */}
              <div className="pt-8 border-t border-[#F0E6E4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>You've reviewed all notes in this section.</span>
                </div>

                <button
                  onClick={() => onNavigateToTab('quiz')}
                  className="text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer hover:opacity-95"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Continue to Questions ({currentReviewer.questions.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Flashcards Mode */
        <div className="max-w-xl mx-auto py-6 space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Card {activeFlashcardIndex + 1} of {currentReviewer.notes.length}
            </span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full font-semibold" style={{ backgroundColor: theme.primaryLight, color: theme.primary }}>
              Click to flip
            </span>
          </div>

          {currentReviewer.notes[activeFlashcardIndex] && (
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="min-h-[300px] bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-all cursor-pointer shadow-sm flex flex-col justify-between text-center select-none"
            >
              <div className="flex justify-between items-center text-xs">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryBadgeClass(
                    currentReviewer.notes[activeFlashcardIndex].category
                  )}`}
                >
                  {currentReviewer.notes[activeFlashcardIndex].category}
                </span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <RotateCw className="w-3 h-3" />
                  Flip
                </span>
              </div>

              <div className="my-auto py-6">
                {!isFlipped ? (
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      {currentReviewer.notes[activeFlashcardIndex].title}
                    </h3>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line text-left">
                      {currentReviewer.notes[activeFlashcardIndex].content}
                    </p>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-slate-400">
                {isFlipped ? 'Click to show title' : 'Click to reveal explanation'}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => {
                setIsFlipped(false);
                setActiveFlashcardIndex(prev => Math.max(0, prev - 1));
              }}
              disabled={activeFlashcardIndex === 0}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 disabled:opacity-40 transition-colors cursor-pointer"
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
              className="flex-1 py-2.5 rounded-xl text-white text-xs font-semibold shadow-xs disabled:opacity-40 transition-colors cursor-pointer"
              style={{ backgroundColor: theme.primary }}
            >
              Next Card
            </button>
          </div>
        </div>
      )}

      {/* Add / Edit Note Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                {editingNote ? 'Edit Study Note' : 'Add New Note'}
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-800 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveNoteForm} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={noteFormTitle}
                  onChange={(e) => setNoteFormTitle(e.target.value)}
                  placeholder="e.g. Standard Precautions..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Category</label>
                  <select
                    value={noteFormCategory}
                    onChange={(e) => setNoteFormCategory(e.target.value as NoteItem['category'])}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 outline-none"
                  >
                    <option value="Concept">Concept</option>
                    <option value="Definition">Definition</option>
                    <option value="Formula">Formula</option>
                    <option value="Key Takeaway">Key Takeaway</option>
                    <option value="Summary">Summary</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Importance</label>
                  <select
                    value={noteFormImportance}
                    onChange={(e) => setNoteFormImportance(e.target.value as NoteItem['importance'])}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 outline-none"
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Content</label>
                <textarea
                  rows={4}
                  required
                  value={noteFormContent}
                  onChange={(e) => setNoteFormContent(e.target.value)}
                  placeholder="Write note content..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-slate-400 resize-none"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  value={noteFormTags}
                  onChange={(e) => setNoteFormTags(e.target.value)}
                  placeholder="Safety, OSHA, PPE"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-white font-semibold shadow-xs cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  {editingNote ? 'Save Changes' : 'Add Note'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
