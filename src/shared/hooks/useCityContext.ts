'use client';
import { useContext } from 'react';
import { CityContext } from '../context/CitySearchContext';
export const useCityContext = () => {
  const ctx = useContext(CityContext);
  if (!ctx) throw new Error('Use context correctly!');
  return ctx;
};
