const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);
person2.firstName = "Simon";
// Modify the property `firstName` of the `person2` in "Simon".

// Utilizzando person2 = person1 a person2 viene assegnato il contenuto della stessa cella di memoria
//di person1, quindi modificando uno dei due entrambi subiranno il cambiamento.
//con il metodo assign il contenuto dell'oggetto person1 viene assegnato ad un nuovo spazio di memoria vuoto
 
console.log(person1);
console.log(person2);
