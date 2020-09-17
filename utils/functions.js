export const getSortOrder = (prop) => {
  return (a, b) => {
    if (a[prop] > b[prop]) {
      return -1;
    } else if (a[prop] < b[prop]) {
      return 1;
    }
    return 0;
  };
};
