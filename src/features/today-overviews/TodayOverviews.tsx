import { Cards } from './ui/Cards';
import { useCityContext } from '@/shared/hooks/useCityContext';
import { useGetTodayWeather } from '@/shared/hooks/useGetTodayWeather';
import { TodayOverviewsHeader } from './ui/today-header/TodayOverviewsHeader';

export const TodayOverviews = () => {
  const { city } = useCityContext();
  const { data } = useGetTodayWeather(city);
  return (
    <>
    <TodayOverviewsHeader/>
      {data !== undefined && <Cards data={data} />}
    </>
  );
};
