import React from "react";

import "./styles/App.css";

import MessageList from "./components/MessageList";
import SendMessage from "./components/SendMessage";

import { Message } from "./components/Message";

var firstSender = new Message("First", "HelloWorld", "15:30");
var secondSender = new Message("ZZZZZZ", "asdsadads", "15:30");
var secondSender1 = new Message("ZZZZZZ", "asdsadads", "15:30");
var secondSender2 = new Message("ZZZZZZ", "asdsadads", "15:30");
var secondSender3 = new Message("ZZZZZZ", "asdsadads", "15:30");
var secondSender4 = new Message("ZZZZZZ", "asdsadads", "15:30");
var secondSender5 = new Message("ZZZZZZ", "asdsadads", "15:30");
var secondSender6 = new Message("ZZZZZZ", "asdsadads", "15:30");
var secondSender7 = new Message("ZZZZZZ", "asdsadads", "15:30");
var secondSender8 = new Message("ZZZZZZ", "asdsadads", "15:30");
var secondSender9 = new Message("ZZZZZZ", "asdsadads", "15:30");
var secondSender10 = new Message("ZZZZZZ", "asdsadads", "15:30");

const TEMP = [
  firstSender,
  secondSender,
  secondSender1,
  secondSender2,
  secondSender3,
  secondSender4,
  secondSender5,
  secondSender6,
  secondSender7,
  secondSender8,
  secondSender9,
  secondSender10
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
      </div>
    );
  }
}
