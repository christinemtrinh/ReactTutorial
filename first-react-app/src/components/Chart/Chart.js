import React from "react";

import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  // Extracting the amounts only 
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  // Math.max wants a list but we have an array so use the spread operator to separate
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} //assuming all labels will be unique 
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
