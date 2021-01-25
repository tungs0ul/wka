import React from "react";
import ReactDOM from "react-dom";
import LineGraph from "./LineGraph";

const leistungsGraph = [
  { datum: "2016-05-30", leistung: 3 },
  { datum: "2016-06-07", leistung: 27.15 },
  { datum: "2016-06-17", leistung: 30.599999999999998 },
  { datum: "2016-07-28", leistung: 32.9 },
  { datum: "2016-09-15", leistung: 36.199999999999996 },
  { datum: "2016-09-16", leistung: 99.44999999999999 },
];

const leistungsgraph2 = [];

it("lineGraphResult", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <LineGraph
      data={leistungsGraph}
      x="datum"
      y="leistung"
      height={400}
      width={700}
    />,
    div
  );
});

it("lineGraphResult2", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <LineGraph
      data={leistungsgraph2}
      x="datum"
      y="leistung"
      height={400}
      width={700}
    />,
    div
  );
});
