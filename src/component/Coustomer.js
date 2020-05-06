import React from "react";
import "./style.css";
import mens from "./image/mens-1.jpg";

function Coustomer() {
  return (
    <div>
      <p className="top-header-text">Here’s what our customers have to say</p>
      <div className="main-coustomer">
        <div className="coustomer-pic">
          <p className="hex-code">&#8220;</p>
          <img src={mens} />
        </div>
        <div>
          <p className="my-sample-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <p
            className="my-sample-text-1"
            style={{
              fontWeight: "700",
              color: "black",
            }}
          >
            Raja Ram
          </p>
          <span className="my-sample-text-1 tip-name">Tip World</span>
        </div>
      </div>
    </div>
  );
}

export default Coustomer;
