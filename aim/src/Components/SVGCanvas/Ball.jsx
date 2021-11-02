import React from "react";
import { useDispatch } from "react-redux";
import { currentBallAction } from "../../Store/exactAiming";
import "./SVGCanvas.css";

function Ball({ cx, cy, removeBall, index }) {
  const dispatch = useDispatch();
  return (
    <circle
      className="ball"
      id="ball"
      fill="black"
      cx={cx}
      cy={cy}
      onClick={() => {
        removeBall(index);
        dispatch(currentBallAction(index));
      }}
      onAnimationEnd={() => removeBall(index)}
    />
  );
}

export default Ball;
