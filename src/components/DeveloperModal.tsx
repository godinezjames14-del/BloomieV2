import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Code2, 
  Copy, 
  Check, 
  Plus, 
  Download, 
  Sparkles,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { Exam } from '../types';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDeveloperMode: boolean;
  onUnlockDeveloperMode: (passcode: string) => boolean;
  onLockDeveloperMode: () => void;
  onOpenUploadModal: () => void;
  exams: Exam[];
}

export const DeveloperModal: React.FC<DeveloperModalProps> = ({
  isOpen,
  onClose,
  isDeveloperMode,
  onUnlockDeveloperMode,
  onLockDeveloperMode,
  onOpenUploadModal,
  exams
}) => {
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [showExportCode, setShowExportCode] = useState(false);

  if (!isOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onUnlockDeveloperMode(passcode);
    if (success) {
      setErrorMsg('');
      setPasscode('');
    } else {
      setErrorMsg('Incorrect developer passcode. (Default: bloomie)');
    }
  };

  const generateExportCode = () => {
    return `import { Exam } from '../types';\n\nexport const initialExams: Exam[] = ${JSON.stringify(
      exams,
      null,
      2
    )};\n`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateExportCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-[#F0E6E4] animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F5EAE8] mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-2xl flex items-center justify-center ${
              isDeveloperMode ? 'bg-emerald-100 text-emerald-800' : 'bg-[#FDEEF1] text-[#EE5D7E]'
            }`}>
              {isDeveloperMode ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#231F20]">
                {isDeveloperMode ? 'Developer Control Center' : 'Developer Authentication'}
              </h3>
              <p className="text-xs text-[#7A7072]">
                {isDeveloperMode
                  ? 'Manage curated reviewers and export for Vercel'
                  : 'Restricted: Only the developer can add or update reviewers'}
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

        {!isDeveloperMode ? (
          /* Authentication Screen */
          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="bg-[#FAF4F3] rounded-2xl p-4 border border-[#F0DFE2] text-xs text-[#645E60] leading-relaxed">
              <p className="font-semibold text-[#231F20] mb-1">
                🔒 Vercel Deployment Protection
              </p>
              <p>
                To maintain high quality and prevent unauthorized changes on your live Vercel domain, adding and modifying reviewer materials is reserved for the developer.
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A7072] mb-1.5">
                Developer Passcode
              </label>
              <input
                type="password"
                autoFocus
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="Enter passcode (default: bloomie)"
                className="w-full border border-[#EFE5E3] rounded-2xl px-4 py-2.5 text-xs text-[#231F20] focus:ring-2 focus:ring-[#EE5D7E]/30 focus:border-[#EE5D7E] outline-none"
              />
              {errorMsg && (
                <p className="text-[11px] text-rose-600 font-medium mt-1.5">{errorMsg}</p>
              )}
            </div>

            <div className="pt-3 border-t border-[#F5EAE8] flex justify-between items-center">
              <span className="text-[11px] text-[#A09898]">Default code: <strong className="font-mono text-[#EE5D7E]">bloomie</strong></span>
              <button
                type="submit"
                className="bg-[#EE5D7E] hover:bg-[#E34E70] text-white px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>Unlock Developer Mode</span>
              </button>
            </div>
          </form>
        ) : (
          /* Unlocked Developer Tools Screen */
          <div className="space-y-5">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-950 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-emerald-900">Developer Mode Active</p>
                <p className="text-[11px] text-emerald-800 leading-relaxed mt-0.5">
                  You have full privileges to add, edit, or delete reviewers. Regular users on your Vercel site remain in student read & quiz mode.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenUploadModal();
                }}
                className="p-3.5 rounded-2xl border border-[#F8CCD6] bg-[#FDEEF1] hover:bg-[#FCD8E0] text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#EE5D7E] mb-1">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Reviewer</span>
                </div>
                <p className="text-[10px] text-[#7A7072]">
                  Create from document or generate via AI.
                </p>
              </button>

              <button
                onClick={() => setShowExportCode(!showExportCode)}
                className="p-3.5 rounded-2xl border border-[#EFE5E3] bg-[#FCF8F7] hover:bg-[#F9F1EF] text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#231F20] mb-1">
                  <Code2 className="w-3.5 h-3.5 text-[#EE5D7E]" />
                  <span>Export for Vercel</span>
                </div>
                <p className="text-[10px] text-[#7A7072]">
                  Get code for defaultReviewers.ts to deploy.
                </p>
              </button>
            </div>

            {/* Code Export Box */}
            {showExportCode && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#231F20] text-[11px] uppercase tracking-wider">
                    Copy to defaultReviewers.ts:
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="text-[11px] font-bold text-[#EE5D7E] hover:text-[#D8385E] flex items-center gap-1 cursor-pointer"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <textarea
                  readOnly
                  rows={6}
                  value={generateExportCode()}
                  className="w-full bg-[#1E1E24] text-[#E0E0E0] font-mono text-[10px] p-3 rounded-2xl outline-none resize-none"
                />
                <p className="text-[10px] text-[#8C8385]">
                  💡 <em>Tip:</em> Whenever you update exams or reviewers, copy this code into <code className="text-[#EE5D7E]">src/data/defaultExams.ts</code> and push to GitHub. Vercel will instantly publish it for all users!
                </p>
              </div>
            )}

            {/* Lock Mode Button */}
            <div className="pt-3 border-t border-[#F5EAE8] flex justify-between items-center">
              <span className="text-xs text-[#8C8385]">
                {exams.length} exam(s) in collection
              </span>
              <button
                onClick={() => {
                  onLockDeveloperMode();
                  onClose();
                }}
                className="px-4 py-2 rounded-xl border border-[#EFE5E3] hover:bg-[#FAF4F3] text-xs font-semibold text-[#645E60] flex items-center gap-1.5 cursor-pointer"
              >
                <Lock className="w-3 h-3" />
                <span>Lock Developer Mode</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
