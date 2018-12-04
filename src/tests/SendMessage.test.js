import React from "react";
import { shallow } from "enzyme";
import SendMessage from "../components/SendMessage";

describe("SendMessage", () => {
  it("renders correctly", () => {
    const component = shallow(<SendMessage />);
    expect(component).toMatchSnapshot();
  });

  it("check if message is empty", () => {
    const component = shallow(<SendMessage />);
    expect(component.state("message")).toBe("");
  });
});
