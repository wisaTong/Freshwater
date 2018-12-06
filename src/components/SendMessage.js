import React from "react";

export default class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    if (this.sendMessageInput != null) this.sendMessageInput.focus();
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleKeyPress = event => {
    var text = this.state.message.trim();
    if (event.key === "Enter" && text !== "") {
      this.props.sendMessage(this.state.message);
      this.setState({ message: "" });
    }
  };

  render() {
    return (
      <div className="send-message">
        <input
          ref={input => this.sendMessageInput = input}
          placeholder="Write your message here"
          value={this.state.message}
          type="message"
          maxLength="255"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}
