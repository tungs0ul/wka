import React from "react";
import ReactDOM from "react-dom";
import Graphs from "./Graphs";

const leistungsGraph = [
  { datum: "2016-05-30", leistung: 3 },
  { datum: "2016-06-07", leistung: 27.15 },
  { datum: "2016-06-17", leistung: 30.599999999999998 },
  { datum: "2016-07-28", leistung: 32.9 },
  { datum: "2016-09-15", leistung: 36.199999999999996 },
  { datum: "2016-09-16", leistung: 99.44999999999999 },
];
const plzGraph = [
  { postleitzahl: "17291", leistung: 214.62000000000003, anzahl: 63 },
  { postleitzahl: "14913", leistung: 81.80999999999999, anzahl: 26 },
  { postleitzahl: "17337", leistung: 74.10000000000002, anzahl: 21 },
  { postleitzahl: "16928", leistung: 64.79999999999998, anzahl: 20 },
];
const baudauerGraph = [46, 48, 66, 66, 67];
const baudauerProZeitGraph = [
  { genehmigt: "2015-12-03", sum: 321, count: 1, avg: 321 },
  { genehmigt: "2015-12-22", sum: 8486, count: 9, avg: 942.8888888888889 },
  { genehmigt: "2016-01-16", sum: 135, count: 1, avg: 135 },
  { genehmigt: "2016-01-22", sum: 2380, count: 10, avg: 238 },
];
const nabenRotorGraph = [
  { rotordurchmesser: 114, nabenhoehe: 93, anzahl: 11 },
  { rotordurchmesser: 90, nabenhoehe: 94, anzahl: 2 },
  { rotordurchmesser: 112, nabenhoehe: 94, anzahl: 3 },
  { rotordurchmesser: 82, nabenhoehe: 98, anzahl: 2 },
];

it("graphsResult", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Graphs
      leistungsGraph={leistungsGraph}
      plzGraph={plzGraph}
      graphsIndex={0}
      baudauerGraph={baudauerGraph}
      baudauerProZeitGraph={baudauerProZeitGraph}
      nabenRotorGraph={nabenRotorGraph}
      graphIsZoomed={false}
      setGraphIsZoomed={(e) => {}}
      setGraphsIndex={(e) => {}}
    />,
    div
  );
});
