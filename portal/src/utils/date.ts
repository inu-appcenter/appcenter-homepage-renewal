import dayjs from 'dayjs';

export const getCurrentGeneration = () => {
  const startYear = 2008;
  const currentYear = dayjs().year();
  const currentMonth = dayjs().month();
  return (
    currentYear -
    startYear -
    (currentMonth <= 3 ? 0.5 : 0) +
    (currentMonth > 9 ? 0.5 : 0)
  );
};
