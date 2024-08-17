export const ifEqualDate = itemDate => {
  const date = new Date();
  const format = new Date(itemDate);

  const formatDate = fullDate => {
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1;
    const day = fullDate.getDate();

    return `${year}/${month}/${day}`;
  };
  return formatDate(date) === formatDate(format);
};
