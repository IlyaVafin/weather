import { useGetTodayWeather } from '@/shared/hooks/useGetTodayWeather';

export const useGetMultipleTodayWeather = (cities: string[]) => {
  return cities.map((city) => ({
    city,
    ...useGetTodayWeather(city),
  }));
};
