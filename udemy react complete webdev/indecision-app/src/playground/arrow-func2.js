const add = function(a, b){
  console.log(arguments)
  return a + b;
}

console.log(add(2, 4, 500))
const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived: function(){
    // const that = this;
    // console.log(this.name);
    // console.log(this.cities);
    this.cities.forEach(=>{
      console.log(this.name + " has lived in " + city);
    })
  }
}

console.log(user.printPlacesLived())
