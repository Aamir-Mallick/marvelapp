import React, { Component } from "react";
import "./style.css";
import logo from "./image/images.jpg";
import mylogo from "./image/Group 6.png";
import Coustomer from "./Coustomer";
import Footer from "./Footer";
import Header from "./Header";
import Mainsection from "./Mainsection";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lollipop: null,
      icecandy: null,
      mylollipop: null,
      myicecandy: null,
      value: false,
    };
  }

  clickHandler = (e, val) => {
    this.setState({
      lollipop: val,
      icecandy: val * 2,
      mylollipop: val / 2,
      myicecandy: val,
    });
  };
  changeState = () => {
    this.setState({
      value: !this.state.value,
    });
  };

  render() {
    return (
      <div className="main">
        {/* header component*/}

        <Header />

        {/* main-section */}

        <Mainsection />

        <div className="pricing-text">Compare pricing today!</div>
        <div className="testing">
          <span className="lorem-ipsum-is-simpl">
            Lorem Ipsum is simply dummy text of the printing and
            <span style={{ color: "blue", textAlign: "center" }}>
              typesetting.
            </span>
          </span>
        </div>
        <div className="btn-main">
          <button onClick={(e) => this.clickHandler(e, 25)} className="btn">
            25 Serving
          </button>
          <button onClick={(e) => this.clickHandler(e, 50)} className="btn">
            50 Serving
          </button>
          <button onClick={(e) => this.clickHandler(e, 100)} className="btn">
            100 Serving
          </button>
          <button onClick={(e) => this.clickHandler(e, 200)} className="btn">
            200 Serving
          </button>
        </div>

        <div className="change-btn">
          <div>
            <p
              style={{
                marginTop: "2px",
                fontFamily: "sans-serif",
              }}
            >
              Annual <br />
              50% off
            </p>
          </div>
          <div>
            <input
              onClick={this.changeState}
              className="check-box"
              type="checkbox"
              name=""
            />
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              marginLeft: "15px",
            }}
          >
            Monthly
          </div>
        </div>

        <div className="card">
          <div className="inner-card card-1">
            <p className="lollipop">lollipop</p>
            <div className="card-head">
              ${this.state.value ? this.state.lollipop : this.state.mylollipop}
              <span className="body-copy-35"> per month</span>
              <br />
              <span className="body-copy-4">
                for {this.state.lollipop} serving
              </span>
            </div>
          </div>
          <div className="inner-card card-2">
            <p className="lollipop">icecandy</p>
            <div className="card-head">
              ${this.state.value ? this.state.icecandy : this.state.myicecandy}
              <span className="body-copy-35">per month</span> <br />
              <span className="body-copy-4">
                for {this.state.lollipop} Serving
              </span>
            </div>
          </div>
          <div className="inner-card card-3">
            <p className="lollipop">you saving with lollipop</p>
            <div className="card-head">
              $
              <span style={{ color: "blue" }}>
                {" "}
                {this.state.value
                  ? this.state.icecandy - this.state.lollipop
                  : this.state.myicecandy - this.state.mylollipop}
              </span>
              <br />
              <span
                className="body-copy-4"
                style={{
                  width: "200px",
                  alignItems: "center",
                  marginLeft: "50px",
                }}
              >
                per month
              </span>
            </div>
          </div>
        </div>
        {/*coustomer-sectio*/}

        <Coustomer />

        {/* footer-section*/}
        <Footer />
      </div>
    );
  }
}

export default Main;
