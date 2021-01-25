import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
} from "recharts";

function LineGraph({ data, width, height, x, y, margin, unit }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(data ? data.length - 1 : 0);
  const [marker, setMarker] = useState({ start: 0, end: end });
  const [leftArea, setLeftArea] = useState("");
  const [rightArea, setRightArea] = useState("");

  useEffect(() => {
    setMarker({ start: 0, end: data ? data.length - 1 : 0 });
  }, [data]);

  const CustomTooltip = ({ active, label, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <div>
            <strong>{label}</strong>
          </div>
          <div style={{ color: "#8884d8" }}>
            {y === "leistung" ? "Leistung: " : "durchschnitt Baudauer: "}
            {payload[0].value.toFixed(2)}
            {payload[0].unit}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (start < end) {
      setMarker({ start: start, end: end });
    } else if (start > end) {
      setMarker({ start: end, end: start });
    } else {
      setMarker({ start: 0, end: data ? data.length - 1 : 0 });
    }
  }, [end]);

  return (
    <div className="noselect">
      {data?.length ? (
        <LineChart
          width={width}
          height={height}
          data={data.slice(marker.start, marker.end + 1)}
          margin={margin}
          onMouseDown={(event) => {
            if (event) {
              let x = 0;
              data.map((e, i) => {
                if (
                  e.genehmigt === event.activeLabel ||
                  e.datum === event.activeLabel
                ) {
                  x = i;
                }
              });
              setLeftArea(event.activeLabel);
              setStart(x);
            }
          }}
          onMouseMove={(event) => {
            leftArea && setRightArea(event.activeLabel);
          }}
          onMouseUp={(event) => {
            if (event) {
              let x = data.length - 1;
              data.map((e, i) => {
                if (
                  e.genehmigt === event.activeLabel ||
                  e.datum === event.activeLabel
                ) {
                  x = i;
                }
              });
              setEnd(x);
              setLeftArea("");
              setRightArea("");
            }
          }}
        >
          <XAxis dataKey={x} />
          <YAxis />
          <Tooltip content={CustomTooltip} />
          <Line
            type="monotone"
            dataKey={y}
            stroke="#8884d8"
            dot={{ r: data.length < 2 ? 4 : 0 }}
            activeDot={{ r: 8 }}
            unit={unit}
          />
          (leftArea && rightArea) ? (
          <ReferenceArea
            yAxisId="0"
            x1={leftArea}
            x2={rightArea}
            strokeOpacity={0.3}
          />
          ) : null
        </LineChart>
      ) : (
        <div style={{ textAlign: "center", width: width, height: height }}>
          No Data
        </div>
      )}
    </div>
  );
}

export default LineGraph;
