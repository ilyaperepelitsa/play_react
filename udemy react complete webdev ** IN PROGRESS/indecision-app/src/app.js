
class Person {
  constructor(name = "adsa", age = 123){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi blah blah blah ${this.name}`;
  }
}


class Student extends Person {
  constructor(name, age, major){
    super
  }

}
