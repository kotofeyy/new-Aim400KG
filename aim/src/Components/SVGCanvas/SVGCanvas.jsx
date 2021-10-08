import React from "react";
import "./SVGCanvas.css";

const generateValue = () => {
  return Math.round(20 + Math.random() * 960);
};

function SVGCanvas() {
  const [balls, setBalls] = React.useState(
    Array.from({ length: 50 }, (_el, index) => ({
      key: index++,
      cx: generateValue(),
      cy: generateValue(),
    }))
  );

  const removeBalls = (i) => {
    setBalls(balls.filter((item, j) => i !== j));
  };
  return (
    <svg
      className="svg-canvas"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 500"
    >
      <g className="svg-canvas__console">
        {balls.map((item, i) => {
          return (
            <text x="10" y={i * 7 + 10} fontSize="8px">
              balls-{item.key}
            </text>
          );
        })}
      </g>
      {balls?.map((item, i) => {
        return (
          <>
            <circle
              cx={item.cx}
              cy={item.cy}
              r="10"
              onClick={() => removeBalls(i)}
            />
          </>
        );
      })}
    </svg>
  );
}

export default SVGCanvas;
