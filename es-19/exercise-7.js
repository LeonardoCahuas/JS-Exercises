class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  set setage(val){
    this.age = val;
  }
  get getAge(){
    return this.age;
  }
  set FirstName(first){
    this.firstName = first;
  }
  get getfirstName(){
    return this.firstName;
  }
  set LastName(last){
    this.lastName = last;
  }
  get getlastName(){
    return this.lastName;
  }
  get fullName(){
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);