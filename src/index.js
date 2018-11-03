import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage";
import PublicRoom from "./PublicRoom";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

const Routing = (
  <Router>
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/public-room" exact component={PublicRoom} />
      <Route path="/login" exact component={LoginPage} />
    </div>
  </Router>
);

ReactDOM.render(Routing, document.getElementById("root"));
