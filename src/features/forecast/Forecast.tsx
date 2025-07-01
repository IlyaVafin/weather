'use client';
import { useCityContext } from '@/shared/hooks/useCityContext';
import { useGetTodayWeather } from '@/shared/hooks/useGetTodayWeather';
import TodayCart from './ui/TodayCart';
import DayWeekCart from './ui/day-week-cart/DayWeekCart';

export const Forecast = () => {
  const { city } = useCityContext();
  const { data } = useGetTodayWeather(city);
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <TodayCart data={data} />
      <DayWeekCart />
    </>
  );
};
