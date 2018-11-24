import React from "react";

import "../styles/app.css";

import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

import { Message } from "./Message";
import * as ws from "../socketClient";

let sock;

export default class PublicRoom extends React.Component {
  constructor() {
    sock = ws.connect("ws://35.240.212.170/ws");

    super();
    this.state = {
      name: "Public",
      messages: []
    };
    sock.onmessage = msg => {
      let some = JSON.parse(msg.data);
      var time = new Date(some.time);
      console.log(`[info] receive message: ${msg.data}`);
      this.state.messages.push(
        new Message(
          some.sender,
          some.destination,
          some.message,
          time.getHours() + ":" + time.getMinutes()
        )
      );
      this.setState({ messages: this.state.messages });
    };
    this.sendMessageToSocket = this.sendMessageToSocket.bind(this);
  }

  sendMessageToSocket(message) {
    var date = Math.floor(Date.now());
    let msg = JSON.stringify(
      new Message(this.props.username, this.state.name, message, date)
    );
    sock.send(msg);
  }

  render() {
    return (
      <div className="chat-box">
        <div className="title-font"> {this.state.name} </div>
        <MessageList
          messages={this.state.messages}
          username={this.props.username}
        />
        <SendMessage
          sendMessage={message => this.sendMessageToSocket(message)}
        />
      </div>
    );
  }
}
