import React, { useState, useRef, useEffect } from 'react';
import { useFlowerTheme, flowerThemes, COLOR_PAIRS } from '../context/ThemeContext';
import { Check, Moon, Sun, Palette } from 'lucide-react';

export const ThemePicker: React.FC = () => {
  const { 
    theme, 
    themeId, 
    baseColor, 
    isInverted, 
    setBaseColor, 
    setInverted 
  } = useFlowerTheme();

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Header Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border text-xs font-medium transition-all shadow-2xs cursor-pointer active:scale-95 ${
          isInverted
            ? 'border-white/15 hover:border-white/30'
            : 'hover:border-slate-300'
        }`}
        style={{
          backgroundColor: theme.bgCard,
          borderColor: isInverted ? theme.primaryBorder : theme.borderSubtle,
          color: isInverted ? theme.fontPrimary : theme.fontBody
        }}
        title={`Theme: ${theme.name} (${isInverted ? 'Dark' : 'Light'})`}
        aria-label="Select Color Theme"
      >
        <span className="text-sm leading-none">{theme.flower}</span>
        <span className="hidden sm:inline font-medium text-[11px] max-w-[120px] truncate">
          {theme.name}
        </span>
        
        {/* Mode indicator icon */}
        {isInverted ? (
          <Moon className="w-3 h-3 text-indigo-300 shrink-0" />
        ) : (
          <Sun className="w-3 h-3 text-amber-500 shrink-0" />
        )}

        {/* Color accent dot */}
        <span
          className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
          style={{ backgroundColor: theme.primary }}
        />
      </button>

      {/* Clean Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 w-64 sm:w-72 rounded-2xl shadow-xl border p-3 z-50 animate-in fade-in zoom-in-95 duration-100"
          style={{
            backgroundColor: theme.bgCard,
            borderColor: theme.primaryBorder,
            color: isInverted ? theme.fontPrimary : theme.fontPrimary
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5 dark:border-white/10">
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <Palette className="w-3.5 h-3.5" style={{ color: theme.primary }} />
              <span>Theme & Appearance</span>
            </div>
          </div>

          {/* Mode Switcher: Light vs Dark Inverted */}
          <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-2.5">
            <button
              onClick={() => setInverted(false)}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                !isInverted
                  ? 'shadow-xs font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              style={{
                backgroundColor: !isInverted ? theme.bgCard : undefined,
                color: !isInverted ? theme.primary : undefined
              }}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Light</span>
            </button>

            <button
              onClick={() => setInverted(true)}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                isInverted
                  ? 'shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              style={{
                backgroundColor: isInverted ? 'rgba(255,255,255,0.15)' : undefined,
                color: isInverted ? theme.fontPrimary : undefined
              }}
            >
              <Moon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Dark</span>
            </button>
          </div>

          {/* Clean Color Palettes List */}
          <div className="space-y-1">
            {COLOR_PAIRS.map((pair) => {
              const isSelected = baseColor === pair.baseColor;
              const currentOptionThemeId = isInverted ? pair.darkId : pair.lightId;
              const optionTheme = flowerThemes[currentOptionThemeId];

              return (
                <button
                  key={pair.baseColor}
                  onClick={() => setBaseColor(pair.baseColor)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left transition-all cursor-pointer border ${
                    isSelected
                      ? 'border-transparent font-medium shadow-2xs'
                      : 'border-transparent hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: isSelected 
                      ? (isInverted ? 'rgba(255,255,255,0.08)' : optionTheme.primaryLight)
                      : undefined,
                    borderColor: isSelected ? optionTheme.primaryBorder : 'transparent'
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{pair.flower}</span>
                    <span className="text-xs font-medium">
                      {optionTheme.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Theme-matching highlight preview */}
                    <span 
                      className="px-1.5 py-0.5 rounded text-[10px] font-semibold border shrink-0"
                      style={{ 
                        backgroundColor: optionTheme.highlightBg,
                        color: optionTheme.highlightText,
                        borderColor: optionTheme.highlightBorder
                      }}
                    >
                      Highlight
                    </span>

                    {/* Color dot preview */}
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: optionTheme.primary }}
                    />
                    {/* Check icon for selected item */}
                    {isSelected && (
                      <Check 
                        className="w-3.5 h-3.5 shrink-0" 
                        style={{ color: optionTheme.primary }} 
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
