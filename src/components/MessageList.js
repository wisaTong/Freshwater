import React from "react";
import MessageBubble from "./MessageBubble";

export default class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        <div className="date">
          <div className="date-text"> TODAY </div>
        </div>
        {this.props.messages.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.sender}</div>
              <MessageBubble text={message.text} time={message.time} />
            </div>
          );
        })}
      </div>
    );
  }
}
