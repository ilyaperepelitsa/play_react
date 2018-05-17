"use strict";

// live-server public

console.log("App.js is running");

// var template =
//     <div>
//       <h1>This is JSX. Does this change?</h1>
//       <p> Some paragraph</p>
//       <ol>
//         <li>Pew</li>
//         <li>PEWPEWPEW</li>
//       </ol>
//     </div>
var userName = "Ilya";
var userAge = 29;
var userLocation = "New York, NY";

var user = {
  name: "Ilya Perepelitsa",
  age: 29

};
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    userName
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    userAge
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    userLocation
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
