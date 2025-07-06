import { useQuery } from '@tanstack/react-query';
import { weekForecast } from '@/features/forecast/api/weekForecast';

export const useGetWeekForecast = (city: string) => {
  return useQuery({
    queryKey: ['weekly-weather', city],
    queryFn: () => weekForecast(city),
    staleTime: 1000 * 60 * 10,
  });
};
