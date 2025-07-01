'use client';
import Image from 'next/image';
import s from './Styles.module.css';
import { useTheme } from '@/shared/hooks/useTheme';
export const Button = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className={s.toggleThemeButton}>
      <span className={theme === 'dark' ? s.darkMode : s.lightMode}>
        {theme === 'dark' ? (
          <Image width={24} height={24} src="/moon.svg" alt="moon/dark-mode" />
        ) : (
          <Image width={24} height={24} src="/sun.svg" alt="sun/light-mode" />
        )}
      </span>
    </button>
  );
};
