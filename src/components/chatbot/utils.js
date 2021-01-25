export const getLeistung = (wkas, option) => {
  if (wkas?.length === 0) {
    return null;
  }
  let minPointer = 0;
  let maxPointer = 0;
  let min = wkas[0].leistung;
  let max = wkas[0].leistung;

  for (let i = 0; i < wkas.length; i++) {
    if (wkas[i].leistung < min) {
      min = wkas[i].leistung;
      minPointer = i;
    }
    if (wkas[i].leistung > max) {
      max = wkas[i].leistung;
      maxPointer = i;
    }
  }
  if (option === "min") {
    return wkas[minPointer];
  } else {
    return wkas[maxPointer];
  }
};

export const getWkaById = (id, wkas) => {
  for (let i = 0; i < wkas.length; ++i) {
    if (wkas[i].id === id) {
      return wkas[i];
    }
  }
  return null;
};

export const getBaudauer = (wkas, baudauern, option) => {
  if (baudauern?.length === 0) {
    return null;
  }
  let baudauer = baudauern[0];
  for (let i = 0; i < baudauern.length; ++i) {
    if (
      (option === "min" && baudauern[i].tage < baudauer.tage) ||
      (option === "max" && baudauern[i].tage > baudauer.tage)
    ) {
      baudauer = baudauern[i];
    }
  }
  let wka = getWkaById(baudauer.id, wkas);
  if (wka) {
    return { ...wka, baudauer: baudauer.tage };
  }
  return null;
};

export const displayStringDate = (date) => {
  return `${date.slice(8, 10)}-${date.slice(5, 7)}-${date.slice(0, 4)}`;
};
