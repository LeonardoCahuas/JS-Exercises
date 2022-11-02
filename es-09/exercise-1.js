const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
keys = Object.keys(person);
values = Object.values(person)
// Print values of person using Object.keys
for (let i = 0; i<keys.length; i++){
  console.log(`${keys[i]}: ${values[i]}`);
}