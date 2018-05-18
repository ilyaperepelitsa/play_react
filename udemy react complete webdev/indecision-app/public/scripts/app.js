"use strict";

var appRoot = document.getElementById("app");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "form",
    { onSubmit: onFormSu },
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      null,
      "Add option"
    )
  )
);

ReactDOM.render(template, appRoot);
