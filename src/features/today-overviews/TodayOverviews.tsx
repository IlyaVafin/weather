import { Cards } from './ui/cards/Cards';
import { useCityContext } from '@/shared/hooks/useCityContext';
import { useGetTodayWeather } from '@/shared/hooks/useGetTodayWeather';
import { TodayOverviewsHeader } from './ui/today-header/TodayOverviewsHeader';
import { ExploreWind } from './ui/explore-wind/ExploreWind';
import { OtherCities } from '../other-cities/OtherCities';

export const TodayOverviews = () => {
  const { city } = useCityContext();
  const { data, isError } = useGetTodayWeather(city);
  if (isError) return <p>City not found</p>;
  if (!data) return;
  return (
    <>
      <TodayOverviewsHeader />
      <div style={{ display: 'flex', gap: '37px' }}>
        {data.cod == 200 ? (
          <Cards data={data} />
        ) : (
          <div
            style={{
              maxWidth: '620px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span>City not found</span>
          </div>
        )}
        <ExploreWind />
        <OtherCities />
      </div>
    </>
  );
};
