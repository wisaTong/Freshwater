import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="hero">
          <div className="hero-copy">
            <h1> "Manatee Chat" </h1>
            <p> Welcome to Manatee chat. A place where you can chat with anyone any where. </p>
            <p>because Manatees are cool.</p>
            <Link to="/public-room">
              <p className="rectangle" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
