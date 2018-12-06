import React from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="hero">
          <div className="hero-copy">
            <h1> "Manatee Chat" </h1>
            <p>
              Welcome to Manatee chat. A place where you can chat with anyone
              any where.
            </p>
            <p>because Manatees are cool.</p>
            <Link to="/login">
              <button className="rectangle"> to Login Page </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
