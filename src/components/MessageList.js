import React from "react";

export default class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.sender}</div>
              <div className="message-text">{message.text}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
