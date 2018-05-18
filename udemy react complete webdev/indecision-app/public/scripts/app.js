"use strict";

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(2, 4, 500));
var user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    // const that = this;
    // console.log(this.name);
    // console.log(this.cities);
    this.cities.forEach(function (city) {
      console.log(_this.name + " has lived in " + city);
    });
  }

  // console.log(user.printPlacesLived())

};
