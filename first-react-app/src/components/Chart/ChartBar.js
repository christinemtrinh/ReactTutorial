import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = '0%'; 

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  // We are going to style via HTML using the special style property
  // It accepts an object with various predefined properties that are used in CSS..
  // IF it has a dash in CSS then just use camel case
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}> 
        </div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
