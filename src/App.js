import React, { Component } from "react";
import HomePage from "./HomePage";
import PublicRoom from "./PublicRoom";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact
            render={() => {
              return <HomePage />;
            }}
          />
          <Route
            path="/public-room"
            exact
            component={PublicRoom}
          />
        </div>
      </Router>
    );
  }
}

export default App;
