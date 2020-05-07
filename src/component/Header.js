import React from "react";
import logo from "./image/images.jpg";
import "./style.css";

function Header() {
  return (
    <div>
      <div className="top-main">
        <div className="top-left">
          <p className="looking-for-a-lollip">
            Looking for a <br />
            lollipop alternative?
          </p>
          <p className="text-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="button-toggle">
            <button className="bg">
              <span className="cta-text">Primary CTA</span>
            </button>

            <button className="outline">
              <span className="cta-text" style={{ color: "black" }}>
                Secondary CTA
              </span>
            </button>
          </div>
        </div>

        <div className="top-right">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}

export default Header;
