import React from "react";
import "./styles/login.css";

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
          <div className="container-google" />
        </div>
      </div>
    );
  }
}
