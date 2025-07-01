import { useQuery } from '@tanstack/react-query';
import { getTodayWeather } from '@/features/forecast/api/todayForecast';

export const useGetTodayWeather = (city: string) => {
  return useQuery({
    queryKey: ['today-weather', city],
    queryFn: () => getTodayWeather(city),
    enabled: !!city,
  });
};
