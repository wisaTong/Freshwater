import React from "react";

export default class SendMessage extends React.Component {
  render() {
    return (
      <div className="send-message">
        <input placeholder="Write a message..." type="text" />
      </div>
    );
  }
}
