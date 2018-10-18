import React, { Component } from "react";
import "./styles/App.css";
import MessageList from "./components/MessageList";
import SendMessage from "./components/SendMessage";
import RoomList from "./components/RoomList";
import CreateRoom from "./components/CreateRoom";
import FriendList from "./components/FriendList";
import HomePage from "./HomePage";

import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

const TEMP = [
  {
    sender: "First",
    text: "Hello World"
  },
  {
    sender: "ZZZZZZ",
    text: "asdsadads"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: TEMP
    };
  }

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
            render={() => {
              return (
                <div className="app">
                  <RoomList />
                  <FriendList />
                  <MessageList messages={this.state.messages} />
                  <SendMessage />
                  <CreateRoom />
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
