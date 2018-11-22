import React from "react";
import ReactDOM from "react-dom";
import MessageBubble from "./MessageBubble";
import MyMessageBubble from "./MyMessageBubble";

export default class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username
    };
  }

  componentDidUpdate() {
    const node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }

  render() {
    return (
      <div className="message-list">
        <div className="date">
          <div className="date-text">  {this.date} </div>
        </div>
        {this.props.messages.map((message, index) => {
          if (message.sender === this.state.username) {
            return (
              <div className="my-message-slot">
                <MyMessageBubble message={message.message} time={message.time} />
              </div>
            );
          } else {
            return (
              <div className="message-slot">
                <div className="message-sender">{message.sender}</div>
                <MessageBubble message={message.message} time={message.time} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}
