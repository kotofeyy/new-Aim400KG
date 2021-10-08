import React from "react";
import "./SVGCanvas.css";

const generateValue = () => {
  return Math.round(10 + Math.random() * 980);
};
const anyData = Array.from({ length: 50 }, (_el, index) => ({
  label: index++,
  cx: generateValue(),
  cy: generateValue(),
}));

function SVGCanvas() {
  return (
    <svg
      className="svg-canvas"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 500"
    >
      {anyData?.map((item) => {
        return <circle cx={item.cx} cy={item.cy} r="10" />;
      })}
    </svg>
  );
}

export default SVGCanvas;
