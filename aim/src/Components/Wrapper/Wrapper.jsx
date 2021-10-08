import React from "react";
import "./Wrapper.css";

function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <div className="wrapper__header">It`s new Aim400kg</div>
      <div>{children}</div>
    </div>
  );
}

export default Wrapper;
