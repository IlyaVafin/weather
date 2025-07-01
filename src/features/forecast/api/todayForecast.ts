import { ITodayWeather } from "@/shared/types/types";

export const getTodayWeather = async (city: string): Promise<ITodayWeather | undefined> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
    );
      if(!response.ok) {
      return response.json().then(data => data.message);
    }
    return await response.json();
  } catch (e) {
    console.error('ERROR', e); 
  }
};
