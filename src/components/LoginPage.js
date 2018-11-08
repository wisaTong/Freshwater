import React from "react";
import "../styles/login.css";

import google_logo from "../images/google_logo.svg"
import facebook_logo from "../images/facebook_logo.svg"

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
            <img src={google_logo} alt={"google_logo"}/>
            <div className="container-google-text">
              {" "}
              Sign in with Google account{" "}
            </div>
          </button>
          <div className="empty-space" />
          <button className="container-facebook-color">
            <img src={facebook_logo} alt={"facebook_logo"}/>
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
