import { FC, useState } from 'react';
import s from './ForecastTop.module.css';


export const ToggleButtons: FC = () => {
  const selectedButtons = ['Forecast', 'Air Quality'];
  const [selected, setSelected] = useState('Forecast');
  return (
    <div className={s.forecastAirBtns}>
      {selectedButtons.map((item) => (
        <button
          key={item}
          className={item === selected ? s.activeBtn : s.inactiveBtn}
          onClick={() => setSelected(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
