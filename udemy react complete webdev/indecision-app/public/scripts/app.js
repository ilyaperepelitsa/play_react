"use strict";

// const square = function(x){
//   return x * x
// }
// //
// // const squareArrow = (x) => {
// //   return x*x
// // }
//
// const squareArrow = (x) => x*x
//
// console.log(square(4.25))
// console.log(squareArrow(12))

// const getFirstName = (fullname) => {
//   return fullname.split(" ")[0]
// }

var getFirstName = function getFirstName(fullname) {
  return fullname.split(" ")[0];
};

console.log(getFirstName("Pewpew Hendriks"));
