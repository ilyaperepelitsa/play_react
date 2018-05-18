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
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Pew"
    ),
    React.createElement(
      "li",
      null,
      "PEWPEWPEW"
    )
  )
);

var userName = "Ilya";
var userAge = 29;
var userLocation = "New York, NY";

var user = {
  name: "Ilya Perepelitsa",
  age: 29,
  location: "New York, NY"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age (grown-up): ",
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById("app");

var post = {
  title: "This is a tutorial nonsense",
  subtitle: "I wouldn't really look into it. It's pretty long",
  // subtitle: "I wouldn't really look into it. It's pretty long",
  some_num: 30
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
  )
);

ReactDOM.render(template3, appRoot);
