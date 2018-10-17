import React, { Component } from "react";
import "./App.css";
import MessageList from "./components/MessageList";
import SendMessage from "./components/SendMessage";
import RoomList from "./components/RoomList";
import CreateRoom from "./components/CreateRoom";
import FriendList from "./components/FriendList";

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
      <div className="app">
        <RoomList />
        <FriendList />
        <MessageList messages={this.state.messages} />
        <SendMessage />
        <CreateRoom />
      </div>
    );
  }
}

export default App;
