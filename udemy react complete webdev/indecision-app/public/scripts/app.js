"use strict";

// live-server public

console.log("App.js is running");

var template = React.createElement(
  "p",
  null,
  "This is JSX. Doe"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
