'use client';
import React, { useState } from 'react';
import s from './TodayCart.module.css';
export const ForecastTop = ({
  setCategory,
  category,
}: {
  setCategory: (category: string) => void;
  category: string;
}) => {
  const dateForecast = ['Today', 'Tomorrow', 'Next 4 days'];
  const selectedButtons = ['Forecast', 'Air Quality'];
  const [selected, setSelected] = useState('Forecast');
  return (
    <div className={s.forecastTop}>
      <ul className={s.forecastCategories}>
        {dateForecast.map((item) => (
          <li key={item}>
            <button
              key={item}
              style={{ color: category === item ? '#fff' : '#818085' }}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className={s.forecastAir}>
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
        <span className={s.chanceOfRainTitle}>Chance Of Rain</span>
      </div>
    </div>
  );
};

export default ForecastTop;
