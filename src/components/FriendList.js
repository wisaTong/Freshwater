import React from "react";
import {
  ThemeProvider,
  AgentBar,
  Avatar,
  Column,
  Title,
  Subtitle
} from "@livechat/ui-kit";

class FriendList extends React.Component {
  theme = {
    Avatar: {
      css: {},
      size: "100px"
    }
  };
  render() {
    return (
      <div className="friend-list">
        <h3> FRIEND LIST</h3>
      </div>
    );
  }
}

export default FriendList;
