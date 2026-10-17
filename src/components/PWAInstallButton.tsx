import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  Share, 
  PlusSquare, 
  X, 
  CheckCircle2, 
  WifiOff, 
  HelpCircle 
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useFlowerTheme } from '../context/ThemeContext';

interface PWAInstallButtonProps {
  variant?: 'compact' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'compact' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const { theme } = useFlowerTheme();
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [installedSuccess, setInstalledSuccess] = useState(false);

  // If already installed and launched from phone home screen, suppress install buttons
  if (isInstalled && !installedSuccess) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstalledSuccess(true);
        setTimeout(() => setInstalledSuccess(false), 4000);
      }
    } else {
      // If prompt is not directly triggerable (e.g. iOS Safari, or already installed, or browser requirements), show guide
      setShowGuideModal(true);
    }
  };

  // Compact Header / Nav Bar Button
  if (variant === 'compact') {
    return (
      <>
        <button
          onClick={handleInstallClick}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer shadow-2xs hover:opacity-90 active:scale-95"
          style={{
            backgroundColor: theme.isInverted ? 'rgba(255,255,255,0.06)' : theme.bgPage,
            borderColor: theme.borderSubtle,
            color: theme.fontPrimary
          }}
          title="Download app to your phone for offline study"
        >
          <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="hidden sm:inline">Install on Phone</span>
          <span className="sm:hidden">Install</span>
        </button>

        {showGuideModal && (
          <PWAInstallGuideModal 
            isIOS={isIOS} 
            onClose={() => setShowGuideModal(false)} 
          />
        )}
      </>
    );
  }

  // Banner variant for Homepage
  return (
    <>
      <div 
        className="rounded-2xl border p-4 sm:p-5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
        style={{
          backgroundColor: theme.bgCard,
          borderColor: theme.borderSubtle
        }}
      >
        <div className="flex items-start gap-3">
          <div 
            className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs"
            style={{ backgroundColor: theme.primary }}
          >
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-serif text-sm sm:text-base font-bold" style={{ color: theme.fontPrimary }}>
                Download Bloomie to your Phone
              </h4>
              <span 
                className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: theme.primaryLight, color: theme.primary }}
              >
                Offline Ready
              </span>
            </div>
            <p className="text-xs mt-0.5 leading-relaxed" style={{ color: theme.fontMuted }}>
              Install on your phone home screen to review lecture notes and take practice quizzes anytime without internet or cellular data.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            onClick={handleInstallClick}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-xs hover:opacity-90 active:scale-95"
            style={{ backgroundColor: theme.primary }}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install App</span>
          </button>
          <button
            onClick={() => setShowGuideModal(true)}
            className="p-2 rounded-xl border hover:opacity-80 transition-colors cursor-pointer text-xs"
            style={{ borderColor: theme.borderSubtle, color: theme.fontMuted }}
            title="How to install on iPhone or Android"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {showGuideModal && (
        <PWAInstallGuideModal 
          isIOS={isIOS} 
          onClose={() => setShowGuideModal(false)} 
        />
      )}
    </>
  );
};

// Modal with Step-by-Step Instructions for Android and iOS
const PWAInstallGuideModal: React.FC<{ isIOS: boolean; onClose: () => void }> = ({ isIOS, onClose }) => {
  const { theme } = useFlowerTheme();

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="w-full max-w-md rounded-3xl p-6 shadow-2xl border space-y-5 animate-in zoom-in-95 duration-150"
        style={{
          backgroundColor: theme.bgCard,
          borderColor: theme.borderSubtle,
          color: theme.fontBody
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: theme.borderSubtle }}>
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5" style={{ color: theme.primary }} />
            <h3 className="font-serif text-lg font-bold" style={{ color: theme.fontPrimary }}>
              Install on Your Phone
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-xl hover:opacity-75 transition-colors cursor-pointer"
            style={{ color: theme.fontMuted }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Instructions Tabs / Sections */}
        <div className="space-y-4 text-xs">
          {/* iOS Safari Guide */}
          <div 
            className="rounded-2xl p-4 border space-y-2.5"
            style={{
              backgroundColor: isIOS ? (theme.isInverted ? 'rgba(255,255,255,0.05)' : theme.bgPage) : undefined,
              borderColor: isIOS ? theme.primary : theme.borderSubtle
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider" style={{ color: theme.fontPrimary }}>
                Apple iPhone / iPad (Safari)
              </span>
              {isIOS && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200">
                  Detected Device
                </span>
              )}
            </div>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed" style={{ color: theme.fontBody }}>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">1.</span>
                <span>Open this link in <strong>Safari</strong> on your iPhone.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">2.</span>
                <span>Tap the <strong>Share</strong> button <Share className="w-3.5 h-3.5 inline mx-0.5 text-blue-500" /> in the bottom toolbar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">3.</span>
                <span>Scroll down and tap <strong>Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-0.5 text-slate-600 dark:text-slate-300" />.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">4.</span>
                <span>Tap <strong>Add</strong> at the top right. Bloomie will appear as an app icon!</span>
              </li>
            </ol>
          </div>

          {/* Android Chrome Guide */}
          <div 
            className="rounded-2xl p-4 border space-y-2.5"
            style={{
              backgroundColor: !isIOS ? (theme.isInverted ? 'rgba(255,255,255,0.05)' : theme.bgPage) : undefined,
              borderColor: !isIOS ? theme.primary : theme.borderSubtle
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider" style={{ color: theme.fontPrimary }}>
                Android Phone / Tablet (Chrome / Edge)
              </span>
              {!isIOS && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200">
                  Detected Device
                </span>
              )}
            </div>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed" style={{ color: theme.fontBody }}>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">1.</span>
                <span>Tap the <strong>Install App</strong> button or tap the <strong>three dots (⋮)</strong> in Chrome.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">2.</span>
                <span>Select <strong>Install app</strong> or <strong>Add to Home screen</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold shrink-0">3.</span>
                <span>Confirm install. Bloomie will install directly to your app drawer and home screen.</span>
              </li>
            </ol>
          </div>

          {/* Offline Assurance Callout */}
          <div 
            className="rounded-2xl p-3.5 border flex items-center gap-2.5 text-xs"
            style={{
              backgroundColor: theme.primaryLight,
              borderColor: theme.borderSubtle,
              color: theme.fontPrimary
            }}
          >
            <WifiOff className="w-4 h-4 shrink-0" style={{ color: theme.primary }} />
            <p className="leading-snug">
              <strong>Offline Capable:</strong> Once installed or opened once, all study reviewers, lecture notes, diagrams, and quizzes remain cached so you can study without Wi-Fi or mobile data!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl font-semibold text-xs text-white transition-all shadow-xs cursor-pointer hover:opacity-90 active:scale-95"
            style={{ backgroundColor: theme.primary }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
