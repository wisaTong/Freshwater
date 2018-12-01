import React from "react";
import { shallow } from "enzyme";
import MyMessageBubble from "../components/MyMessageBubble";

describe("MessageBubble", () => {
  it("render correctly", () => {
    const component = shallow(<MyMessageBubble />);

    expect(component).toMatchSnapshot();
  });

  it("check message bubble length", () => {
    const component = shallow(<MyMessageBubble />);

    expect(component.find(".my-message-bubble")).toHaveLength(1);
    expect(component.find(".my-message-time")).toHaveLength(1);
  });
});
