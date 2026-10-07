import React, { useState } from 'react';
import { 
  X, 
  Upload, 
  FileText, 
  Sparkles, 
  Loader2, 
  Check, 
  BookOpen, 
  Calendar 
} from 'lucide-react';
import { Reviewer, QuestionType } from '../types';
import { generateStudyReviewer } from '../services/geminiService';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReviewer: (reviewer: Reviewer) => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  onAddReviewer
}) => {
  const [reviewerName, setReviewerName] = useState('');
  const [sourceText, setSourceText] = useState('');
  const [fileName, setFileName] = useState('My_Study_Notes.pdf');
  const [testDate, setTestDate] = useState('2026-10-15');
  const [questionTypes, setQuestionTypes] = useState<QuestionType[]>([
    'multiple_choice',
    'identification'
  ]);
  const [questionCount, setQuestionCount] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  // Preset templates
  const presets = [
    {
      title: 'Microbiology: Biosafety Levels (BSL 1-4)',
      fileName: 'Biosafety_Levels_Classification.pdf',
      text: 'Overview of BSL-1 through BSL-4 classifications, representative organisms (Bacillus subtilis, HIV, M. tuberculosis, Marburg virus), and containment requirements.'
    },
    {
      title: 'Microbiology: Disinfection & Chemical Safety',
      fileName: 'Decontamination_10Percent_Bleach.pdf',
      text: 'Protocols for 1:10 household bleach dilution, labeling, shift documentation, solvent handling, and prohibiting contact lenses with volatile solvents.'
    },
    {
      title: 'Microbiology: Biological Safety Cabinets & Controls',
      fileName: 'BSCs_and_Hierarchy_of_Controls.pdf',
      text: 'Engineering controls including Class I, Class II (Type A vs B), Class III glove boxes, negative pressure airflow, and the NIOSH Hierarchy of Controls.'
    }
  ];

  const handleApplyPreset = (p: typeof presets[0]) => {
    setReviewerName(p.title);
    setFileName(p.fileName);
    setSourceText(p.text);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      if (!reviewerName) {
        setReviewerName(file.name.replace(/\.[^/.]+$/, ''));
      }
      // Read text if text file
      if (file.type.includes('text') || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSourceText(event.target?.result as string || '');
        };
        reader.readAsText(file);
      } else {
        setSourceText(`Study materials and review concepts extracted from ${file.name}.`);
      }
    }
  };

  const toggleType = (t: QuestionType) => {
    if (questionTypes.includes(t)) {
      if (questionTypes.length > 1) {
        setQuestionTypes(questionTypes.filter(item => item !== t));
      }
    } else {
      setQuestionTypes([...questionTypes, t]);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim()) return;

    setIsGenerating(true);
    try {
      const generated = await generateStudyReviewer(
        sourceText || reviewerName,
        questionTypes,
        questionCount
      );

      const newReviewer: Reviewer = {
        id: `reviewer-${Date.now()}`,
        name: reviewerName.trim(),
        fileName: fileName.trim() || `${reviewerName}.pdf`,
        fileSnippet: sourceText.slice(0, 150),
        testDate: testDate || '2026-10-20',
        questionTypes,
        questionCount,
        notes: generated.notes,
        questions: generated.questions,
        createdAt: new Date().toISOString().split('T')[0],
        masteryScore: 0,
        studyStreakDays: 1
      };

      onAddReviewer(newReviewer);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-[#F0E6E4] animate-in zoom-in-95 duration-150 my-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#F5EAE8] mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#FDEEF1] text-[#EE5D7E] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#231F20]">
                Create New Reviewer
              </h3>
              <p className="text-xs text-[#7A7072]">
                Upload materials or select a topic to blossom into notes & quizzes.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#A09898] hover:text-[#231F20] p-1.5 rounded-xl hover:bg-[#FAF4F3]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Presets */}
        <div className="mb-6">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#A09898] block mb-2">
            Quick Starter Topics
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {presets.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleApplyPreset(p)}
                className="p-2.5 rounded-xl border border-[#EFE5E3] bg-[#FCF8F7] hover:bg-[#FDEEF1] hover:border-[#F8CCD6] text-left transition-all cursor-pointer text-xs"
              >
                <p className="font-bold text-[#231F20] truncate">{p.title.split(':')[0]}</p>
                <p className="text-[10px] text-[#7A7072] truncate">{p.title.split(':')[1]}</p>
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleCreate} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-1">
              Reviewer Name
            </label>
            <input
              type="text"
              required
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              placeholder="e.g. ScienceV1 or Molecular Biology"
              className="w-full border border-[#EFE5E3] rounded-2xl px-4 py-2.5 text-xs text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 focus:border-[#EE5D7E] outline-none font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-1">
                Source Document / File
              </label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="source-file-input"
                />
                <label
                  htmlFor="source-file-input"
                  className="w-full flex items-center justify-between border border-[#EFE5E3] rounded-2xl px-4 py-2.5 text-xs text-[#645E60] bg-[#FCF8F7] hover:bg-[#F9F1EF] cursor-pointer transition-colors"
                >
                  <span className="truncate">{fileName}</span>
                  <Upload className="w-3.5 h-3.5 text-[#EE5D7E] shrink-0 ml-2" />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-1">
                Target Test Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={testDate}
                  onChange={(e) => setTestDate(e.target.value)}
                  className="w-full border border-[#EFE5E3] rounded-2xl px-4 py-2.5 text-xs text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-1">
              Study Content or Summary (Optional)
            </label>
            <textarea
              rows={3}
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              placeholder="Paste notes, lecture bullets, or key concepts to extract from..."
              className="w-full border border-[#EFE5E3] rounded-2xl p-3.5 text-xs text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 outline-none resize-none leading-relaxed"
            />
          </div>

          {/* Question Types */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-2">
              Include Question Types
            </label>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: 'multiple_choice', label: 'Multiple Choice' },
                  { id: 'identification', label: 'Identification' },
                  { id: 'enumeration', label: 'Enumeration' },
                  { id: 'essay', label: 'Essay' }
                ] as const
              ).map((type) => {
                const isSelected = questionTypes.includes(type.id);
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => toggleType(type.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FDEEF1] text-[#EE5D7E] border-[#F8CCD6] font-semibold'
                        : 'bg-[#FCF8F7] text-[#7A7072] border-[#EFE5E3]'
                    }`}
                  >
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-[#F5EAE8] flex justify-end gap-3 items-center">
            <button
              type="button"
              onClick={onClose}
              disabled={isGenerating}
              className="px-4 py-2.5 rounded-2xl text-xs font-semibold text-[#7A7072] hover:bg-[#FAF4F3]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isGenerating || !reviewerName.trim()}
              className="bg-[#EE5D7E] hover:bg-[#E34E70] disabled:opacity-50 text-white px-6 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Distilling Reviewer...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Reviewer</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
