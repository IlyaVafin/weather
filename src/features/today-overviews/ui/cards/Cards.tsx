import { ITodayWeather } from '@/shared/types/types';
import s from './Cards.module.css';
import { Humidity } from './Humidity';
import { Pressure } from './Pressure';
import { Visibility } from './Visibility';
import { WindStatus } from './WindStatus';
export const Cards = ({ data }: { data: ITodayWeather }) => {
  return (
    <>
    <div className={s.cards}>
      <WindStatus data={data} />
      <Pressure data={data} />
      <Humidity data={data} />
      <Visibility data={data} />
    </div>
    </>
  );
};
