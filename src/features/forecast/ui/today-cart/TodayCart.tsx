import { useCityContext } from '@/shared/hooks/useCityContext';
import { useGetTodayWeather } from '@/shared/hooks/useGetTodayWeather';
import Image from 'next/image';

import { useGetTime } from '../../../../shared/hooks/useGetTime';
import { getWeekDay } from '../../model/getWeekDay';
import { MainDetails } from './MainDetails';
import { SunriseSunset } from './SunriseSunset';
import s from './TodayCart.module.css';
import { getWeather } from '@/shared/hooks/getWeather';
export default function TodayCart() {
  const { hours, minutes, currentTime } = useGetTime();
  const { city } = useCityContext();
  const { data } = useGetTodayWeather(city);
  if (!data) return <div>Loading...</div>;
  if (!data.main) return <p>City not found</p>;

  const weather = getWeather(data.weather[0].main);
  return (
    <section className={s.forecast}>
      <div className={s.todayWeatherCard}>
        <div className={s.todayCartTop}>
          <p>{getWeekDay(currentTime.getDay())}</p>
          <span>
            {hours}:{minutes}
          </span>
        </div>
        <div className={s.Degree}>
          <p>{Math.floor(data.main.temp)}°</p>
          <Image priority={false} src={weather} alt="icon-weather" width={66} height={53} />
        </div>
        <div className={s.weatherDetails}>
          <MainDetails data={data} />
          <SunriseSunset data={data} />
        </div>
      </div>
    </section>
  );
}
