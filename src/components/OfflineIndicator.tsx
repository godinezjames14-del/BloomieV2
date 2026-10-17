import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { useFlowerTheme } from '../context/ThemeContext';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();
  const { theme } = useFlowerTheme();

  if (isOnline) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg border text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-200"
      style={{
        backgroundColor: theme.bgCard,
        borderColor: theme.borderSubtle,
        color: theme.fontPrimary
      }}
    >
      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
      <WifiOff className="w-3.5 h-3.5 text-amber-500" />
      <span>Offline Mode — All lecture notes and quiz questions are cached</span>
    </div>
  );
};
