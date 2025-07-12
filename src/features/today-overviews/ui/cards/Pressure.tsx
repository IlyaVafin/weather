import { ITodayWeather } from '@/shared/types/types';
import s from './Cards.module.css';
import { PieChart, Pie } from 'recharts';
import { memo, useMemo } from 'react';
const maxPressure = 1200;
 const PressureComponent = ({ data }: { data: ITodayWeather }) => {
  const pressure = useMemo(() => {
    return [
      {
        name: 'currentPressure',
        value: data.main.pressure,
      },
      {
        name: 'Remaining',
        value: maxPressure - data.main.pressure,
        fill: '#BAD4EB',
      },
    ];
  }, [data.main.pressure]);
  return (
    <div className={s.overviewCard}>
      <p>Pressure</p>
      <PieChart width={230} height={100} className={s.pie}>
        <Pie
          data={pressure}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx="60%"
          cy="90%"
          innerRadius={55}
          outerRadius={65}
          stroke="none"
        />
        <text x={70} y={97} textAnchor="middle" dominantBaseline="middle" fill="#BAD4EB" fontSize={12}>
          950 MB
        </text>
        <text x={190} y={97} textAnchor="middle" dominantBaseline="middle" fill="#BAD4EB" fontSize={12}>
          {maxPressure} MB
        </text>
      </PieChart>
      <p className={s.pressureValue} style={{ textAlign: 'center' }}>
        <b>{pressure[0].value}</b> MB
      </p>
    </div>
  );
};

export const Pressure = memo(PressureComponent)
Pressure.displayName = 'Pressure'
