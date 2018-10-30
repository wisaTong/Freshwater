import React from "react";

export default class MessageBubble extends React.Component {
  render() {
    return (
      <div className="message">
        <div className="message-text-me">{this.props.text}</div>
        <div className="message-time-me">{this.props.time}</div>
      </div>
    );
  }
}
