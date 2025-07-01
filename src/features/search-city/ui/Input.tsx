'use client';
import Image from 'next/image';
import s from './styles.module.css';
import { KeyboardEvent, useState } from 'react';
import { useCityContext } from '@/shared/hooks/useCityContext';
export const Input = () => {
  const [value, setValue] = useState('');
  const {searchCity} = useCityContext()
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && value.length > 0) searchCity(value);
  }
  const handleButtonClick = () => {
    value.length > 0 ? searchCity(value) : null;
  }
  return (
    <div className={s.searchInputWrapper}>
      <button onClick={handleButtonClick}>
        <Image src="/search-icon.svg" width={24} height={24} alt="search-icon" />
      </button>
      <input
        autoComplete="on"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="search"
        className={s.searchInput}
        type="text"
        placeholder="Search City"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
