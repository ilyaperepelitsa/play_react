"use strict";

// yarn init
// yarn add babel-preset-react
// yarn add babel-preset-env

// live-server public
// babel src/app.js --out-file=public/app.js --presets=env,react --watch

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// babel src/playground/let-const.js --out-file=public/scripts/app.js --presets=env,react --watch


var appRoot = document.getElementById("app");

var user = {
  age: 23,
  name: "Peter",
  message: "Pewpew"
};

var template = React.createElement(
  "div",
  null,
  "// good for when you want two options",
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  "// good for when you want one thing if"
);

ReactDOM.render(template, appRoot);
