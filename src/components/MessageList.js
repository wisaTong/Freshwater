import React from "react";
import MessageBubble from "./MessageBubble";
import MyMessageBubble from "./MyMessageBubble";

export default class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        <div className="date">
          <div className="date-text"> Today </div>
        </div>
        {this.props.messages.map((message, index) => {
          if (message.sender === "First") {
            return (
              <div key={index} className="message">
                <MyMessageBubble text={message.text} time={message.time} />
              </div>
            );
          } else {
            return (
              <div key={index} className="message">
                <div className="message-username">{message.sender}</div>
                <MessageBubble text={message.text} time={message.time} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
