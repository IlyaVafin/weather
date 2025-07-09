export const calculateDevPoint = (temp: number, humidity: number) => {
  const a = 17.27;
  const b = 237.7;
  const gamma = (a * temp) / (b + temp) + Math.log(humidity / 100);
  const dewPoint = (b * gamma) / (a - gamma);

  return parseFloat(dewPoint.toFixed(0));
};
