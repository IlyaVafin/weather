import React, { useState } from 'react';
import s from './ForecastTop.module.css';
import { ToggleButtons } from './ToggleButtons';
import { ToggleCategories } from './ToggleCategories';
export const ForecastTop = ({
  setCategory,
  category,
}: {
  setCategory: (category: string) => void;
  category: string;
}) => {
  return (
    <div className={s.forecastTop}>
      <ToggleCategories category={category} setCategory={setCategory} />
      <div className={s.forecastAir}>
        <ToggleButtons />
        <span className={s.chanceOfRainTitle}>Chance Of Rain</span>
      </div>
    </div>
  );
};

export default ForecastTop;
