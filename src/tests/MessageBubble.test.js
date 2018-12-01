import React from "react";
import { shallow } from "enzyme";
import MessageBubble from "../components/MessageBubble";

it("Get sender message correctly"),
  () => {
    const wrapper = mount(
      <MessageBubble text={"Hello World"} time={"15:30"} />
    );

    expect(wrapper.find(".message-bubble")).toBeDefined();
    expect(wrapper.find(".message-time")).toBeDefined();
  };
