import React from "react";

export default class MessageBubble extends React.Component {
  render() {
    return (
      <div>
        <div className="message-bubble">{this.props.message}</div>
        <div className="message-time">{this.props.time}</div>
      </div>
    );
  }
}
