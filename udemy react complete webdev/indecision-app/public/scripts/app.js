"use strict";

// live-server public

console.log("App.js is running");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "This is JSX. Does this change?"
  ),
  React.createElement(
    "p",
    null,
    " Some paragraph"
  ),
  "          "
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
