import React from "react";

export default class SendMessage extends React.Component {
  render() {
    return (
      <form className="send-message">
        <input placeholder="Write a message..." type="text" />
      </form>
    );
  }
}
