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
const multiplier = {
  numbers : [10, 20, 1233, 352452, 1231323],
  multiplyBy : 2332221,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply())
