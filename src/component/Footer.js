import React from "react";
import "./style.css";

import Group from "./image/Group 4.png";

function Footer() {
  return (
    <div>
      <div className="main-footer">
        <div>
          <p className="loved-by-users">
            Loved by users,
            <br /> recommended by expert
          </p>
          <p className="lorem-ipsum-is">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button className="last-shape">Primary CTA</button>
        </div>
        <div>
          <img src={Group} className="group-img" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
