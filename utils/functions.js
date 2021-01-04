export const getSortOrder = (prop1, prop2) => {
  if (!prop2) {
    return (a, b) => {
      if (a[prop1] > b[prop1]) {
        return -1;
      } else if (a[prop1] < b[prop1]) {
        return 1;
      }
      return 0;
    };
  }

  return (a, b) => {
    if (a[prop1][prop2] > b[prop1][prop2]) {
      return -1;
    } else if (a[prop1][prop2] < b[prop1][prop2]) {
      return 1;
    }
    return 0;
  };
};
