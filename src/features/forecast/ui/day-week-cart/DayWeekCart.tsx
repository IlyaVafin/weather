import React from 'react'
import { getWeekDay } from '../../model/getWeekDay'
import { useGetTime } from '../../model/useGetTime'

const DayWeekCart = () => {
	const {currentTime} = useGetTime()
	return (
		<>
		<div className="">
			<p>{getWeekDay(currentTime.getDay())}</p>
		</div>
		</>
	)
}

export default DayWeekCart