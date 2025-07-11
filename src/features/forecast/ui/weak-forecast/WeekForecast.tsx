import { useGetWeekForecast } from '@/shared/hooks/useGetWeekForecast';
import { useCityContext } from '@/shared/hooks/useCityContext';
import TodayCart from '../today-cart/TodayCart';
import { getWeekDay } from '../../model/getWeekDay';
import Image from 'next/image';
import { getWeather } from '../../model/getWeather';
import s from './WeekForecast.module.css';
export const WeekForcast = () => {
  const { city } = useCityContext();
  const { data } = useGetWeekForecast(city);  
  if (!data) return;
  const dailyForecast = data.list.filter((item) => {
    return item.dt_txt.includes('12:00:00');
  });
  return (
    <section className={s.WeekForcast}>
      <TodayCart />
      <div>
        <ul className={s.weatherList}>
          {dailyForecast.slice(1).map((item) => (
            <li key={item.dt_txt}>
              <p className={s.weatherListDay}>{getWeekDay(undefined, item.dt)}</p>
              <Image width={50} height={50} src={getWeather(item.weather[0].main)} alt="" />
              <p className={s.weatherListTemp}>{Math.floor(item.main.temp)}°</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WeekForcast;
