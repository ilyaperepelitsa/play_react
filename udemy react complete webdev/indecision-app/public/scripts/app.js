"use strict";

// const add = function(a, b){
//   console.log(arguments)
//   return a + b;
// }
//
// console.log(add(2, 4, 500))
// const user = {
//   name: "Andrew",
//   cities: ["Philadelphia", "New York", "Dublin"],
//   printPlacesLived(){
//     return this.cities.map((city) => city + " pewpew");
//     // this.cities.forEach((city)=>{
//     //   console.log(this.name + " has lived in " + city);
//     // })
//   }
// }
//
// console.log(user.printPlacesLived())
var multiplier = {
  numbers: [1.0, 23.0, 5324.0, 2.0, 1245],
  multiplyBy: 2.0,
  multiply: function multiply() {
    return this.numbers.map(function (number) {
      return number * self.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
