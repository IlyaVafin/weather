import { useQuery } from '@tanstack/react-query';
import { getTodayWeather } from '@/shared/api/todayForecast';

export const useGetTodayWeather = (city: string) => {
  return useQuery({
    queryKey: ['today-weather', city],
    queryFn: () => getTodayWeather(city),
    staleTime: 1000 * 60 * 10,
  });
};
