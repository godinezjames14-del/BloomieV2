import React, { createContext, useContext, useState, useEffect } from 'react';
import { FlowerThemeId, BaseFlowerColor, FlowerTheme } from '../types';

export const flowerThemes: Record<FlowerThemeId, FlowerTheme> = {
  // --- PINK (CHERRY BLOSSOM) ---
  pink: {
    id: 'pink',
    baseColor: 'pink',
    name: 'Cherry Blossom',
    modeName: 'Light',
    flower: '🌸',
    primary: '#EE5D7E',
    primaryHover: '#E34E70',
    primaryLight: '#FDEEF1',
    primaryBorder: '#F8CCD6',
    borderSubtle: '#F7D6DF',
    bgPage: '#FCF4F6',
    bgCard: '#FFF8FA', // Tender petal-tinted white, soft on the eyes
    textPrimary: '#EE5D7E',
    isInverted: false,
    highlightBg: '#FCE7F3',
    highlightText: '#9D174D',
    highlightBorder: '#FBCFE8',
    highlightCardBg: '#FFF7F9',
    fontPrimary: '#2D2A2E',
    fontBody: '#443E40',
    fontMuted: '#8C8385',
    textOnPrimary: '#FFF5F8'
  },
  pink_dark: {
    id: 'pink_dark',
    baseColor: 'pink',
    name: 'Midnight Blossom',
    modeName: 'Dark Inverted',
    flower: '🌸',
    primary: '#F472B6',
    primaryHover: '#FB7185',
    primaryLight: '#381628',
    primaryBorder: '#701A45',
    borderSubtle: '#4A142E',
    bgPage: '#130B10',
    bgCard: '#1D1219',
    textPrimary: '#F472B6',
    isInverted: true,
    highlightBg: 'rgba(244, 114, 182, 0.24)',
    highlightText: '#FBCFE8',
    highlightBorder: 'rgba(244, 114, 182, 0.45)',
    highlightCardBg: '#2A1724',
    fontPrimary: '#FDF2F8', // Lighter shade of pink for headings, eliminating harsh cold white
    fontBody: '#F9A8D4', // Readable light pink tint for body text
    fontMuted: '#DDA5BC', // Soft pink-tinted muted font
    textOnPrimary: '#FDF2F8'
  },

  // --- PURPLE (LAVENDER LILAC) ---
  purple: {
    id: 'purple',
    baseColor: 'purple',
    name: 'Lavender Lilac',
    modeName: 'Light',
    flower: '💜',
    primary: '#9061F9',
    primaryHover: '#7E3AF2',
    primaryLight: '#F5F0FF',
    primaryBorder: '#D8B4FE',
    borderSubtle: '#E8D8FA',
    bgPage: '#F5F0FB',
    bgCard: '#FAF7FF', // Delicate lilac cloud tint
    textPrimary: '#7E3AF2',
    isInverted: false,
    highlightBg: '#F3E8FF',
    highlightText: '#6B21A8',
    highlightBorder: '#E9D5FF',
    highlightCardBg: '#FAF6FF',
    fontPrimary: '#2E283E',
    fontBody: '#423C52',
    fontMuted: '#857C9B',
    textOnPrimary: '#FAF6FF'
  },
  purple_dark: {
    id: 'purple_dark',
    baseColor: 'purple',
    name: 'Obsidian Lavender',
    modeName: 'Dark Inverted',
    flower: '💜',
    primary: '#A78BFA',
    primaryHover: '#C084FC',
    primaryLight: '#2E1065',
    primaryBorder: '#581C87',
    borderSubtle: '#3B1761',
    bgPage: '#0F0B18',
    bgCard: '#181226',
    textPrimary: '#C084FC',
    isInverted: true,
    highlightBg: 'rgba(167, 139, 250, 0.24)',
    highlightText: '#E9D5FF',
    highlightBorder: 'rgba(167, 139, 250, 0.45)',
    highlightCardBg: '#231638',
    fontPrimary: '#F5EEFF', // Lighter shade of lavender for headings
    fontBody: '#DDD6FE', // Readable light lavender tint for body text
    fontMuted: '#BCA8E8', // Soft lavender-tinted muted font
    textOnPrimary: '#FAF5FF'
  },

  // --- BLUE (HYDRANGEA) ---
  blue: {
    id: 'blue',
    baseColor: 'blue',
    name: 'Hydrangea',
    modeName: 'Light',
    flower: '🪻',
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    primaryLight: '#EFF6FF',
    primaryBorder: '#BFDBFE',
    borderSubtle: '#D2E4F9',
    bgPage: '#EEF4FA',
    bgCard: '#F5F9FE', // Soft frost sky white
    textPrimary: '#2563EB',
    isInverted: false,
    highlightBg: '#E0F2FE',
    highlightText: '#0369A1',
    highlightBorder: '#BAE6FD',
    highlightCardBg: '#F2F8FF',
    fontPrimary: '#1E293B',
    fontBody: '#334155',
    fontMuted: '#64748B',
    textOnPrimary: '#F0F7FF'
  },
  blue_dark: {
    id: 'blue_dark',
    baseColor: 'blue',
    name: 'Deep Hydrangea',
    modeName: 'Dark Inverted',
    flower: '🪻',
    primary: '#60A5FA',
    primaryHover: '#38BDF8',
    primaryLight: '#172554',
    primaryBorder: '#1E40AF',
    borderSubtle: '#132B66',
    bgPage: '#090E17',
    bgCard: '#111A29',
    textPrimary: '#93C5FD',
    isInverted: true,
    highlightBg: 'rgba(96, 165, 250, 0.24)',
    highlightText: '#BAE6FD',
    highlightBorder: 'rgba(96, 165, 250, 0.45)',
    highlightCardBg: '#15223A',
    fontPrimary: '#E0F2FE', // Lighter shade of blue for headings
    fontBody: '#BAE6FD', // Readable light blue tint for body text
    fontMuted: '#74A7D9', // Soft blue-tinted muted font
    textOnPrimary: '#F0F8FF'
  },

  // --- YELLOW (BUTTERCUP) ---
  yellow: {
    id: 'yellow',
    baseColor: 'yellow',
    name: 'Buttercup',
    modeName: 'Light',
    flower: '🌼',
    primary: '#D97706',
    primaryHover: '#B45309',
    primaryLight: '#FEF3C7',
    primaryBorder: '#FDE68A',
    borderSubtle: '#F5E8C2',
    bgPage: '#FAF6EB',
    bgCard: '#FFFDF5', // Warm buttermilk cream
    textPrimary: '#B45309',
    isInverted: false,
    highlightBg: '#FEF9C3',
    highlightText: '#854D0E',
    highlightBorder: '#FDE047',
    highlightCardBg: '#FFFDF6',
    fontPrimary: '#292524',
    fontBody: '#44403C',
    fontMuted: '#78716C',
    textOnPrimary: '#FFFDF2'
  },
  yellow_dark: {
    id: 'yellow_dark',
    baseColor: 'yellow',
    name: 'Amber Buttercup',
    modeName: 'Dark Inverted',
    flower: '🌼',
    primary: '#FBBF24',
    primaryHover: '#F59E0B',
    primaryLight: '#3B2107',
    primaryBorder: '#78350F',
    borderSubtle: '#4A2508',
    bgPage: '#14100A',
    bgCard: '#1E1810',
    textPrimary: '#FCD34D',
    isInverted: true,
    highlightBg: 'rgba(251, 191, 36, 0.24)',
    highlightText: '#FEF08A',
    highlightBorder: 'rgba(251, 191, 36, 0.45)',
    highlightCardBg: '#2A2012',
    fontPrimary: '#FEF9C3', // Lighter shade of gold/buttercup for headings
    fontBody: '#FDE68A', // Readable light amber tint for body text
    fontMuted: '#CBAA58', // Soft warm-tinted muted font
    textOnPrimary: '#FFFDF0'
  },

  // --- GREEN (WATER LILY) ---
  green: {
    id: 'green',
    baseColor: 'green',
    name: 'Water Lily',
    modeName: 'Light',
    flower: '🌿',
    primary: '#0D9488',
    primaryHover: '#0F766E',
    primaryLight: '#E6FFFA',
    primaryBorder: '#99F6E4',
    borderSubtle: '#C9EBE1',
    bgPage: '#EBF5F1',
    bgCard: '#F3FAF7', // Refreshing sage mint white
    textPrimary: '#0F766E',
    isInverted: false,
    highlightBg: '#CCFBF1',
    highlightText: '#0F766E',
    highlightBorder: '#99F6E4',
    highlightCardBg: '#F3FAF8',
    fontPrimary: '#1A2E2B',
    fontBody: '#2D4541',
    fontMuted: '#62827B',
    textOnPrimary: '#F0FAF7'
  },
  green_dark: {
    id: 'green_dark',
    baseColor: 'green',
    name: 'Emerald Water Lily',
    modeName: 'Dark Inverted',
    flower: '🌿',
    primary: '#2DD4BF',
    primaryHover: '#14B8A6',
    primaryLight: '#042F2E',
    primaryBorder: '#115E59',
    borderSubtle: '#0A423E',
    bgPage: '#091312',
    bgCard: '#10211F',
    textPrimary: '#5EEAD4',
    isInverted: true,
    highlightBg: 'rgba(45, 212, 191, 0.24)',
    highlightText: '#99F6E4',
    highlightBorder: 'rgba(45, 212, 191, 0.45)',
    highlightCardBg: '#132825',
    fontPrimary: '#CCFBF1', // Lighter shade of mint for headings
    fontBody: '#99F6E4', // Readable light teal/mint tint for body text
    fontMuted: '#4EADA0', // Soft mint-tinted muted font
    textOnPrimary: '#F0FDFB'
  },

  // Fallback for legacy 'inverted' ID
  inverted: {
    id: 'inverted',
    baseColor: 'pink',
    name: 'Midnight Blossom',
    modeName: 'Dark Inverted',
    flower: '🌸',
    primary: '#F472B6',
    primaryHover: '#FB7185',
    primaryLight: '#381628',
    primaryBorder: '#701A45',
    borderSubtle: '#4A142E',
    bgPage: '#130B10',
    bgCard: '#1D1219',
    textPrimary: '#F472B6',
    isInverted: true,
    highlightBg: 'rgba(244, 114, 182, 0.24)',
    highlightText: '#FBCFE8',
    highlightBorder: 'rgba(244, 114, 182, 0.45)',
    highlightCardBg: '#2A1724',
    fontPrimary: '#FDF2F8',
    fontBody: '#F9A8D4',
    fontMuted: '#DDA5BC',
    textOnPrimary: '#FDF2F8'
  }
};

export const COLOR_PAIRS: { baseColor: BaseFlowerColor; lightId: FlowerThemeId; darkId: FlowerThemeId; label: string; flower: string }[] = [
  { baseColor: 'pink', lightId: 'pink', darkId: 'pink_dark', label: 'Cherry Blossom', flower: '🌸' },
  { baseColor: 'purple', lightId: 'purple', darkId: 'purple_dark', label: 'Lavender Lilac', flower: '💜' },
  { baseColor: 'blue', lightId: 'blue', darkId: 'blue_dark', label: 'Hydrangea', flower: '🪻' },
  { baseColor: 'yellow', lightId: 'yellow', darkId: 'yellow_dark', label: 'Buttercup', flower: '🌼' },
  { baseColor: 'green', lightId: 'green', darkId: 'green_dark', label: 'Water Lily', flower: '🌿' }
];

interface ThemeContextType {
  theme: FlowerTheme;
  themeId: FlowerThemeId;
  baseColor: BaseFlowerColor;
  isInverted: boolean;
  setThemeId: (id: FlowerThemeId) => void;
  setBaseColor: (color: BaseFlowerColor) => void;
  toggleInverted: () => void;
  setInverted: (inverted: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: flowerThemes.pink,
  themeId: 'pink',
  baseColor: 'pink',
  isInverted: false,
  setThemeId: () => {},
  setBaseColor: () => {},
  toggleInverted: () => {},
  setInverted: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeIdState] = useState<FlowerThemeId>(() => {
    try {
      const saved = localStorage.getItem('bloomie_flower_theme');
      if (saved && saved in flowerThemes) {
        return saved as FlowerThemeId;
      }
    } catch {}
    return 'pink';
  });

  const currentTheme = flowerThemes[themeId] || flowerThemes.pink;
  const isInverted = currentTheme.isInverted;
  const baseColor = currentTheme.baseColor;

  const setThemeId = (id: FlowerThemeId) => {
    const validId = (id in flowerThemes) ? id : 'pink';
    setThemeIdState(validId);
    try {
      localStorage.setItem('bloomie_flower_theme', validId);
    } catch {}
  };

  const setBaseColor = (newBaseColor: BaseFlowerColor) => {
    const targetId: FlowerThemeId = isInverted ? `${newBaseColor}_dark` as FlowerThemeId : newBaseColor;
    setThemeId(targetId);
  };

  const setInverted = (inverted: boolean) => {
    const targetId: FlowerThemeId = inverted ? `${baseColor}_dark` as FlowerThemeId : baseColor;
    setThemeId(targetId);
  };

  const toggleInverted = () => {
    setInverted(!isInverted);
  };

  // Set dynamic CSS variables on html root for seamless responsive theming
  useEffect(() => {
    document.documentElement.style.setProperty('--color-bloom-primary', currentTheme.primary);
    document.documentElement.style.setProperty('--color-bloom-hover', currentTheme.primaryHover);
    document.documentElement.style.setProperty('--color-bloom-light', currentTheme.primaryLight);
    document.documentElement.style.setProperty('--color-bloom-border', currentTheme.primaryBorder);
    document.documentElement.style.setProperty('--color-bloom-border-subtle', currentTheme.borderSubtle);
    document.documentElement.style.setProperty('--color-bloom-bg', currentTheme.bgPage);
    document.documentElement.style.setProperty('--color-bloom-card', currentTheme.bgCard);
    document.documentElement.style.setProperty('--color-bloom-highlight-bg', currentTheme.highlightBg);
    document.documentElement.style.setProperty('--color-bloom-highlight-text', currentTheme.highlightText);
    document.documentElement.style.setProperty('--color-bloom-highlight-border', currentTheme.highlightBorder);
    document.documentElement.style.setProperty('--color-bloom-highlight-card', currentTheme.highlightCardBg);
    document.documentElement.style.setProperty('--color-bloom-font-primary', currentTheme.fontPrimary);
    document.documentElement.style.setProperty('--color-bloom-font-body', currentTheme.fontBody);
    document.documentElement.style.setProperty('--color-bloom-font-muted', currentTheme.fontMuted);
    document.documentElement.style.setProperty('--color-bloom-text-on-primary', currentTheme.textOnPrimary);
    
    // Set body background
    document.body.style.backgroundColor = currentTheme.bgPage;

    if (currentTheme.isInverted) {
      document.documentElement.classList.add('theme-inverted');
      document.documentElement.setAttribute('data-theme-color', currentTheme.baseColor);
    } else {
      document.documentElement.classList.remove('theme-inverted');
      document.documentElement.removeAttribute('data-theme-color');
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ 
      theme: currentTheme, 
      themeId, 
      baseColor, 
      isInverted, 
      setThemeId, 
      setBaseColor, 
      toggleInverted, 
      setInverted 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useFlowerTheme = () => useContext(ThemeContext);
