import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export const sortDataNachAnzahl = (data) => {
  let result = [...data];
  return result.sort((a, b) => (a.anzahl < b.anzahl ? 1 : -1));
};

function PostleitzahlGraph({ data, width, height, margin }) {
  const [option, setOption] = useState("leistung");
  const [sortedData, setSortedData] = useState(data);

  const CustomTooltip = ({ active, label, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <div>
            <strong>Postleitzahl: {label}</strong>
          </div>
          <div style={{ color: "#82ca9d" }}>
            Leistung: {payload[0].value.toFixed(2)}
            {payload[0].unit}
          </div>
          <div style={{ color: "#8884d8" }}>Anzahl: {payload[1].value}</div>
        </div>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (option === "anzahl") {
      setSortedData(sortDataNachAnzahl(data));
    } else {
      setSortedData(data);
    }
  }, [option, data]);

  return (
    <div className="noselect">
      {data?.length ? (
        <BarChart
          width={width}
          height={height}
          data={data ? sortedData.slice(0, 10) : sortedData}
          margin={margin}
        >
          <XAxis dataKey="postleitzahl" />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#82ca9d"
            onClick={(e) => setOption("leistung")}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#8884d8"
            onClick={(e) => setOption("anzahl")}
          />
          <Tooltip content={CustomTooltip} />
          <Legend
            formatter={(value, entry, index) => (
              <span
                style={{
                  color: entry.color,
                  fontWeight: value === option ? "bolder" : "lighter",
                  textDecoration: value === option && "underline",
                }}
                className="legend-name icons click-able"
              >
                {value}
              </span>
            )}
            onClick={(e) => setOption(e.dataKey)}
            layout="horizontal"
            verticalAlign="top"
            align="center"
          />
          <Bar dataKey="leistung" yAxisId="left" fill="#82ca9d" unit="MWh" />
          <Bar dataKey="anzahl" yAxisId="right" fill="#8884d8" />
        </BarChart>
      ) : (
        <div style={{ textAlign: "center", width: width, height: height }}>
          No Data
        </div>
      )}
    </div>
  );
}

export default PostleitzahlGraph;
