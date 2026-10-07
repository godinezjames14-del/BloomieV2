import React, { useState, useRef, useEffect } from 'react';
import { useFlowerTheme, flowerThemes } from '../context/ThemeContext';
import { FlowerThemeId } from '../types';
import { Sparkles, Palette, Check } from 'lucide-react';

export const ThemePicker: React.FC = () => {
  const { theme, themeId, setThemeId } = useFlowerTheme();
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

  const themesList = Object.values(flowerThemes);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EFE5E3] hover:border-[#DDD] text-xs font-medium text-[#443E40] transition-colors shadow-2xs cursor-pointer"
        title="Select Flower Color Theme"
      >
        <span className="text-sm">{theme.flower}</span>
        <span className="hidden sm:inline font-medium text-[11px]">{theme.name}</span>
        <span
          className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0 ml-0.5"
          style={{ backgroundColor: theme.primary }}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#F0E5E3] p-2.5 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-2 py-1 mb-1 border-b border-[#F5ECE9] flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#A09898]">
              Flower Palette
            </span>
            <span className="text-[10px] text-[#A09898]">Pastel Themes</span>
          </div>

          <div className="space-y-1">
            {themesList.map((th) => {
              const isSelected = themeId === th.id;
              return (
                <button
                  key={th.id}
                  onClick={() => {
                    setThemeId(th.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#FAF4F3] font-bold text-[#231F20]'
                      : 'hover:bg-[#FCF8F7] text-[#645E60]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{th.flower}</span>
                    <span className="text-xs">{th.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: th.primary }}
                    />
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#231F20]" />}
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
