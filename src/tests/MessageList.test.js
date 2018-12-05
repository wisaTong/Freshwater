import React from "react";
import { shallow } from "enzyme";
import MessageList from "../components/MessageList";
import Message from "../components/Message";
import MyMessageBubble from "../components/MyMessageBubble";

const TEMP = [
  new Message(
    "test",
    "Public",
    "Hello",
    "15:30",
    "other",
    "Public",
    "Hello",
    "15:30"
  )
];

describe("SendMessage", () => {
  it("renders correctly", () => {
    const component = shallow(<MessageList messages={TEMP} />);
    expect(component).toMatchSnapshot();
  });

  it("render user on the correct side", () => {
    const component = shallow(<MessageList messages={TEMP} />, {
      disableLifecycleMethods: true
    });
    component.setState({ username: "test" });
    expect(component.render(<MyMessageBubble />));
  });
});
