export const getSunriseSunset = (time: number, timezone: number) => {
  const timeCitySunriseSunset = new Date((time + timezone) * 1000);
  return timeCitySunriseSunset.toISOString().substring(11, 16);
};
