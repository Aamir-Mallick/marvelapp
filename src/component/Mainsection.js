import React from "react";
import mylogo from "./image/Group 6.png";
import "./style.css";

function Mainsection() {
  return (
    <div>
      <div className="header-div">
        <p className="header-text">
          This is a heading
          <br /> in two lines
        </p>
      </div>
      <div className="content-div">
        <img src={mylogo} />
      </div>
    </div>
  );
}

export default Mainsection;
