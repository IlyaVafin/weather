export const getWeather = (weather: string) => {
  return weather === 'Clouds'
    ? '/cloudy.svg'
    : weather === 'Rain'
      ? '/Rain.svg'
      : weather === 'Clear'
        ? 'clearWeather.svg'
        : '';
};
