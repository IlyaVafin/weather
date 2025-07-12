import { createContext } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext | null>(null);
