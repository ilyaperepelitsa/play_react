const add = function(a, b){
  console.log(arguments)
  return a + b;
}

console.log(add(2, 4, 500))
const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived(){
    const pew = this.cities.map((city) => return city);

    this.cities.forEach((city)=>{
      console.log(this.name + " has lived in " + city);
    })
  }
}

console.log(user.printPlacesLived())
