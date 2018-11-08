import React from "react";

export default class SendMessage extends React.Component {
  render() {
    return (
      <div className="send-message">
        <input placeholder="Write your message here" type="text" />
      </div>
    );
  }
}
