import { ITodayWeather } from '@/shared/types/types';
import Image from 'next/image';
import { memo } from 'react';
import { calculateDevPoint } from '../../model/calculateDevPoint';
import s from './Cards.module.css';
export const Humidity = memo(({ data }: { data: ITodayWeather }) => {
  const humidity = data.main.humidity;
  return (
    <div className={s.overviewCard}>
      <p>Humidity</p>
      <div className={s.humidityIcon}>
        <Image className={s.humidityIcon} src="/humidity.svg" alt="humidity-icon" width={90} height={90} />
      </div>
      <div className={s.devPoint}>
        <span>{humidity}%</span>
        <div className={s.devPointValues}>
          <Image src="/drops.svg" alt="drops" width={24} height={24} />
          <p>The dew point is {calculateDevPoint(data.main.temp, humidity)}° right now</p>
        </div>
      </div>
    </div>
  );
});
