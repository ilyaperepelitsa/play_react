"use strict";

var appRoot = document.getElementById("app");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "form",
    null,
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement("button", null)
  )
);

ReactDOM.render(template, appRoot);
