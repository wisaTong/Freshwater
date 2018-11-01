import React from "react";

export default class MyMessageBubble extends React.Component {
  render() {
    return (
      <div className="message-me">
        <div className="message-time-me">{this.props.time}</div>
        <div className="message-text-me">{this.props.text}</div>
      </div>
    );
  }
}
