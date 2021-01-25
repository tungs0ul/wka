import React from "react";
import CanvasJSReact from "./../../lib/canvasjs.react";
import { q25, q50, q75, mean } from "./../../utils";

function BoxPlotBaudauer({ data, width, height }) {
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    theme: "light2",
    animationEnabled: true,
    title: {
      text: "",
    },
    axisY: {
      title: "Baudauer",
    },
    data: [
      {
        type: "boxAndWhisker",
        yValueFormatString: '#,##0.# "Tage"',
        upperBoxColor: "#8884d8",
        lowerBoxColor: "#82ca9d",
        dataPoints: [
          {
            label: `Average: ${mean(data)}`,
            y: [
              data[0],
              q25(data),
              q75(data),
              data[data.length - 1],
              q50(data),
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="noselect" style={{ height: height, width: width }}>
      {data?.length ? (
        <CanvasJSChart options={options} />
      ) : (
        <div style={{ textAlign: "center", width: width, height: height }}>
          No Data
        </div>
      )}
    </div>
  );
}

export default BoxPlotBaudauer;
