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
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis.
            </p>
            <Link to="/public-room">
              <p className="rectangle" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
