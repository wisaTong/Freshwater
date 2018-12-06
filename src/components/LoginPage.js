import React from "react";
import { Redirect } from "react-router-dom";

import '../styles/app.css';
import "../styles/login.css";

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", redirect: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleKeyPress = event => {
    if (event.key === "Enter" && this.state.username.trim() !== "") {
      this.setState({redirect: true});
      return null;
    }
  };

  render() {

    const redirect = this.state.redirect

    if (redirect) return <Redirect push to={{
      pathname: "/lounge",
      state: { username: this.state.username }
    }} />

    return (
      <div className="top-level">
        <div className='column' />
        <div className='column' />
        <div className="column ">
          <p className="manatee">Manatee</p>
          <p className="desc">A simple chat app</p>
          <div className="send-name">
            <input
              ref={input => this.nameInput = input}
              placeholder="Enter your name"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        </div>
      </div>
    );

  }
}
