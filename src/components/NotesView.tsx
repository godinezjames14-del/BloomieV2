import React, { useState } from 'react';
import { 
  Search, 
  Highlighter, 
  Volume2, 
  Copy, 
  Check, 
  Trash2, 
  Edit3, 
  BookOpen, 
  ArrowRight,
  VolumeX,
  CheckCircle2,
  X
} from 'lucide-react';
import { NoteItem, Reviewer, ActiveTab, Subject } from '../types';
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
  onUpdateNotes: (notes: NoteItem[]) => void;
  onNavigateToTab: (tab: ActiveTab) => void;
  onUpdateScrollProgress?: (progress: number) => void;
}

/**
 * Clean Rich Formatted Note Content:
 * - Completely strips any hashtags (#, ##, ###, or #tag) from notes
 * - Highlights important things and key terms formatted with **bold** using clean highlighters
 * - Formats subheadings, numbered lists, and bullet items with spacious breathing room
 * - Formats clean typography and clean indentation
 */
const FormattedNoteContent: React.FC<{ content: string }> = ({ content }) => {
  const { theme } = useFlowerTheme();
  
  // Strip hashtags from headings and hashtag tags (#tag -> tag, ### Heading -> Heading)
  const cleanedContent = content
    .replace(/^#{1,6}\s+/gm, '') // remove markdown heading hashtags
    .replace(/#([a-zA-Z0-9_\-]+)/g, '$1'); // remove hashtag signs from inline words/tags

  const lines = cleanedContent.split('\n');

  // Helper to render inline highlighted text with **bold**
  const renderInlineFormatted = (text: string) => {
    // Also remove any remaining stray # in text
    const noHashText = text.replace(/#/g, '');
    const parts = noHashText.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const inner = part.slice(2, -2);
        return (
          <mark
            key={i}
            className="highlight-mark font-semibold px-1.5 py-0.5 rounded tracking-normal border inline-block my-0.5 transition-colors duration-200"
            style={{
              backgroundColor: theme.highlightBg,
              color: theme.highlightText,
              borderColor: theme.highlightBorder
            }}
          >
            {inner}
          </mark>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-2" />;
        }

        // Section header / Category title like "• DONNING SEQUENCE (Putting On):" or "DONNING SEQUENCE:"
        if (
          ((trimmed.startsWith('• ') || trimmed.startsWith('— ')) && trimmed.endsWith(':')) ||
          (trimmed.toUpperCase() === trimmed && trimmed.length > 3 && trimmed.endsWith(':'))
        ) {
          const title = trimmed.replace(/^[•—]\s*/, '').replace(/:$/, '');
          return (
            <div key={idx} className="pt-3.5 pb-1">
              <span className="inline-block text-xs font-bold tracking-wide text-slate-800 uppercase bg-slate-100 border border-slate-200/80 px-3 py-1 rounded-lg">
                {title}
              </span>
            </div>
          );
        }

        // Numbered list item: "1. Hand Hygiene: ..." or "  1. Hand Hygiene: ..."
        const numberedMatch = line.match(/^\s*(\d+)\.\s+(.*)$/);
        if (numberedMatch) {
          const num = numberedMatch[1];
          const text = numberedMatch[2];
          return (
            <div key={idx} className="flex items-start gap-3 pl-1 sm:pl-2 py-0.5">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 border border-slate-200 shadow-2xs">
                {num}
              </span>
              <div className="flex-1 leading-relaxed">
                {renderInlineFormatted(text)}
              </div>
            </div>
          );
        }

        // Sub-bullet point: "  - Text" or "- Text"
        if (line.match(/^\s*[-]\s+(.*)$/)) {
          const text = line.replace(/^\s*[-]\s+/, '');
          return (
            <div key={idx} className="flex items-start gap-2.5 pl-5 sm:pl-7 text-slate-600 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
              <div className="flex-1 leading-relaxed">
                {renderInlineFormatted(text)}
              </div>
            </div>
          );
        }

        // Main bullet point: "• Text"
        if (trimmed.startsWith('• ')) {
          const text = trimmed.replace(/^•\s*/, '');
          return (
            <div key={idx} className="flex items-start gap-3 pl-1 py-0.5">
              <span className="w-2 h-2 rounded-full bg-teal-600/80 shrink-0 mt-1.5" />
              <div className="flex-1 leading-relaxed">
                {renderInlineFormatted(text)}
              </div>
            </div>
          );
        }

        // Regular line / paragraph
        return (
          <p key={idx} className="leading-relaxed py-0.5">
            {renderInlineFormatted(line)}
          </p>
        );
      })}
    </div>
  );
};

export const NotesView: React.FC<NotesViewProps> = ({
  currentReviewer,
  currentSubject,
  onUpdateNotes,
  onNavigateToTab
}) => {
  const { theme } = useFlowerTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedNoteId, setCopiedNoteId] = useState<string | null>(null);
  const [speakingNoteId, setSpeakingNoteId] = useState<string | null>(null);

  // Edit Note Modal
  const [editingNote, setEditingNote] = useState<NoteItem | null>(null);
  const [editFormTitle, setEditFormTitle] = useState('');
  const [editFormCategory, setEditFormCategory] = useState<NoteItem['category']>('Concept');
  const [editFormContent, setEditFormContent] = useState('');
  const [editFormTags, setEditFormTags] = useState('');

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
    if (confirm('Delete this note section?')) {
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
    setEditFormTitle(note.title);
    setEditFormCategory(note.category);
    setEditFormContent(note.content);
    setEditFormTags(note.tags.join(', '));
  };

  // Save Edit Note
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingNote || !editFormTitle.trim() || !editFormContent.trim()) return;

    const tagsArray = editFormTags
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const updated = currentReviewer.notes.map(n =>
      n.id === editingNote.id
        ? {
            ...n,
            title: editFormTitle.trim(),
            category: editFormCategory,
            content: editFormContent.trim(),
            tags: tagsArray.length > 0 ? tagsArray : n.tags
          }
        : n
    );
    onUpdateNotes(updated);
    setEditingNote(null);
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
    <div className="max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 py-5 sm:py-6 space-y-6 animate-in fade-in duration-200">
      {/* Clean Document Header (No badges, no tabs, no add button) */}
      <div className="pb-4 border-b border-[#F0E6E4]">
        {currentSubject && (
          <span 
            className="font-semibold uppercase tracking-wider text-[11px] block mb-1 truncate" 
            style={{ color: theme.primary }}
          >
            {currentSubject.name}
          </span>
        )}
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
          {currentReviewer.name}
        </h1>
        <p className="text-xs text-slate-500 mt-1 leading-normal">
          {currentReviewer.notes.length} Sections
        </p>
      </div>

      {/* Control Bar: Categories & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Category Filter Pills (touch scrollable) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none -mx-1 px-1">
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
        <div className="relative w-full sm:w-52 shrink-0">
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

      {/* MAIN CONTENT: LINEAR READING DOCUMENT */}
      {filteredNotes.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 sm:p-10 text-center border border-[#F0E6E4] max-w-md mx-auto">
          <BookOpen className="w-8 h-8 opacity-40 mx-auto mb-2" style={{ color: theme.primary }} />
          <h3 className="font-serif text-base font-bold text-slate-900">No notes found</h3>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Try clearing your search query.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="text-white px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
            style={{ backgroundColor: theme.primary }}
          >
            Show All Notes
          </button>
        </div>
      ) : (
        /* LINEAR LECTURE NOTES (NO BOXES/GRID, FLUID EDITORIAL READING SURFACE) */
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#F0E6E4] p-4 sm:p-8 md:p-12 shadow-2xs space-y-10 sm:space-y-12">
          {filteredNotes.map((note, index) => {
            const pictureComponent = renderLecturePicture(note);

            return (
              <article
                key={note.id}
                className={`transition-all rounded-2xl ${
                  note.highlighted ? 'p-4 sm:p-5 ring-1 shadow-2xs' : ''
                }`}
                style={{
                  backgroundColor: note.highlighted ? theme.highlightCardBg : undefined,
                  borderColor: note.highlighted ? theme.primaryBorder : undefined,
                  boxShadow: note.highlighted ? `0 0 0 1px ${theme.primaryBorder}, 0 2px 12px ${theme.highlightBg}` : undefined
                }}
              >
                {/* Section Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    {/* Section Number */}
                    <span
                      className="px-2 py-0.5 rounded-md text-xs font-mono font-bold tracking-tight shrink-0"
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
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                        note.highlighted
                          ? 'shadow-2xs font-semibold'
                          : 'border-transparent hover:bg-slate-100/60 hover:text-slate-700'
                      }`}
                      style={{
                        backgroundColor: note.highlighted ? theme.highlightBg : undefined,
                        color: note.highlighted ? theme.highlightText : undefined,
                        borderColor: note.highlighted ? theme.highlightBorder : 'transparent'
                      }}
                    >
                      <Highlighter className="w-3.5 h-3.5" />
                    </button>

                    {/* Read Aloud */}
                    <button
                      onClick={() => handleSpeakNote(note)}
                      title={speakingNoteId === note.id ? 'Stop reading' : 'Read aloud'}
                      className={`p-1.5 rounded-md transition-colors cursor-pointer ${
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
                      className="p-1.5 rounded-md hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer"
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
                      className="p-1.5 rounded-md hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => handleDeleteNote(note.id)}
                      title="Delete note"
                      className="p-1.5 rounded-md hover:bg-slate-50 hover:text-rose-500 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Section Title without hashtags */}
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                  {note.title.replace(/#{1,6}\s*/g, '').replace(/#/g, '')}
                </h2>

                {/* Clean Formatted Note Content with Highlights */}
                <div className="py-1">
                  <FormattedNoteContent content={note.content} />
                </div>

                {/* Embedded Picture from the Source */}
                {pictureComponent && (
                  <div className="my-6">
                    {pictureComponent}
                  </div>
                )}

                {/* Subtle divider between linear sections with generous spacing */}
                {index < filteredNotes.length - 1 && (
                  <div className="border-b border-[#F0E6E4] mt-10 sm:mt-14 pt-2" />
                )}
              </article>
            );
          })}

          {/* End of Notes */}
          <div className="pt-6 sm:pt-8 border-t border-[#F0E6E4] flex items-center justify-center">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-600/80 shrink-0" />
              <span>Complete lecture notes reading</span>
            </div>
          </div>
        </div>
      )}

      {/* Edit Note Modal */}
      {editingNote && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Edit Note Section
              </h3>
              <button
                onClick={() => setEditingNote(null)}
                className="text-slate-400 hover:text-slate-800 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={editFormTitle}
                  onChange={(e) => setEditFormTitle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Category</label>
                <select
                  value={editFormCategory}
                  onChange={(e) => setEditFormCategory(e.target.value as NoteItem['category'])}
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
                <label className="block font-medium text-slate-700 mb-1">Content</label>
                <textarea
                  rows={5}
                  required
                  value={editFormContent}
                  onChange={(e) => setEditFormContent(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none focus:border-slate-400 resize-none leading-relaxed"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  value={editFormTags}
                  onChange={(e) => setEditFormTags(e.target.value)}
                  placeholder="Safety, OSHA, PPE"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingNote(null)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-white font-semibold shadow-xs cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
