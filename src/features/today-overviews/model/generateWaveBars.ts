export const generateWaveBars = (speed: number, count = 20) => {
  const mid = 10;

  return Array.from({ length: count }, (_, i) => {
    const distance = Math.abs(i - mid);
    const scale = 1 - distance / mid; // от 1 до 0
    const value = parseFloat((speed * scale).toFixed(2));

    return {
      time: i,
      value,
    };
  });
};
