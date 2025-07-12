import Image from 'next/image';
import { useGetMultipleTodayWeather } from './model/useGetMultipleTodayWeather';
import s from './OtherCities.module.css';
import { useGetWeather } from '@/shared/hooks/useGetWeather';
const cities = ['Beijing', 'California', 'London', 'Charlottetown'];

export const OtherCities = () => {
  const weatherData = useGetMultipleTodayWeather(cities);
  return (
    <div className={s.OtherCitiesWrap}>
      {weatherData.map(
        (item) =>
          item.data && (
            <article key={item.city} className={s.OtherCities}>
              <div className={s.OtherCitiesText}>
                <span>{item.data.sys.country}</span>
                <h5>{item.city}</h5>
                <p>{item.data.weather[0].main}</p>
              </div>
              <Image width={50} height={50} src={useGetWeather(item.data.weather[0].main)} alt="weather-icon" />
            </article>
          )
      )}
    </div>
  );
};
