import React, { useState, useEffect } from "react";
import "./Graphs.css";
import PostleitzahlGraph from "./graphs/PostleitzahlGraph";
import NabenRotorGraph from "./graphs/NabenRotorGraph";
// import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
// import PauseRoundedIcon from "@material-ui/icons/PauseRounded";
// import FastRewindRoundedIcon from "@material-ui/icons/FastRewindRounded";
// import FastForwardRoundedIcon from "@material-ui/icons/FastForwardRounded";
// import ProgressBar from "./ProgressBar";
import BoxPlotBaudauer from "./graphs/BoxPlotBaudauer";
import LineGraph from "./graphs/LineGraph";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import ZoomOutMapRoundedIcon from "@material-ui/icons/ZoomOutMapRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "2em",
      },
    },
  },
});
const BlackOnGreyTooltip = withStyles({
  arrow: {
    color: "lightgrey",
  },
  tooltip: {
    color: "black",
    backgroundColor: "lightgrey",
  },
})(Tooltip);

function Graphs({
  leistungsGraph,
  plzGraph,
  baudauerGraph,
  baudauerProZeitGraph,
  nabenRotorGraph,
  graphIsZoomed,
  setGraphIsZoomed,
  graphsIndex,
  setGraphsIndex,
}) {
  const slides = [
    {
      title: "Leistung über Zeit",
      info:
        "Bereich mit linker Maustaste wählen um reinzuzoomen. Linksklick auf den Graphen zum resetten vom Zoom.",
    },
    {
      title: "Nabenhöhe & Rotordurchmesser",
      info:
        "Mit Linksklick auf Legendenwert Ein- und Ausblenden des gewählten Wertes.",
    },
    {
      title: "Leistung\\Anzahl nach PLZ",
      info:
        "Mit Linksklick auf Legendenwert nach Leistung bzw. Anzahl sortieren.",
    },
    {
      title: "Baudauer",
      info: "Keine Zusatzfunktion.",
    },
    {
      title: "Baudauer über Zeit",
      info:
        "Bereich mit linker Maustaste wählen um reinzuzoomen. Linksklick auf den Graphen zum resetten vom Zoom.",
    },
  ];

  const graphMargin = { top: 0, right: 15, left: 0, bottom: 5 };

  const PROGRESS_TIME_PLAYING = 7000;
  const [playing, setPlaying] = useState(false);

  const [graphWidth, setGraphWidth] = useState(
    window.innerWidth >= 750 ? 700 : window.innerWidth - 75
  );
  const gHeight = 340;
  const [graphHeight, setGraphHeight] = useState(gHeight);

  const handleResize = () => {
    if (window.innerWidth >= 750) {
      setGraphWidth(700);
    } else {
      setGraphWidth(window.innerWidth - 75);
    }
    handleZoomGraphResize();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const handleNext = () => {
    setGraphsIndex((graphsIndex + 1 + slides.length) % slides.length);
    setPlaying(false);
  };

  const handlePrev = () => {
    setGraphsIndex((graphsIndex - 1 + slides.length) % slides.length);
    setPlaying(false);
  };

  useEffect(() => {
    if (playing) {
      let timeout = setTimeout(() => {
        setGraphsIndex((graphsIndex + 1 + slides.length) % slides.length);
      }, PROGRESS_TIME_PLAYING);
      return () => clearTimeout(timeout);
    }
  }, [graphsIndex, playing]);

  const [style, setStyle] = useState({});

  const handleZoomGraphResize = () => {
    if (graphIsZoomed) {
      let topMargin = (window.innerHeight * 0.25) / 2;
      let leftMargin = (window.innerWidth * 0.25) / 2;
      setStyle({
        width: window.innerWidth * 0.75,
        height: window.innerHeight * 0.75,
        margin: `${topMargin}px ${leftMargin}px 0`,
      });
      setGraphWidth(window.innerWidth * 0.75 - 50);
      setGraphHeight(
        window.innerWidth > 750
          ? window.innerHeight * 0.75 - 50
          : window.innerHeight * 0.75 - 200
      );
      setPlaying(false);
    } else {
      setStyle({});
      setGraphWidth(window.innerWidth >= 750 ? 700 : window.innerWidth - 75);
      setGraphHeight(gHeight);
    }
  };

  useEffect(() => {
    handleZoomGraphResize();
  }, [graphIsZoomed]);

  return (
    <div className="graphs" style={style}>
      <div className="graphs__header">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="icons click-able">
            <ArrowBackRoundedIcon onClick={handlePrev} fontSize="large" />
          </div>
          {/* <div className="icons click-able">
            {playing ? (
              <PauseRoundedIcon
                onClick={() => playing && setPlaying(false)}
                fontSize="large"
              />
            ) : (
              <PlayArrowRoundedIcon
                onClick={() => !playing && setPlaying(true)}
                fontSize="large"
              />
            )}
          </div> */}
          <div className="icons click-able">
            <ArrowForwardRoundedIcon onClick={handleNext} fontSize="large" />
          </div>
        </div>

        <div>
          <h2>{slides[graphsIndex].title}</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5px 5px 0 0",
          }}
        >
          <div className="icons" style={{ marginRight: "5px" }}>
            <MuiThemeProvider theme={theme}>
              <BlackOnGreyTooltip
                arrow
                interactive
                TransitionComponent={Zoom}
                title={
                  <p style={{ fontSize: "1rem" }}>{slides[graphsIndex].info}</p>
                }
              >
                <InfoRoundedIcon />
              </BlackOnGreyTooltip>
            </MuiThemeProvider>
          </div>
          <div className="icons click-able">
            {graphIsZoomed ? (
              <CancelRoundedIcon
                onClick={() => {
                  setGraphIsZoomed(false);
                }}
              />
            ) : (
              <ZoomOutMapRoundedIcon
                onClick={() => {
                  setGraphIsZoomed(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        {graphsIndex === 0 && (
          <LineGraph
            margin={graphMargin}
            data={leistungsGraph}
            width={graphWidth}
            height={graphHeight}
            x={"datum"}
            y={"leistung"}
            unit={"MWh"}
          />
        )}
        {graphsIndex === 2 && (
          <PostleitzahlGraph
            margin={graphMargin}
            data={plzGraph}
            width={graphWidth}
            height={graphHeight}
          />
        )}
        {graphsIndex === 1 && (
          <NabenRotorGraph
            margin={graphMargin}
            data={nabenRotorGraph}
            width={graphWidth}
            height={graphHeight}
          />
        )}
        {graphsIndex === 3 && (
          <BoxPlotBaudauer
            margin={graphMargin}
            data={baudauerGraph}
            width={graphWidth}
            height={graphHeight}
          />
        )}
        {graphsIndex === 4 && (
          <LineGraph
            margin={graphMargin}
            data={baudauerProZeitGraph}
            width={graphWidth}
            height={graphHeight}
            x={"genehmigt"}
            y={"avg"}
            unit={"Tage"}
          />
        )}
      </div>
    </div>
  );
}

export default React.memo(Graphs, (next, prev) => {
  if (next === prev) {
    return true;
  }
  return false;
});
