"use strict";

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibility },
      visibility ? "Hide details" : "Show details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Some details"
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
