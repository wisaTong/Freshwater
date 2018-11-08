import React from "react";

export default class MyMessageBubble extends React.Component {
  render() {
    return (
      <div className="my-message-slot">
        <div className="my-message-time">{this.props.time}</div>
        <div className="my-message-bubble">{this.props.text}</div>
      </div>
    );
  }
}
