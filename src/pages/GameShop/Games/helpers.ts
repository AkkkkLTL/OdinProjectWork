const currentDate = new Date();
const formatDate = (date: Date) => date.toISOString().replace(/T.*/,'');

export const previousYear = currentDate.getFullYear() - 1;

export const getLast30Days = () => {
  const dateCopy = new Date(currentDate.getTime());
  const pastDay = new Date(
    dateCopy.getFullYear(),
    dateCopy.getMonth(),
    dateCopy.getDate() - 30,
  );
  return `${formatDate(pastDay)},${formatDate(currentDate)}`
}