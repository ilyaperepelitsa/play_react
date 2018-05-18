"use strict";

var appRoot = document.getElementById("app");

var app = {
  title: "Indecision App",
  subtitle: "Put thingy thingy thing",
  options: ["One", "Two"]
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  e.target.elements.option.value = "";

  if (option) {
    app.options.push(option);
  }
};

var template = React.createElement(
  "div",
  null,
  React.createElement("p", null),
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
