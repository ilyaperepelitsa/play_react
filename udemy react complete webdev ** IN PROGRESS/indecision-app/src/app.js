
class Person {
  constructor(name = "adsa", age = 123){
    this.name = name
  }
  getGreeting(){
    return `Hi blah blah blah ${this.name}`;
  }
}


class Student extends Person {

}
