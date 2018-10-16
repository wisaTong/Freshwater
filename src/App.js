import React, { Component } from "react";
import "./App.css";
import MessageList from "./components/MessageList";
import SendMessage from "./components/SendMessage";
import RoomList from "./components/RoomList";
import CreateRoom from "./components/CreateRoom";
import FriendList from "./components/FriendList";

class App extends Component {
  render() {
    return (
      <div className="app">
        <RoomList />
        <FriendList />
        <MessageList />
        <SendMessage />
        <CreateRoom />
      </div>
    );
  }
}

export default App;
