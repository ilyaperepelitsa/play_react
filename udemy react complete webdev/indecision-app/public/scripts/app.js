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
    var pew = this.cities.map(function (city) {
      return city;
    });

    // this.cities.forEach((city)=>{
    //   console.log(this.name + " has lived in " + city);
    // })
  }
};

console.log(user.printPlacesLived());
