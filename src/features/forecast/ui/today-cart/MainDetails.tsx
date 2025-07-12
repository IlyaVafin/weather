import { ITodayWeather } from '@/shared/types/types';
import { getWindDirections } from '../../model/getWindDirections';
import s from './TodayCart.module.css';
export const MainDetails = ({ data }: { data: ITodayWeather }) => {
  return (
    <ul className={s.mainDetails}>
      <li>
        Real feel <span className={s.value}>{Math.floor(data.main.feels_like)}°</span>
      </li>
      <li>
        Wind {getWindDirections(data.wind.deg)}.{' '}
        <span className={s.value}>
          {Math.round(data.wind.speed)}-{Math.round(data.wind.speed) + 1}
          km/h
        </span>{' '}
      </li>
      <li>
        Pressure <span className={s.value}>{data.main.pressure}MB</span>
      </li>
      <li>
        Humidity <span className={s.value}>{data.main.humidity}%</span>
      </li>
    </ul>
  );
};
