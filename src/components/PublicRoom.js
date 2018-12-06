import React from "react";
import { Redirect } from "react-router-dom";

import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

import Message from "./Message";
import ChatList from "./ChatList";

import * as ws from "../socketClient";
import "../styles/app.css";


let sock;

export default class PublicRoom extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      next: "",
      user: "",
      chatName: "",
      messages: []
    };
    this.redirection = this.redirection.bind(this);
  }

  componentDidMount() {
    this.socketSetup();
  }

  componentWillMount() {
    const { username } = this.props.location.state;
    this.setState({
      user: username,
      chatName: this.props.location.pathname.substring(1)
    });
  }

  socketSetup() {
    sock = ws.connect(`ws://35.240.212.170/ws/${this.props.location.pathname.substring(1)}`);

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
      new Message(this.state.user, this.state.chatName, message, date)
    );
    sock.send(msg);
  }

  redirection(nextPage) {
    this.setState({ next: nextPage, redirect: true })
  }

  render() {
    
    if (this.state.redirect) {
      return <Redirect push to={{
        pathname: `/dummy`,
        state: { username: this.state.user, next: this.state.next }
      }} />
    }

    return (
      <div>
        <ChatList
          redirection={this.redirection}
        />
        <div className="chat-box">
          <div className="title-font"> {this.state.chatName} </div>
          <MessageList
            messages={this.state.messages}
            username={this.state.user}
          />
          <SendMessage
            sendMessage={message => this.sendMessageToSocket(message)}
          />
        </div>
      </div>
    );
  }
}

export class Dummy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: "",
      username: ""
    }
  }

  componentWillMount() {
    const { username } = this.props.location.state;
    const { next } = this.props.location.state;

    this.setState({
      next: next,
      username: username
    })
  }

  render() {
    return (
      <Redirect push to={{
        pathname: `/${this.state.next}`,
        state: { username: this.state.username, redirect: false }
      }} />
    );
  }

}
