import React from "react";
import ReactDOM from "react-dom";

import Route from "react-router-dom/Route";
import { BrowserRouter, Switch } from "react-router-dom";

import PublicRoom from "./components/PublicRoom";
import LoginPage from "./components/LoginPage";

import './styles/app.css';

const Routing = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/:chatName" exact component={PublicRoom} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(Routing, document.getElementById("root"));
