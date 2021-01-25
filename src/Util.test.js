import * as Util from "./utils";

test("sum", () => {
  expect(Util.sum([1, 2, 3])).toBe(6);
});

test("mean", () => {
  expect(Util.mean([1, 2, 3])).toBe(2);
});

test("q25", () => {
  expect(Util.q25([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(3.25);
});
test("q50", () => {
  expect(Util.q50([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
});
test("q75", () => {
  expect(Util.q75([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(7.75);
});
test("quantile", () => {
  expect(Util.quantile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 105)).toBe(undefined);
});

test("getColor", () => {
  expect(
    Util.getColor(2, [2, 3, 4, 5, 8, 11, 17, 24, 31, 84, "alle"], Util.colors)
  ).toBe("#1f77b4");
  expect(
    Util.getColor(84, [2, 3, 4, 5, 8, 11, 17, 24, 31, 84, "alle"], Util.colors)
  ).toBe("#17becf");
});

const getValueScaleData = [
  11,
  2,
  3,
  2,
  2,
  2,
  3,
  3,
  3,
  2,
  3,
  4,
  3,
  2,
  4,
  2,
  2,
  2,
  6,
  2,
  8,
  17,
  8,
  4,
  4,
  2,
  84,
  2,
  10,
  4,
  11,
  2,
  13,
  15,
  5,
  24,
  4,
  14,
  24,
  2,
  4,
  2,
  5,
  31,
  2,
  4,
  2,
  8,
  3,
  5,
  10,
  5,
  3,
  5,
  3,
];
const getValueScaleResult = [2, 3, 4, 5, 8, 11, 17, 24, 31, 84, "alle"];

const randomData = [
  {
    rotordurchmesser: 103,
    nabenhoehe: 98,
    anzahl: 1,
  },
  {
    rotordurchmesser: 71,
    nabenhoehe: 98.2,
    anzahl: 1,
  },
  {
    rotordurchmesser: 148,
    nabenhoehe: 106.6,
    anzahl: 1,
  },
  {
    rotordurchmesser: 158,
    nabenhoehe: 120.9,
    anzahl: 2,
  },
  {
    rotordurchmesser: 149,
    nabenhoehe: 125,
    anzahl: 3,
  },
  {
    rotordurchmesser: 149.1,
    nabenhoehe: 125,
    anzahl: 2,
  },
  {
    rotordurchmesser: 140,
    nabenhoehe: 130,
    anzahl: 1,
  },
  {
    rotordurchmesser: 138.25,
    nabenhoehe: 130,
    anzahl: 2,
  },
  {
    rotordurchmesser: 138,
    nabenhoehe: 130.5,
    anzahl: 3,
  },
  {
    rotordurchmesser: 137,
    nabenhoehe: 131.4,
    anzahl: 6,
  },
  {
    rotordurchmesser: 136,
    nabenhoehe: 132,
    anzahl: 13,
  },
  {
    rotordurchmesser: 147,
    nabenhoehe: 132.5,
    anzahl: 1,
  },
  {
    rotordurchmesser: 130,
    nabenhoehe: 134,
    anzahl: 3,
  },
  {
    rotordurchmesser: 127,
    nabenhoehe: 135,
    anzahl: 1,
  },
  {
    rotordurchmesser: 126,
    nabenhoehe: 137,
    anzahl: 16,
  },
  {
    rotordurchmesser: 117,
    nabenhoehe: 141.5,
    anzahl: 13,
  },
  {
    rotordurchmesser: 150,
    nabenhoehe: 145,
    anzahl: 6,
  },
  {
    rotordurchmesser: 115,
    nabenhoehe: 149,
    anzahl: 1,
  },
  {
    rotordurchmesser: 136,
    nabenhoehe: 149,
    anzahl: 7,
  },
  {
    rotordurchmesser: 126,
    nabenhoehe: 149,
    anzahl: 5,
  },
  {
    rotordurchmesser: 158,
    nabenhoehe: 150,
    anzahl: 2,
  },
  {
    rotordurchmesser: 141,
    nabenhoehe: 159,
    anzahl: 11,
  },
  {
    rotordurchmesser: 138.59,
    nabenhoehe: 159.98,
    anzahl: 1,
  },
  {
    rotordurchmesser: 138,
    nabenhoehe: 160,
    anzahl: 6,
  },
  {
    rotordurchmesser: 138.6,
    nabenhoehe: 160,
    anzahl: 2,
  },
  {
    rotordurchmesser: 158,
    nabenhoehe: 161,
    anzahl: 2,
  },
  {
    rotordurchmesser: 149,
    nabenhoehe: 164,
    anzahl: 7,
  },
  {
    rotordurchmesser: 162,
    nabenhoehe: 164,
    anzahl: 4,
  },
  {
    rotordurchmesser: 149.1,
    nabenhoehe: 164,
    anzahl: 3,
  },
  {
    rotordurchmesser: 137,
    nabenhoehe: 164.5,
    anzahl: 5,
  },
  {
    rotordurchmesser: 148,
    nabenhoehe: 165,
    anzahl: 1,
  },
  {
    rotordurchmesser: 140,
    nabenhoehe: 165,
    anzahl: 1,
  },
  {
    rotordurchmesser: 136,
    nabenhoehe: 166,
    anzahl: 6,
  },
  {
    rotordurchmesser: 162,
    nabenhoehe: 166,
    anzahl: 2,
  },
  {
    rotordurchmesser: 150,
    nabenhoehe: 166,
    anzahl: 11,
  },
  {
    rotordurchmesser: 149,
    nabenhoehe: 167,
    anzahl: 3,
  },
  {
    rotordurchmesser: 149.1,
    nabenhoehe: 167,
    anzahl: 4,
  },
];

test("getValueScale", () => {
  expect(Util.getValueScale([])).toBe(null);
  expect(Util.getValueScale([2])).toStrictEqual([2]);
  expect(
    Util.getValueScale([
      1,
      1,
      2,
      2,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      15,
      16,
      17,
      18,
      19,
    ])
  ).toStrictEqual([1, 2, 5, 7, 9, 11, 13, 16, 18, 19, "alle"]);
  expect(
    Util.getValueScale([
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      13,
      124,
      15,
      124,
      123,
      123,
      123,
      123,
      123,
      123,
      123,
      123,
      24,
      2,
    ])
  ).toStrictEqual([2, 5, 7, 8, 9, 13, 15, 24, 123, 124, "alle"]);

  expect(Util.getValueScale(randomData.map((e) => e.anzahl))).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    11,
    13,
    16,
    "alle",
  ]);
});

const wkas = [
  {
    id: 106528400006001,
    betreiber:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    bestands_nr: 10652840000,
    bestands_name:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    ort: "Oranienburg",
    ortsteil: "Zehlendorf",
    latitude: 52.7896428,
    longitude: 13.42037676,
    postleitzahl: "16515",
    status: "InBetrieb",
    leistung: 0.66,
    inbetriebname_datum: "2003-02-07",
    genehmigt_datum: "2002-06-24",
    altanlagen_anzeige_datum: null,
    rotor_durchmesser: 47,
    nabenhoehe: 76,
  },
  {
    id: 106528400006002,
    betreiber:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    bestands_nr: 10652840000,
    bestands_name:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    ort: "Oranienburg",
    ortsteil: "Zehlendorf",
    latitude: 52.78830252,
    longitude: 13.4223532,
    postleitzahl: "16515",
    status: "InBetrieb",
    leistung: 0.66,
    inbetriebname_datum: "2003-02-07",
    genehmigt_datum: "2002-06-24",
    altanlagen_anzeige_datum: null,
    rotor_durchmesser: 47,
    nabenhoehe: 76,
  },
  {
    id: 106528400006003,
    betreiber:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    bestands_nr: 10652840000,
    bestands_name:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    ort: "Oranienburg",
    ortsteil: "Zehlendorf",
    latitude: 52.78903949,
    longitude: 13.42504046,
    postleitzahl: "16515",
    status: "InBetrieb",
    leistung: 0.66,
    inbetriebname_datum: "2003-02-07",
    genehmigt_datum: "2002-06-24",
    altanlagen_anzeige_datum: null,
    rotor_durchmesser: 47,
    nabenhoehe: 76,
  },
  {
    id: 106529200004001,
    betreiber: "Windpark Kronsberge GmbH & Co. KG",
    bestands_nr: 10652920000,
    bestands_name: "EnergieKontor Umwelt GmbH",
    ort: "Gransee",
    ortsteil: "Altlüdersdorf",
    latitude: 53.04317526,
    longitude: 13.21092939,
    postleitzahl: "16775",
    status: "InBetrieb",
    leistung: 1.5,
    inbetriebname_datum: "2002-12-20",
    genehmigt_datum: "2002-12-20",
    altanlagen_anzeige_datum: null,
    rotor_durchmesser: 77,
    nabenhoehe: 80,
  },
  {
    id: 106529200004002,
    betreiber: "Windpark Kronsberge GmbH & Co. KG",
    bestands_nr: 10652920000,
    bestands_name: "EnergieKontor Umwelt GmbH",
    ort: "Gransee",
    ortsteil: "Altlüdersdorf",
    latitude: 53.04584789,
    longitude: 13.21827802,
    postleitzahl: "16775",
    status: "InBetrieb",
    leistung: 1.5,
    inbetriebname_datum: "2002-12-20",
    genehmigt_datum: "2002-12-20",
    altanlagen_anzeige_datum: null,
    rotor_durchmesser: 77,
    nabenhoehe: 80,
  },
];
const filters = [
  {
    status: "InBetrieb",
    start: "2019-10-10",
    end: "2018-10-10",
    ort: "",
  },
  {
    status: "Genehmigt",
    start: "2019-10-10",
    end: "2018-10-10",
    ort: "",
  },
  {
    status: "Genehmigt",
    start: "2019-10-10",
    end: "2018-10-10",
    ort: "Berlin",
  },
  {
    status: "Genehmigt und InBetrieb",
    start: "2000-10-10",
    end: "2010-10-10",
    ort: "",
  },
  {
    status: "dfghj",
    start: "2000-10-10",
    end: "2010-10-10",
    ort: "",
  },
];
const wkasResult = [
  {
    altanlagen_anzeige_datum: null,
    bestands_name:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    bestands_nr: 10652840000,
    betreiber:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    genehmigt_datum: "2002-06-24",
    id: 106528400006001,
    inbetriebname_datum: "2003-02-07",
    latitude: 52.7896428,
    leistung: 0.66,
    longitude: 13.42037676,
    nabenhoehe: 76,
    ort: "Oranienburg",
    ortsteil: "Zehlendorf",
    postleitzahl: "16515",
    rotor_durchmesser: 47,
    status: "InBetrieb",
  },
  {
    altanlagen_anzeige_datum: null,
    bestands_name:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    bestands_nr: 10652840000,
    betreiber:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    genehmigt_datum: "2002-06-24",
    id: 106528400006002,
    inbetriebname_datum: "2003-02-07",
    latitude: 52.78830252,
    leistung: 0.66,
    longitude: 13.4223532,
    nabenhoehe: 76,
    ort: "Oranienburg",
    ortsteil: "Zehlendorf",
    postleitzahl: "16515",
    rotor_durchmesser: 47,
    status: "InBetrieb",
  },
  {
    altanlagen_anzeige_datum: null,
    bestands_name:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    bestands_nr: 10652840000,
    betreiber:
      "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark  Oyten 3 KG",
    genehmigt_datum: "2002-06-24",
    id: 106528400006003,
    inbetriebname_datum: "2003-02-07",
    latitude: 52.78903949,
    leistung: 0.66,
    longitude: 13.42504046,
    nabenhoehe: 76,
    ort: "Oranienburg",
    ortsteil: "Zehlendorf",
    postleitzahl: "16515",
    rotor_durchmesser: 47,
    status: "InBetrieb",
  },
  {
    altanlagen_anzeige_datum: null,
    bestands_name: "EnergieKontor Umwelt GmbH",
    bestands_nr: 10652920000,
    betreiber: "Windpark Kronsberge GmbH & Co. KG",
    genehmigt_datum: "2002-12-20",
    id: 106529200004001,
    inbetriebname_datum: "2002-12-20",
    latitude: 53.04317526,
    leistung: 1.5,
    longitude: 13.21092939,
    nabenhoehe: 80,
    ort: "Gransee",
    ortsteil: "Altlüdersdorf",
    postleitzahl: "16775",
    rotor_durchmesser: 77,
    status: "InBetrieb",
  },
  {
    altanlagen_anzeige_datum: null,
    bestands_name: "EnergieKontor Umwelt GmbH",
    bestands_nr: 10652920000,
    betreiber: "Windpark Kronsberge GmbH & Co. KG",
    genehmigt_datum: "2002-12-20",
    id: 106529200004002,
    inbetriebname_datum: "2002-12-20",
    latitude: 53.04584789,
    leistung: 1.5,
    longitude: 13.21827802,
    nabenhoehe: 80,
    ort: "Gransee",
    ortsteil: "Altlüdersdorf",
    postleitzahl: "16775",
    rotor_durchmesser: 77,
    status: "InBetrieb",
  },
];

test("getWkas", () => {
  expect(Util.getWkas(wkas, filters[0])).toStrictEqual([]);
  expect(Util.getWkas(wkas, filters[1])).toStrictEqual([]);
  expect(Util.getWkas(wkas, filters[2])).toStrictEqual([]);
  expect(Util.getWkas(wkas, filters[3])).toStrictEqual(wkasResult);
  expect(Util.getWkas(wkas, filters[4])).toStrictEqual([]);
});

const baudauer = [
  {
    id: 306421230000001,
    tage: -3177,
    genehmigt: "2010-07-08",
    inbetrieb: "2001-10-26",
  },
  {
    id: 406655800000001,
    tage: -3003,
    genehmigt: "2007-11-29",
    inbetrieb: "1999-09-09",
  },
  {
    id: 207338000000014,
    tage: -1063,
    genehmigt: "2001-11-14",
    inbetrieb: "1998-12-17",
  },
  {
    id: 207338000000002,
    tage: -1063,
    genehmigt: "2001-11-14",
    inbetrieb: "1998-12-17",
  },
  {
    id: 207338000000013,
    tage: -1063,
    genehmigt: "2001-11-14",
    inbetrieb: "1998-12-17",
  },
];
const baudauerResult = [
  { avg: -1063, genehmigt: "2001-11-14", count: 3, sum: -1063 * 3 },
  { avg: -3003, genehmigt: "2007-11-29", count: 1, sum: -3003 },
  { avg: -3177, genehmigt: "2010-07-08", count: 1, sum: -3177 },
];

test("getBaudauerProZeitGraph", () => {
  expect(Util.getBaudauerProZeitGraph(baudauer)).toStrictEqual(baudauerResult);
  expect(Util.getBaudauerProZeitGraph([])).toBe(null);
});

test("validDay", () => {
  expect(Util.validDay("2010-07-11", "2005-01-01", "2020-11-11")).toBe(true);
  expect(Util.validDay("2030-07-11", "2005-01-01", "2020-11-11")).toBe(false);
  expect(Util.validDay("2000-07-11", "2005-01-01", "2020-11-11")).toBe(false);
});
