'use client';
import { Theme, ThemeContext } from '@/shared/context/ThemeContext';
import { ReactNode, useCallback, useEffect, useState } from 'react';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const saveTheme = typeof window !== 'undefined' ? (localStorage.getItem('theme') as Theme | null) : null;
  useEffect(() => {
    if (saveTheme) setTheme(saveTheme);
    const content = document.querySelector<HTMLDivElement>('.content-bg');
    if (content) {
      content.style.background = saveTheme === 'dark' ? '#111015' : '#fff';
    }
  }, [saveTheme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
