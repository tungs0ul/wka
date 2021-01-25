import React, { useState, useEffect, useMemo } from "react";
// import Table from "./Table";
import Graphs from "./Graphs";
import axios from "axios";
import { getBaudauerProZeitGraph } from "./../utils";
import Searchbox from "./Searchbox";
import {
  GraphsIndexContext,
  GraphIsZoomedContext,
  BaudauerContext,
} from "../context";
import "./Statistic.css";

function Statistic({ filter }) {
  const [graphIsZoomed, setGraphIsZoomed] = useState(false);
  const graphIsZoomedValue = useMemo(
    () => ({
      graphIsZoomed: graphIsZoomed,
      setGraphIsZoomed: setGraphIsZoomed,
    }),
    [graphIsZoomed, setGraphIsZoomed]
  );

  const [graphsIndex, setGraphsIndex] = useState(3);
  const graphsIndexValue = useMemo(
    () => ({ graphsIndex: graphsIndex, setGraphsIndex: setGraphsIndex }),
    [graphsIndex, setGraphsIndex]
  );

  const [leistungsGraph, setLeistungsGraph] = useState([]);
  const [plzGraph, setPlzGraph] = useState([]);
  const [baudauerGraph, setBaudauerGraph] = useState([]);
  const [nabenRotorGraph, setNabenRotorGraph] = useState([]);
  const [baudauerProZeitGraph, setBaudauerProZeitGraph] = useState([]);

  const [baudauer, setBaudauer] = useState([]);
  const baudauerValue = useMemo(
    () => ({ baudauer: baudauer, setBaudauer: setBaudauer }),
    [baudauer, setBaudauer]
  );

  useEffect(() => {
    if (filter) {
      let params = `?begin=${filter.begin}&end=${filter.end}&inbetrieb=${filter.inbetrieb}&genehmigt=${filter.genehmigt}`;
      if (filter.alle) {
        params = "?inbetrieb=false&genehmigt=false";
      }
      axios
        .get(
          process.env.REACT_APP_API_URL + "/statistik/rotor_nabenhoehe" + params
        )
        .then((rsp) => {
          setNabenRotorGraph(rsp.data);
        });
      axios
        .get(process.env.REACT_APP_API_URL + "/statistik/baudauer" + params)
        .then((rsp) => {
          let tmp = [];
          setBaudauer(rsp.data);
          rsp.data.map((e) => tmp.push(e.tage));
          setBaudauerGraph(tmp);
          setBaudauerProZeitGraph(getBaudauerProZeitGraph(rsp.data));
        });
      axios
        .get(
          process.env.REACT_APP_API_URL +
            "/statistik/ort_leistung_anzahl" +
            params
        )
        .then((rsp) => setPlzGraph(rsp.data));
      axios
        .get(process.env.REACT_APP_API_URL + "/statistik/leistung" + params)
        .then((rsp) => setLeistungsGraph(rsp.data));
    }
  }, [filter]);

  const [graphStyle, setGraphStyle] = useState({});

  const handleZoomResize = () => {
    if (graphIsZoomed) {
      setGraphStyle({
        position: "fixed",
        width: window.innerWidth,
        height: window.innerHeight,
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
      });
    } else {
      setGraphStyle({});
    }
  };

  useEffect(() => {
    handleZoomResize();
  }, [graphIsZoomed]);

  useEffect(() => {
    window.addEventListener("resize", handleZoomResize);
    return window.removeEventListener("resize", handleZoomResize);
  });

  const handleOnClick = (e) => {
    if (graphIsZoomed) {
      let x = e.clientX,
        y = e.clientY,
        minWidth = (window.innerWidth * 0.25) / 2,
        maxWidth = window.innerWidth * (0.75 + 0.25 / 2),
        minHeight = (window.innerHeight * 0.25) / 2,
        maxHeight = window.innerHeight * (0.75 + 0.25 / 2);
      if (!(x > minWidth && x < maxWidth && y > minHeight && y < maxHeight)) {
        setGraphIsZoomed(false);
      }
    }
  };

  return (
    <div>
      <GraphsIndexContext.Provider value={graphsIndexValue}>
        <GraphIsZoomedContext.Provider value={graphIsZoomedValue}>
          <BaudauerContext.Provider value={baudauerValue}>
            {/* <Table /> */}
            <div
              className="app__graphs"
              onClick={handleOnClick}
              style={graphStyle}
            >
              <Graphs
                graphIsZoomed={graphIsZoomed}
                setGraphIsZoomed={setGraphIsZoomed}
                leistungsGraph={leistungsGraph}
                plzGraph={plzGraph}
                baudauerGraph={baudauerGraph}
                baudauerProZeitGraph={baudauerProZeitGraph}
                nabenRotorGraph={nabenRotorGraph}
                setGraphsIndex={setGraphsIndex}
                graphsIndex={graphsIndex}
              />
            </div>
            <Searchbox />
          </BaudauerContext.Provider>
        </GraphIsZoomedContext.Provider>
      </GraphsIndexContext.Provider>
    </div>
  );
}

export default Statistic;
