import React from "react";
import ReactDOM from "react-dom";
import PostleitzahlGraph, { sortDataNachAnzahl } from "./PostleitzahlGraph";

const graph = [
  { postleitzahl: "17291", leistung: 214.62000000000003, anzahl: 63 },
  { postleitzahl: "14913", leistung: 81.80999999999999, anzahl: 26 },
  { postleitzahl: "17337", leistung: 74.10000000000002, anzahl: 21 },
  { postleitzahl: "16928", leistung: 64.79999999999998, anzahl: 20 },
];

it("nabenRotorGraphResult", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <PostleitzahlGraph data={graph} height={400} width={700} />,
    div
  );
});

test("sortDataNachAnzahlResult", () => {
  expect(sortDataNachAnzahl(graph)).toStrictEqual([
    { postleitzahl: "17291", leistung: 214.62000000000003, anzahl: 63 },
    { postleitzahl: "14913", leistung: 81.80999999999999, anzahl: 26 },
    { postleitzahl: "17337", leistung: 74.10000000000002, anzahl: 21 },
    { postleitzahl: "16928", leistung: 64.79999999999998, anzahl: 20 },
  ]);
});
