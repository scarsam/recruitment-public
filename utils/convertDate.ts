export const convertDate = (date) => {
  const unixDate = date * 1000;
  return new Date(unixDate).toDateString();
};
