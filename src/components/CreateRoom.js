import React from "react";

export default class CreateRoom extends React.Component {
  render() {
    return (
      <div className="create-room">
        <label for="room">Create new room</label>

        <button type="submit"> + </button>
      </div>
    );
  }
}
