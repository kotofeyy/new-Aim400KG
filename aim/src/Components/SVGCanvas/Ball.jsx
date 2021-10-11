import React from "react";
import "./SVGCanvas.css";

function Ball({ cx, cy, removeBall, index }) {
  return (
    <circle
      className="ball"
      id="ball"
      cx={cx}
      cy={cy}
      onClick={() => removeBall(index)}
      onAnimationEnd={() => removeBall(index)}
    />
  );
}

export default Ball;
