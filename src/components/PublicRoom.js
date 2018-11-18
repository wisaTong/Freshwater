import React from "react";

import "../styles/app.css";

import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

import { Message } from "./Message";
import * as ws from "../socketClient"

const TEMP = [
  new Message(
    "me",
    "public",
    "HelloWorld Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ratione fugit. Atque commodi autem velit sit est dolores aut dignissimos, tene",
    "15:30"
  ),
  new Message("me", "public", "HelloWorld", "15:30"),
  new Message(
    "Mr.Lorem",
    "public",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ratione fugit. Atque commodi autem velit sit est dolores aut dignissimos, tenetur, impedit quaerat quo odio aliquam optio reiciendis, in id?",
    "15:30"
  ),
  new Message("Classic man", "public", "asdsadads", "15.35")
];
let sock = ws.connect("ws://35.240.212.170/ws");
export default class PublicRoom extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Public",
      messages: TEMP
    };
    sock.onmessage = (msg) => {
      let some = JSON.parse(msg.data)
      var time = new Date();
      console.log(`[info] receive message: ${msg.data}`);
      TEMP.push(new Message(some.sender, some.destination ,some.message, time.getHours()+":"+time.getMinutes()));
      this.setState({messages: TEMP});
    };
    this.sendMessageToSocket = this.sendMessageToSocket.bind(this);
  }

  sendMessageToSocket(message) {
    let msg = JSON.stringify(new Message("me", this.state.name, message, "9000"));
    sock.send(msg);
  }

  render() {
    return (
      <div className="chat-box">
        <div className="title-font"> {this.state.name} </div>
        <MessageList messages={this.state.messages} />
        <SendMessage sendMessage={(message) => this.sendMessageToSocket(message)}/>
      </div>
    );
  }
}
