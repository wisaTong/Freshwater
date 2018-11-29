import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

import google_logo from "../images/google_logo.svg";
import facebook_logo from "../images/facebook_logo.svg";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(event) {
    this.setState({ username: event.target.value });
  }
  handleKeyPress = event => {
    if (event.key === "Enter" && this.state.username.trim() !== "") {
      document.getElementById("submit").click();
      return console.log(`Your username is : ${this.state.username}`)
    }
  };

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
            <input
              placeholder="Enter your name"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />{" "}
          </div>
          <p> or </p>
            <button className="container-google-color">
              <img src={google_logo} alt={"google_logo"} />
              <div className="container-google-text">
                {" "}
                Sign in with Google account{" "}
              </div>
            </button>
            <div className="empty-space" />
            <button className="container-facebook-color">
              <img src={facebook_logo} alt={"facebook_logo"} />
              <div className="container-facebook-text">
                {" "}
                Sign in with Facebook account{" "}
              </div>
            </button>
            <Link
              to={{
                pathname: "/public-room",
                state: { fromUserName: this.state.username }
              }}
            id="submit"/>
        </div>
      </div>
    );
  }
}
