import React from "react";
import MessageBubble from "./MessageBubble";
import MyMessageBubble from "./MyMessageBubble";

export default class MessageList extends React.Component {
  constructor() {
    super();
    this.date = new Date().toLocaleDateString()
    this.state = {
      username: "me"
    };
  }
  render() {
    return (
      <div className="message-list">
        <div className="date">
          <div className="date-text">  {this.date} </div>
        </div>
        {this.props.messages.map((message, index) => {
          if (message.sender === this.state.username) {
            return (
              <div className="my-message-slot">
                <MyMessageBubble text={message.text} time={message.time} />
              </div>
            );
          } else {
            return (
              <div className="message-slot">
                <div className="message-sender">{message.sender}</div>
                <MessageBubble text={message.text} time={message.time} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
