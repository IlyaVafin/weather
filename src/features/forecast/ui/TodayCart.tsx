'use client'
import { ITodayWeather } from '@/shared/types/types';
import { getWeekDay } from '../model/getWeekDay';
import s from './TodayCart.module.css'
import { useGetTime } from '../model/useGetTime';
export default function TodayCart({ data }: { data: ITodayWeather }) {
	
	const {hours, minutes, currentTime} = useGetTime()
  if (!data.main) return <p>City not found</p>;
  return (
    <>
      <div>
				<div className={s.todayCartTop}>
						<p>{getWeekDay(currentTime.getDay())}</p>
						<p>{hours}:{minutes}</p>
				</div>
			</div>
    </>
  );
}
