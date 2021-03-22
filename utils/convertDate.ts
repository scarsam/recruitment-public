export const convertDate = (date: number) => {
  const unixDate = date * 1000;
  return new Date(unixDate).toDateString();
};
