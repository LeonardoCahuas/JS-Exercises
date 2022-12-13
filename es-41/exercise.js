const user = {
  id: 1,
  name: "John",
  age: 25,
};

localStorage.setItem('user', JSON.stringify(user));

let data = JSON.parse(localstorage.getItem("user"));

console.log(data);

