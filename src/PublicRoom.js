import React from "react";

import "./styles/App.css";

import MessageList from "./components/MessageList";
import SendMessage from "./components/SendMessage";
import RoomList from "./components/RoomList";
import CreateRoom from "./components/CreateRoom";
import FriendList from "./components/FriendList";

import { Message } from "./components/Message";

var firstSender = new Message("First", "HelloWorld");
var secondSender = new Message("ZZZZZZ", "asdsadads");

const TEMP = [firstSender, secondSender];

export default class PublicRoom extends React.Component {
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
