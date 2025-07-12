import { useCityContext } from '@/shared/hooks/useCityContext';
import { useGetWeekForecast } from '@/shared/hooks/useGetWeekForecast';
import Image from 'next/image';
import { useGetWeather } from '../../../../shared/hooks/useGetWeather';
import { getWeekDay } from '../../model/getWeekDay';
import TodayCart from '../today-cart/TodayCart';
import s from './WeekForecast.module.css';
export const WeekForcast = () => {
  const { city } = useCityContext();
  const { data, isLoading, isError } = useGetWeekForecast(city);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>City not found</p>;
  if (!data) return;
  const dailyForecast =
    data?.list?.filter((item) => {
      return item.dt_txt.includes('12:00:00');
    }) ?? 0;
  return (
    <section className={s.WeekForcast}>
      <TodayCart />
      <div>
        <ul className={s.weatherList}>
          { !!dailyForecast &&
            dailyForecast.slice(1).map((item) => (
              <li key={item.dt_txt}>
                <p className={s.weatherListDay}>{getWeekDay(undefined, item.dt)}</p>
                <Image width={50} height={50} src={useGetWeather(item.weather[0].main)} alt="" />
                <p className={s.weatherListTemp}>{Math.floor(item.main.temp)}°</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default WeekForcast;
