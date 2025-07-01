'use client';
import Image from 'next/image';
import s from '../Header.module.css';
import { useTheme } from '@/shared/hooks/useTheme';
export const HeaderCity = () => {
  const { theme } = useTheme();
  return (
    <div className={s.headerCity}>
      <Image src={theme === 'dark' ? '/pin-light.svg' : '/pin-black.svg'} width={24} height={24} alt="" />
      <span style={{ color: theme === 'dark' ? '#fefefe' : '#111015' }}>Moscow, Russia</span>
    </div>
  );
};
