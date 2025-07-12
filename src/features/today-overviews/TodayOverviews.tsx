import { Cards } from './ui/cards/Cards';
import { useCityContext } from '@/shared/hooks/useCityContext';
import { useGetTodayWeather } from '@/shared/hooks/useGetTodayWeather';
import { TodayOverviewsHeader } from './ui/today-header/TodayOverviewsHeader';
import { ExploreWind } from './ui/explore-wind/ExploreWind';
import { OtherCities } from '../other-cities/OtherCities';

export const TodayOverviews = () => {
  const { city } = useCityContext();
  const { data } = useGetTodayWeather(city);
  return (
    <>
      <TodayOverviewsHeader />
      <div style={{display:'flex', gap: '37px'}}>
        {data  && <Cards data={data} />}
        <ExploreWind/>
        <OtherCities/>
        </div>
    </>
  );
};
