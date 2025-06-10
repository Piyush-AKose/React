import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const anotherElement = (
  <a href="http://google.com" target="'_blank">
    Visit google
  </a>
);

const anotherUser = "Hey React ";

const ReactElement = React.createElement(
  "a",
  { href: (href = "http://google.com"), target: "'_blank" },
  "click me to visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
