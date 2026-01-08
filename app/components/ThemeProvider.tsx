'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Provide a default value to prevent errors during SSR
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount - check localStorage first, then system preference
  useEffect(() => {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const root = document.documentElement;
    
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      // Apply saved theme
      setTheme(savedTheme);
      // Only add/remove if needed to avoid conflicts
      if (savedTheme === 'dark' && !root.classList.contains('dark')) {
        root.classList.add('dark');
      } else if (savedTheme === 'light' && root.classList.contains('dark')) {
        root.classList.remove('dark');
      }
    } else {
      // Check system preference if no saved theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      // Only add/remove if needed
      if (initialTheme === 'dark' && !root.classList.contains('dark')) {
        root.classList.add('dark');
      } else if (initialTheme === 'light' && root.classList.contains('dark')) {
        root.classList.remove('dark');
      }
      // Save system preference to localStorage
      localStorage.setItem('theme', initialTheme);
    }
    
    setMounted(true);
  }, []);

  // Update theme and localStorage when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      // Immediately update localStorage
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // Always provide the context, even before mount
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  // No need to check for undefined since we provide a default value
  return context;
}

