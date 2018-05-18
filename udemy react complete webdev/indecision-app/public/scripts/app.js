"use strict";

var appRoot = document.getElementById("app");

var app = {
  title: "Indecision App",
  subtitle: "Put thingy "
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    c;
  }
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "form",
    { onSubmit: onFormSubmit },
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      null,
      "Add option"
    )
  )
);

ReactDOM.render(template, appRoot);
