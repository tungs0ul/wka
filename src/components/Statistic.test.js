import React from "react";
import ReactDOM from "react-dom";
import Statistic from "./Statistic";

const filter = {
  begin: new Date(new Date() - 5 * 365.25 * 24 * 3600 * 1000)
    .toJSON()
    .slice(0, 10),
  end: new Date().toJSON().slice(0, 10),
  inbetrieb: true,
  genehmigt: true,
};

const graphsIndex = 3;
const setGraphsIndex = (v) => {
  console.log(v);
};
const graphIsZoomed = false;
const setGraphIsZoomed = (v) => {
  console.log(v);
};

it("statisticsResult", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Statistic
      filter={filter}
      graphsIndex={graphsIndex}
      setGraphsIndex={setGraphsIndex}
      graphIsZoomed={graphIsZoomed}
      setGraphIsZoomed={setGraphIsZoomed}
    />,
    div
  );
});
