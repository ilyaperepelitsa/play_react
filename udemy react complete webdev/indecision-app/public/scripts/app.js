"use strict";

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(2, 4, 500));
var user = {
  name: "Andrew",
  cities: ["Philadelphia", "New Y"]
};
