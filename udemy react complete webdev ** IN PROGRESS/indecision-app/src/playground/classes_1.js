
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
    super(name, age);
    this.major = major
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
  }

}
