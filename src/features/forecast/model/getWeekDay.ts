export const getWeekDay = (numberOfWeekDay?: number, UNIX_timestamp?: number) => {
  const dateWeeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (numberOfWeekDay) {
    return dateWeeks[numberOfWeekDay];
  }
  if (UNIX_timestamp) {
    const normalData = new Date(UNIX_timestamp * 1000);
    const weekDay = normalData.getDay();
    return dateWeeks[weekDay].slice(0, 3).toUpperCase();
  }
  return null;
};
