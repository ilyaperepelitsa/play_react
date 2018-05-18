"use strict";

var appRoot = document.getElementById("app");

var post = {
  title: "This is a tutorial nonsense",
  // subtitle: "I wouldn",
  subtitle: "I wouldn't really look into it. It's pretty long",
  some_num: 3
};
var template3 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    post.title
  ),
  post.subtitle && post.subtitle.length > 10 && React.createElement(
    "p",
    null,
    post.subtitle
  ),
  React.createElement(
    "p",
    null,
    post.some_num >= 30 ? "big number" : "Small number"
  )
);
var addOne = function addOne() {
  count++;
  console.log("+1", count);
};

var minusOne = function minusOne() {
  count--;
  console.log("-1", count);
};

var reset = function reset() {
  console.log("reset");
};
var count = 0;

var template4 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count,
    " "
  ),
  React.createElement(
    "button",
    { id: "my-id",
      className: "button",
      onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { id: "my-id",
      className: "button",
      onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { id: "my-id",
      className: "button",
      onClick: reset },
    "Reset"
  )
);

ReactDOM.render(template4, appRoot);
