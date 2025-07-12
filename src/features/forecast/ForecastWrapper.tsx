'use client';
import { WeekForcast } from './ui/weak-forecast/WeekForecast';
import TodayCart from './ui/today-cart/TodayCart';
import { useState } from 'react';
import ForecastTop from './ui/forecast-top/ForecastTop';
import { TodayOverviews } from '../today-overviews/TodayOverviews';

export const ForecastWrapper = () => {
  const [category, setCategory] = useState('Next 4 days');
  return (
    <>
      <ForecastTop category={category} setCategory={setCategory} />
      {category === 'Today' && <TodayCart />}
      {category === 'Next 4 days' && <WeekForcast />}
      <TodayOverviews />
    </>
  );
};
