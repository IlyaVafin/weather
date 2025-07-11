import { Cards } from './ui/cards/Cards';
import { useCityContext } from '@/shared/hooks/useCityContext';
import { useGetTodayWeather } from '@/shared/hooks/useGetTodayWeather';
import { TodayOverviewsHeader } from './ui/today-header/TodayOverviewsHeader';
import { ExploreWind } from './ui/explore-wind/ExploreWind';

export const TodayOverviews = () => {
  const { city } = useCityContext();
  const { data } = useGetTodayWeather(city);
  return (
    <>
      <TodayOverviewsHeader />
      <div className="" style={{display: 'flex'}}>
        {data  && <Cards data={data} />}
        <ExploreWind/>
        </div>
    </>
  );
};
