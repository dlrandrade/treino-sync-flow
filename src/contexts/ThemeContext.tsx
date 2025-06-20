
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeColors {
  primary: string;
  primaryDark: string;
  gradient: string;
}

interface ThemeContextType {
  currentTheme: string;
  themeColors: ThemeColors;
  setTheme: (theme: string) => void;
  availableThemes: { [key: string]: ThemeColors };
}

const themes = {
  blue: {
    primary: '#3B82F6',
    primaryDark: '#1D4ED8',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  green: {
    primary: '#10B981',
    primaryDark: '#059669',
    gradient: 'linear-gradient(135deg, #10B981 0%, #047857 100%)'
  },
  orange: {
    primary: '#F97316',
    primaryDark: '#EA580C',
    gradient: 'linear-gradient(135deg, #F97316 0%, #C2410C 100%)'
  },
  pink: {
    primary: '#EC4899',
    primaryDark: '#DB2777',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)'
  },
  purple: {
    primary: '#8B5CF6',
    primaryDark: '#7C3AED',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)'
  },
  red: {
    primary: '#EF4444',
    primaryDark: '#DC2626',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('zymapp-theme');
    if (savedTheme && themes[savedTheme as keyof typeof themes]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const theme = themes[currentTheme as keyof typeof themes];
    if (theme) {
      document.documentElement.style.setProperty('--theme-primary', theme.primary);
      document.documentElement.style.setProperty('--theme-primary-dark', theme.primaryDark);
      document.documentElement.style.setProperty('--theme-gradient', theme.gradient);
    }
  }, [currentTheme]);

  const setTheme = (theme: string) => {
    if (themes[theme as keyof typeof themes]) {
      setCurrentTheme(theme);
      localStorage.setItem('zymapp-theme', theme);
    }
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      themeColors: themes[currentTheme as keyof typeof themes],
      setTheme,
      availableThemes: themes
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
