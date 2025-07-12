'use client';
import Image from 'next/image';
import s from '../Header.module.css';
import { useTheme } from '@/shared/hooks/useTheme';
import { useCityContext } from '@/shared/hooks/useCityContext';
export const HeaderCity = () => {
  const { theme } = useTheme();
  const { city } = useCityContext();
  return (
    <div className={s.headerCity}>
      <Image src={theme === 'dark' ? '/pin-light.svg' : '/pin-black.svg'} width={24} height={24} alt="" />
      <span style={{ color: theme === 'dark' ? '#fefefe' : '#111015' }}>{city}</span>
    </div>
  );
};
