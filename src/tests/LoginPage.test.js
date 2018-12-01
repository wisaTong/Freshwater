import React from "react";
import { shallow } from "enzyme";
import LoginPage from "../components/LoginPage";

describe("LoginPage", () => {
  it("renders correctly", () => {
    const component = shallow(<LoginPage />);
    expect(component).toMatchSnapshot();
  });

  it("check if username is empty", () => {
    const component = shallow(<LoginPage />);
    expect(component.state("username")).toBe("");
  });
});
