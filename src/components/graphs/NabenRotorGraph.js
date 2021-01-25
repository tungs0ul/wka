import React, { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import { getColor, colors, getValueScale } from "./../../utils";

function NabenRotorGraph({ data, width, height, margin, bubbles = true }) {
  const range = bubbles ? [200, 5000] : [500, 500];
  const [scale, setScale] = useState([]);
  const [bubbleColors, setBubbleColors] = useState([]);
  const transparent = "rgba(255,255,255,0)";
  const [show, setShow] = useState(true);

  useEffect(() => {
    setScale(getValueScale(data.map((e) => e.anzahl)));
    setBubbleColors(colors);
    setShow(true);
  }, [data]);

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      let x = 0;
      for (let i = 0; i < scale.length; ++i) {
        if (payload[2].value <= scale[i]) {
          x = i;
          break;
        }
      }
      return (
        bubbleColors[x] !== transparent && (
          <div className="custom-tooltip">
            <div>
              <strong>Nabenhöhe: {payload[0].value}m</strong>
            </div>
            <div>
              <strong>Rotordurchmesser: {payload[1].value}m</strong>
            </div>
            <div style={{ color: bubbleColors[x] }}>
              Anzahl: {payload[2].value}
            </div>
          </div>
        )
      );
    } else {
      return null;
    }
  };

  const changeAllColor = (color) => {
    let tmp = [...bubbleColors];
    for (let i = 0; i < tmp.length; ++i) {
      tmp[i] = color;
    }
    setBubbleColors(tmp);
  };

  const handleLegendClick = (e) => {
    if (e.value !== "alle") {
      let value = e.value.slice(1, e.value.length);
      let index = scale.indexOf(parseInt(value, 10));
      let farben = [...bubbleColors];
      farben[index] =
        farben[index] === transparent ? colors[index] : transparent;
      setBubbleColors(farben);
    } else {
      show ? changeAllColor(transparent) : setBubbleColors(colors);
      setShow(!show);
    }
  };

  return (
    <div className="noselect">
      {data?.length ? (
        <ScatterChart width={width} height={height} margin={margin}>
          <XAxis dataKey="nabenhoehe" />
          <YAxis dataKey="rotordurchmesser" />
          <ZAxis dataKey="anzahl" range={range} />
          <Legend
            formatter={(value, entry, index) => (
              <span
                style={{
                  color:
                    index === scale?.length - 1 ? "#000000" : colors[index],
                  textDecoration: entry.color === transparent && "line-through",
                }}
                className="icons click-able"
              >
                {value}
              </span>
            )}
            onClick={handleLegendClick}
            payload={
              scale &&
              scale.map((i, v) =>
                i !== "alle"
                  ? {
                      value: "≤" + i,
                      type: "circle",
                      color: bubbleColors[v],
                    }
                  : {
                      value: i,
                      type: "circle",
                      color: show ? "#000000" : transparent,
                    }
              )
            }
          />
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <Scatter data={data} fill="#8884d8">
            {data &&
              data.map((entry) => (
                <Cell
                  key={`cell-${entry.anzahl}`}
                  fill={getColor(entry.anzahl, scale, bubbleColors)}
                />
              ))}
          </Scatter>
        </ScatterChart>
      ) : (
        <div style={{ textAlign: "center", width: width, height: height }}>
          No Data
        </div>
      )}
    </div>
  );
}

export default NabenRotorGraph;
