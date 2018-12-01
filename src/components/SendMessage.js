import React from "react";

export default class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleKeyPress = event => {
    var text = this.state.message.replace(/\s/g, "");
    if (event.key === "Enter" && text !== "") {
      this.props.sendMessage(this.state.message);
      this.setState({ message: "" });
    }
  };

  render() {
    return (
      <div className="send-message">
        <input
          placeholder="Write your message here"
          value={this.state.message}
          type="message"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}
