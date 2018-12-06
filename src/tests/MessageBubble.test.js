import React from "react";
import { shallow } from "enzyme";
import MessageBubble from "../components/MessageBubble";

describe("MessageBubble", () => {
  it("render correctly", () => {
    const component = shallow(<MessageBubble />);

    expect(component).toMatchSnapshot();
  });

  it("check message bubble length", () => {
    const component = shallow(<MessageBubble />);

    expect(component.find(".message-bubble")).toHaveLength(1);
    expect(component.find(".message-time")).toHaveLength(1);
  });
});
