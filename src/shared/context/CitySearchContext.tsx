'use client';
import { ReactNode, createContext, useCallback, useState } from 'react';

interface ISearchCityContext {
  city: string;
  searchCity: (city: string) => void;
}

export const CityContext = createContext<ISearchCityContext | undefined>(undefined);

export const CityProvider = ({ children, initialCity }: { children: ReactNode, initialCity: string }) => {
  const [city, setCity] = useState(initialCity);
  const searchCity = useCallback((newCity: string) => {
    setCity(newCity);
  }, []);

  return <CityContext.Provider value={{ city, searchCity }}>{children}</CityContext.Provider>;
};
