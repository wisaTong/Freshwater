import React from "react";
import ReactDOM from "react-dom";

import Route from "react-router-dom/Route";
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from "./components/HomePage";
import PublicRoom from "./components/PublicRoom";
import LoginPage from "./components/LoginPage";


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
