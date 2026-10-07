import React, { createContext, useContext, useState, useEffect } from 'react';
import { FlowerThemeId, FlowerTheme } from '../types';

export const flowerThemes: Record<FlowerThemeId, FlowerTheme> = {
  pink: {
    id: 'pink',
    name: 'Cherry Blossom',
    flower: '🌸',
    primary: '#EE5D7E',
    primaryHover: '#E34E70',
    primaryLight: '#FDEEF1',
    primaryBorder: '#F8CCD6',
    bgPage: '#FAF6F4',
    bgCard: '#FFFFFF',
    textPrimary: '#EE5D7E'
  },
  purple: {
    id: 'purple',
    name: 'Lavender Lilac',
    flower: '💜',
    primary: '#9061F9',
    primaryHover: '#7E3AF2',
    primaryLight: '#F5F0FF',
    primaryBorder: '#D8B4FE',
    bgPage: '#F7F5F9',
    bgCard: '#FFFFFF',
    textPrimary: '#7E3AF2'
  },
  blue: {
    id: 'blue',
    name: 'Hydrangea',
    flower: '🪻',
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    primaryLight: '#EFF6FF',
    primaryBorder: '#BFDBFE',
    bgPage: '#F4F7FA',
    bgCard: '#FFFFFF',
    textPrimary: '#2563EB'
  },
  yellow: {
    id: 'yellow',
    name: 'Buttercup',
    flower: '🌼',
    primary: '#D97706',
    primaryHover: '#B45309',
    primaryLight: '#FEF3C7',
    primaryBorder: '#FDE68A',
    bgPage: '#FAF8F2',
    bgCard: '#FFFFFF',
    textPrimary: '#B45309'
  },
  green: {
    id: 'green',
    name: 'Water Lily',
    flower: '🌿',
    primary: '#0D9488',
    primaryHover: '#0F766E',
    primaryLight: '#E6FFFA',
    primaryBorder: '#99F6E4',
    bgPage: '#F4F9F7',
    bgCard: '#FFFFFF',
    textPrimary: '#0F766E'
  }
};

interface ThemeContextType {
  theme: FlowerTheme;
  themeId: FlowerThemeId;
  setThemeId: (id: FlowerThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: flowerThemes.pink,
  themeId: 'pink',
  setThemeId: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeIdState] = useState<FlowerThemeId>(() => {
    try {
      const saved = localStorage.getItem('bloomie_flower_theme');
      if (saved && saved in flowerThemes) {
        return saved as FlowerThemeId;
      }
    } catch {}
    return 'pink'; // Pink is the default!
  });

  const setThemeId = (id: FlowerThemeId) => {
    setThemeIdState(id);
    try {
      localStorage.setItem('bloomie_flower_theme', id);
    } catch {}
  };

  const currentTheme = flowerThemes[themeId] || flowerThemes.pink;

  // Set CSS variables dynamically on root/body for seamless theming
  useEffect(() => {
    document.documentElement.style.setProperty('--color-bloom-primary', currentTheme.primary);
    document.documentElement.style.setProperty('--color-bloom-hover', currentTheme.primaryHover);
    document.documentElement.style.setProperty('--color-bloom-light', currentTheme.primaryLight);
    document.documentElement.style.setProperty('--color-bloom-border', currentTheme.primaryBorder);
    document.documentElement.style.setProperty('--color-bloom-bg', currentTheme.bgPage);
    document.body.style.backgroundColor = currentTheme.bgPage;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, themeId, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useFlowerTheme = () => useContext(ThemeContext);
