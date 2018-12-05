import React from "react";

import '../styles/chatList.css';

class ChatRoomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirection: this.props.redirection,
      chatRooms: [
        "lounge",
        "cat",
        "book"
      ]
    }
  }

  render() {

    return (
      <div>
        {this.state.chatRooms.map((name, index) => {
          return (
            <button
              key={index}
              className='chat-button'
              onClick={() => this.state.redirection(name)}
            >
              {name}
            </button>
          );
        })}
      </div>
    );
  }
}

export default class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirection: this.props.redirection
    }
  }

  render() {

    return (
      <div className='chat-list'>
        <div className='chat-rooms'>Chat rooms</div>
        <hr />
        <ChatRoomButton
          redirection={this.state.redirection}
        />
      </div>
    );
  }
}


