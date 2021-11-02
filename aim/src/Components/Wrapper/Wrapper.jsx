import React from "react";
import { useSelector } from "react-redux";
import close from "./images/close.png";
import "./Wrapper.css";

function Wrapper({ children, title }) {
  const aiming = useSelector((state) => state.exactAiming.ballInfo);
  return (
    <div className="wrapper">
      <div className="wrapper__header">
        <div className="wrapper__name">{title}</div>
        <div className="wrapper__game_performance">{aiming}</div>
        <div className="wrapper__close">
          <img src={close} width="20" />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Wrapper;
