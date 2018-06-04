"use strict";

// yarn init
// yarn add babel-preset-react
// yarn add babel-preset-env

// live-server public
// babel src/app.js --out-file=public/app.js --presets=env,react --watch

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// babel src/playground/let-const.js --out-file=public/scripts/app.js --presets=env,react --watch


var appRoot = document.getElementById("app");

var user = {};

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
  React.createElement(
    "p",
    null,
    app.options.length
  ),
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
