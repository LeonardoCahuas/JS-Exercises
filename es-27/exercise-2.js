const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
const personInfo = {...person};
delete personInfo.id;
const id = person.id;


console.log(id, personInfo);