import React from "react";

import "./styles/App.css";

import MessageList from "./components/MessageList";
import SendMessage from "./components/SendMessage";

import { Message } from "./components/Message";

const TEMP = [
  new Message(
    "me",
    "HelloWorld Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ratione fugit. Atque commodi autem velit sit est dolores aut dignissimos, tene",
    "15:30"
  ),
  new Message("me", "HelloWorld", "15:30"),
  new Message(
    "ZZZZZZ",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ratione fugit. Atque commodi autem velit sit est dolores aut dignissimos, tenetur, impedit quaerat quo odio aliquam optio reiciendis, in id?",
    "15:30"
  ),
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
        <div className="bigbox">
          <div className="title-font"> Public </div>
          <MessageList messages={this.state.messages} />
          <SendMessage />
        </div>
      </div>
    );
  }
}
