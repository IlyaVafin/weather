'use client';
import { WeekForcast } from './ui/weak-forecast/WeekForecast';
import TodayCart from './ui/today-cart/TodayCart';
import { useState } from 'react';
import ForecastTop from './ui/today-cart/ForecastTop';
export const ForecastWrapper = () => {
	const [category, setCategory] = useState('Next 4 days');
	return (
		<>
			<ForecastTop category={category} setCategory={setCategory} />
			{category === 'Today' && <TodayCart/>}
			{category === 'Next 4 days' && <WeekForcast />}
		</>
	);
};