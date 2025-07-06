import { IWeekWeather } from "@/shared/types/types";

const getCoordByCity = async (city: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    if (!response.ok) throw new Error('Something wrong');
    const data = await response.json();
    return {
      lat: data[0].lat,
      lon: data[0].lon,
    };
  } catch (e) {
    console.error('Error in getCoordByCity', e);
    return null;
  }
};

export const weekForecast = async (city: string): Promise<IWeekWeather | undefined> => {
  try {
    const coord = await getCoordByCity(city);
    if (!coord) return;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error('Error in weekForecast', e);
    return undefined;
  }
};
