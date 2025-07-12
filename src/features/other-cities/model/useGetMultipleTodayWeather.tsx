import { useQueries } from '@tanstack/react-query';
import { getTodayWeather } from '@/shared/api/todayForecast';

export const useGetMultipleTodayWeather = (cities: string[]) => {
  const queries = useQueries({
    queries: cities.map((city) => ({
      queryKey: ['todayWeather', city],
      queryFn: () => getTodayWeather(city),
      enabled: !!city,
    })),
  });

  return queries;
};
