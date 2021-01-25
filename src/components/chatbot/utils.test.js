import * as util from "./utils";

const wkas = [
  {
    id: "106556500004001",
    betreiber: "GREE Mildenberg GmbH & Co. KG",
    bestands_nr: 10655650000,
    bestands_name: "GREE Mildenberg GmbH & Co. KG",
    ort: "Zehdenick",
    ortsteil: "Mildenberg",
    latitude: 52.99898875,
    longitude: 13.294273,
    postleitzahl: "16775",
    status: "InBetrieb",
    leistung: 2.3,
    inbetriebname_datum: "2012-07-11",
    genehmigt_datum: "2011-02-07",
    altanlagen_anzeige_datum: null,
    rotor_durchmesser: 82,
    nabenhoehe: 108.4,
  },
  {
    id: "106556500004002",
    betreiber: "GREE Mildenberg GmbH & Co. KG",
    bestands_nr: 10655650000,
    bestands_name: "GREE Mildenberg GmbH & Co. KG",
    ort: "Zehdenick",
    ortsteil: "Mildenberg",
    latitude: 52.99368878,
    longitude: 13.29646366,
    postleitzahl: "16775",
    status: "InBetrieb",
    leistung: 2.3,
    inbetriebname_datum: "2012-07-11",
    genehmigt_datum: "2011-02-07",
    altanlagen_anzeige_datum: null,
    rotor_durchmesser: 82,
    nabenhoehe: 108.4,
  },
  {
    id: "106557700004001",
    betreiber: "Green Wind Energy GmbH 17. Windpark & Co. KG",
    bestands_nr: 10655770000,
    bestands_name: "Green Wind Energy GmbH 16. Windpark & Co. KG",
    ort: "Zehdenick",
    ortsteil: "Klein-Mutz",
    latitude: 52.96108137,
    longitude: 13.25626437,
    postleitzahl: "16775",
    status: "InBetrieb",
    leistung: 2,
    inbetriebname_datum: "2012-12-21",
    genehmigt_datum: "2012-06-15",
    altanlagen_anzeige_datum: null,
    rotor_durchmesser: 90,
    nabenhoehe: 105,
  },
];

test("getLeistung1", () => {
  expect(util.getLeistung(wkas, "min")).toBe(wkas[2]);
});
test("getLeistung2", () => {
  expect(util.getLeistung(wkas, "max")).toBe(wkas[0]);
});

test("getWkaById", () => {
  expect(util.getWkaById(wkas[0].id, wkas)).toBe(wkas[0]);
});
test("getWkaByIdFail", () => {
  expect(util.getWkaById("89348934", wkas)).toBe(null);
});

const baudauer = [
  { id: "106556500004001", tage: 520 },
  { id: "106556500004002", tage: 520 },
  { id: "106557700004001", tage: 189 },
];

test("getBaudauer1", () => {
  expect(util.getBaudauer(wkas, baudauer, "min")).toStrictEqual({
    ...wkas[2],
    baudauer: 189,
  });
});
test("getBaudauer2", () => {
  expect(util.getBaudauer(wkas, baudauer, "max")).toStrictEqual({
    ...wkas[0],
    baudauer: 520,
  });
});

test("displayStringDate", () => {
  expect(util.displayStringDate("2020-12-12")).toBe("12-12-2020");
});
