import React from "react";

import "./styles/App.css";

import MessageList from "./components/MessageList";
import SendMessage from "./components/SendMessage";

import { Message } from "./components/Message";

const TEMP = [
  new Message("me", "HelloWorld", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30"),
  new Message("ZZZZZZ", "asdsadads", "15:30")
];

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
        <MessageList messages={this.state.messages} />
        <SendMessage />
        <div className="empty-area" />
        <div className="empty-area2" />
        <div className="empty-area-bottom" />
        <div className="title-area">
          <div className="title-font"> Public </div>
        </div>
      </div>
    );
  }
}
