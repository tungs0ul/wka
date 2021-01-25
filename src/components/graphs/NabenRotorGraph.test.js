import React from "react";
import ReactDOM from "react-dom";
import NabenRotorGraph from "./NabenRotorGraph";

const nabenRotorGraph = [
  { rotordurchmesser: 114, nabenhoehe: 93, anzahl: 11 },
  { rotordurchmesser: 90, nabenhoehe: 94, anzahl: 2 },
  { rotordurchmesser: 112, nabenhoehe: 94, anzahl: 3 },
  { rotordurchmesser: 82, nabenhoehe: 98, anzahl: 2 },
];

it("nabenRotorGraphResult", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <NabenRotorGraph data={nabenRotorGraph} height={400} width={700} />,
    div
  );
});
