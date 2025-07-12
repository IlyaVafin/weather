import { useGetTime } from '@/shared/hooks/useGetTime';
import { ITodayWeather } from '@/shared/types/types';
import { memo, useMemo } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { generateWaveBars } from '../../model/generateWaveBars';
import s from './Cards.module.css';
export const WindStatus = memo(({ data }: { data: ITodayWeather }) => {

  const speed =data?.wind?.speed ?? 0;
  const windSpeed = useMemo(() => {
    return generateWaveBars(speed);
  }, [speed]);
  const { hours, minutes } = useGetTime();

  return (
    <div className={s.overviewCard}>
      <p>Wind Status</p>
      <ResponsiveContainer className={s.graphic} width="100%" height={65}>
        <BarChart data={windSpeed} barCategoryGap={0}>
          <defs>
            <linearGradient id="windGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B0E0E6" stopOpacity={1} />
              <stop offset="100%" stopColor="#1A1B1D" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" hide />
          <YAxis hide domain={[0, Math.max(speed, 5)]} />
          <Bar dataKey="value" fill="url(#windGradient)" radius={[10, 10, 0, 0]} barSize={6} />
        </BarChart>
      </ResponsiveContainer>
      <div className={s.cardValues}>
        <span>
          <b>{speed.toFixed(1)}</b>km/h
        </span>
        <span>
          {hours}:{minutes}
        </span>
      </div>
    </div>
  );
})
