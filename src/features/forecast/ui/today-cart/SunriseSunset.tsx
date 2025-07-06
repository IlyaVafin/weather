import { ITodayWeather } from '@/shared/types/types';
import { getSunriseSunset } from '../../model/getSunriseSunset';
import s from './TodayCart.module.css';
export const SunriseSunset = ({ data }: { data: ITodayWeather }) => {
  return (
    <>
      <ul className={s.sunriseSunset}>
        <li>
          Sunrise <span className={s.value}>{getSunriseSunset(data.sys.sunrise, data.timezone)}</span>
        </li>
        <li>
          Sunset <span className={s.value}>{getSunriseSunset(data.sys.sunset, data.timezone)}</span>
        </li>
      </ul>
    </>
  );
};
