import React from "react";
import ReactDOM from "react-dom";

// Loginpage test
import LoginPage from "../components/LoginPage";

// it("[LoginPage] renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<LoginPage />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// MessageBubble test
import MessageBubble from "../components/MessageBubble";

it("[MessageBubble] renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MessageBubble text={"Placeholder"} time={"15:30"} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// MyMessageBubble test
import MyMessageBubble from "../components/MyMessageBubble";

it("[MyMessageBubble] renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MyMessageBubble text={"Placeholder"} time={"15:30"} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
