import React from "react";
import "./styles/login.css";

var googleImage = require("./images/google_logo.svg");
var facebookImage = require("./images/facebook-app-symbol.svg");

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="leftpane" />
        <div className="middlepane" />
        <div className="rightpane">
          <h1>Manatee</h1>
          <h3>A simple chat app</h3>
          <div className="send-name">
            {" "}
            <input placeholder="Enter your name" type="text" />{" "}
          </div>
          <p> or </p>
          <button className="container-google-color">
            <img src={googleImage} />
            <div className="container-google-text">
              {" "}
              Sign in with Google account{" "}
            </div>
          </button>
          <button className="container-facebook-color">
            <img src={facebookImage} />
            <div className="container-facebook-text">
              {" "}
              Sign in with Facebook account{" "}
            </div>
          </button>
        </div>
      </div>
    );
  }
}
