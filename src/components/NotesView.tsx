import React, { useState, useMemo } from 'react';
import { 
  Volume2, 
  Copy, 
  Check, 
  ArrowRight, 
  VolumeX, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { NoteItem, Reviewer, ActiveTab, Subject, WorkspaceTab } from '../types';
import { useFlowerTheme } from '../context/ThemeContext';
import { formatScientificText } from '../utils/textFormatter';
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
  onSelectReviewerAndTab?: (subjectId: string, reviewerId: string, tab: WorkspaceTab) => void;
  onUpdateScrollProgress?: (progress: number) => void;
}

/**
 * Clean Rich Formatted Note Content:
 * - Completely strips any raw asterisks (**) or hashtags (#) from notes to keep text clean
 * - Formats subheadings, numbered lists, key terms, and bullet items cleanly
 * - Formats clean typography and clean indentation
 */
const FormattedNoteContent: React.FC<{ content: string }> = ({ content }) => {
  const { theme } = useFlowerTheme();
  
  // Clean raw asterisks and hashtags, and format scientific / LaTeX formulas
  const cleanedContent = formatScientificText(
    content
      .replace(/^#{1,6}\s+/gm, '') // remove markdown heading hashtags
      .replace(/#([a-zA-Z0-9_\-]+)/g, '$1') // remove hashtag signs from inline words/tags
  );

  const lines = cleanedContent.split('\n');

  // Helper to render inline text cleanly
  const renderInlineFormatted = (text: string) => {
    const cleanText = formatScientificText(text);
    
    // Check if the line has a key term before a colon: e.g. "Peptidoglycan Chemistry: description..."
    const colonMatch = cleanText.match(/^([^:]+):(\s+.*)$/);
    if (colonMatch && colonMatch[1].length < 45 && !cleanText.startsWith('http')) {
      return (
        <span>
          <strong className="font-semibold" style={{ color: theme.fontPrimary }}>
            {colonMatch[1]}:
          </strong>
          <span style={{ color: theme.fontBody }}>{colonMatch[2]}</span>
        </span>
      );
    }

    return <span style={{ color: theme.fontBody }}>{cleanText}</span>;
  };

  return (
    <div className="space-y-4 text-xs sm:text-sm leading-relaxed font-normal" style={{ color: theme.fontBody }}>
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
          const title = formatScientificText(trimmed.replace(/^[•—]\s*/, '').replace(/:$/, ''));
          return (
            <div key={idx} className="pt-3.5 pb-1">
              <span 
                className="inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-lg border transition-colors shadow-2xs"
                style={{
                  backgroundColor: theme.primaryLight,
                  borderColor: theme.primaryBorder,
                  color: theme.primary
                }}
              >
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
              <span 
                className="w-5 h-5 rounded-full font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 border shadow-2xs transition-colors"
                style={{
                  backgroundColor: theme.primaryLight,
                  color: theme.primary,
                  borderColor: theme.primaryBorder
                }}
              >
                {num}
              </span>
              <div className="flex-1 leading-relaxed" style={{ color: theme.fontBody }}>
                {renderInlineFormatted(text)}
              </div>
            </div>
          );
        }

        // Sub-bullet point: "  - Text" or "- Text"
        if (line.match(/^\s*[-]\s+(.*)$/)) {
          const text = line.replace(/^\s*[-]\s+/, '');
          return (
            <div key={idx} className="flex items-start gap-2.5 pl-5 sm:pl-7 py-0.5" style={{ color: theme.fontBody }}>
              <span 
                className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" 
                style={{ backgroundColor: theme.primary }}
              />
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
            <div key={idx} className="flex items-start gap-3 pl-1 py-0.5" style={{ color: theme.fontBody }}>
              <span 
                className="w-2 h-2 rounded-full shrink-0 mt-1.5" 
                style={{ backgroundColor: theme.primary }}
              />
              <div className="flex-1 leading-relaxed">
                {renderInlineFormatted(text)}
              </div>
            </div>
          );
        }

        // Regular line / paragraph
        return (
          <p key={idx} className="leading-relaxed py-0.5" style={{ color: theme.fontBody }}>
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
  onNavigateToTab,
  onSelectReviewerAndTab
}) => {
  const { theme } = useFlowerTheme();
  const [copiedNoteId, setCopiedNoteId] = useState<string | null>(null);
  const [speakingNoteId, setSpeakingNoteId] = useState<string | null>(null);

  // Connect all sections in the subject
  const subjectNotes = useMemo(() => {
    if (!currentSubject) return currentReviewer.notes;
    const noteMap = new Map<string, NoteItem>();
    currentSubject.reviewers.forEach(r => {
      r.notes.forEach(n => {
        if (!noteMap.has(n.id)) {
          noteMap.set(n.id, n);
        }
      });
    });
    return noteMap.size > 0 ? Array.from(noteMap.values()) : currentReviewer.notes;
  }, [currentSubject, currentReviewer]);

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
      {/* Clean Document Header */}
      <div className="pb-4 border-b" style={{ borderColor: theme.borderSubtle }}>
        {currentSubject && (
          <span 
            className="font-semibold uppercase tracking-wider text-[11px] block mb-1 break-words leading-tight" 
            style={{ color: theme.primary }}
          >
            {currentSubject.name}
          </span>
        )}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight" style={{ color: theme.fontPrimary }}>
            {currentReviewer.name}
          </h1>
          {currentReviewer.fileName && (
            <a
              href={`/assets/aistudio/${currentReviewer.fileName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all hover:opacity-85 self-start sm:self-auto cursor-pointer"
              style={{
                backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.06)' : theme.bgCard,
                borderColor: theme.borderSubtle,
                color: theme.primary
              }}
              title="View source document"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Source Document</span>
            </a>
          )}
        </div>
        <p className="text-xs mt-1.5 leading-normal flex items-center gap-2" style={{ color: theme.fontMuted }}>
          <span>{subjectNotes.length} Connected Sections</span>
          <span aria-hidden="true">·</span>
          <span>Continuous Study Stream</span>
        </p>
      </div>

      {/* CONNECTED SECTIONS CONTAINER */}
      <div 
        className="rounded-2xl sm:rounded-3xl border p-5 sm:p-8 md:p-12 shadow-2xs transition-colors"
        style={{
          backgroundColor: theme.bgCard,
          borderColor: theme.borderSubtle,
          color: theme.fontBody
        }}
      >
        {/* Continuous Connected Spine Rail */}
        <div 
          className="relative pl-6 sm:pl-10 space-y-12 sm:space-y-14 border-l-2 ml-3 sm:ml-4" 
          style={{ borderColor: theme.borderSubtle }}
        >
          {subjectNotes.map((note, index) => {
            const pictureComponent = renderLecturePicture(note);

            return (
              <article
                key={note.id}
                className="relative group transition-all"
              >
                {/* Connecting Node on the continuous spine */}
                <div 
                  className="absolute -left-[37px] sm:-left-[53px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-[11px] sm:text-xs font-mono font-bold shadow-xs transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: theme.bgCard,
                    borderColor: theme.primary,
                    color: theme.primary
                  }}
                  title={`Section ${index + 1}`}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Section Meta Bar: Category kicker + Read Aloud & Copy */}
                <div 
                  className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b"
                  style={{ borderColor: theme.borderSubtle }}
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span 
                      className="font-bold uppercase tracking-wider text-[11px]"
                      style={{ color: theme.primary }}
                    >
                      {note.category}
                    </span>
                    {note.tags && note.tags.length > 0 && (
                      <>
                        <span style={{ color: theme.fontMuted }}>·</span>
                        <span className="text-[11px] truncate max-w-[200px] sm:max-w-xs" style={{ color: theme.fontMuted }}>
                          {note.tags.slice(0, 3).join(', ')}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Action Icons: Read Aloud and Copy */}
                  <div className="flex items-center gap-1" style={{ color: theme.fontMuted }}>
                    {/* Read Aloud */}
                    <button
                      onClick={() => handleSpeakNote(note)}
                      title={speakingNoteId === note.id ? 'Stop reading' : 'Read aloud'}
                      className="p-1.5 rounded-md transition-colors cursor-pointer hover:opacity-80"
                      style={{
                        backgroundColor: speakingNoteId === note.id ? theme.highlightBg : undefined,
                        color: speakingNoteId === note.id ? theme.primary : undefined
                      }}
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
                      className="p-1.5 rounded-md hover:opacity-80 transition-colors cursor-pointer"
                    >
                      {copiedNoteId === note.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Section Title */}
                <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 leading-snug" style={{ color: theme.fontPrimary }}>
                  {formatScientificText(note.title.replace(/#{1,6}\s*/g, '').replace(/#/g, ''))}
                </h2>

                {/* Formatted Content */}
                <div className="py-1">
                  <FormattedNoteContent content={note.content} />
                </div>

                {/* Embedded Diagram */}
                {pictureComponent && (
                  <div className="my-6">
                    {pictureComponent}
                  </div>
                )}
              </article>
            );
          })}

          {/* Connected Completion Node at end of spine */}
          <div className="relative pt-4">
            <div 
              className="absolute -left-[37px] sm:-left-[53px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-white shadow-xs"
              style={{
                backgroundColor: theme.primary,
                borderColor: theme.primary
              }}
            >
              <CheckCircle2 className="w-4 h-4" />
            </div>

            <div 
              className="rounded-2xl p-4 sm:p-5 border flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              style={{
                backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.03)' : theme.bgPage,
                borderColor: theme.borderSubtle
              }}
            >
              <div>
                <h4 className="font-serif text-sm sm:text-base font-bold" style={{ color: theme.fontPrimary }}>
                  All {subjectNotes.length} Sections Connected & Complete
                </h4>
                <p className="text-xs mt-0.5" style={{ color: theme.fontMuted }}>
                  Ready to test your retention on this material?
                </p>
              </div>

              <button
                onClick={() => {
                  const quizRev = currentSubject?.reviewers.find(
                    r => r.name.toLowerCase().includes('quiz') || r.name.toLowerCase().includes('multiple') || r.questions.length > 0
                  );
                  if (quizRev && onSelectReviewerAndTab && currentSubject) {
                    onSelectReviewerAndTab(currentSubject.id, quizRev.id, 'quiz');
                  } else {
                    onNavigateToTab('quiz');
                  }
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white flex items-center gap-1.5 cursor-pointer shadow-xs hover:opacity-90 active:scale-95 transition-all shrink-0"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Multiple Choice Quiz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
