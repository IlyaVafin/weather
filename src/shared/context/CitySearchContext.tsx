'use client'
import { ReactNode, createContext, useCallback, useState } from "react";

interface ISearchCityContext {
	city: string
	searchCity: (city: string) => void 
}

export const CityContext = createContext<ISearchCityContext | undefined>(undefined)


export const CityProvider = ({children}:{children: ReactNode}) => {
	const [city, setCity] = useState('Moscow')
	const searchCity = useCallback((newCity: string) => {
		setCity(newCity);
	}, []);

	return (
		<CityContext.Provider value = {{city, searchCity}}>{children}</CityContext.Provider>
	)
}