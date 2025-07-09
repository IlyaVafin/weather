import { ITodayWeather } from '@/shared/types/types';
import s from './Cards.module.css';
import { Humidity } from './cards/Humidity';
import { Pressure } from './cards/Pressure';
import { Visibility } from './cards/Visibility';
import { WindStatus } from './cards/WindStatus';
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
