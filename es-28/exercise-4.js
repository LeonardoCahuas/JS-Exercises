function sum(...numbers) {
  return numbers.reduce((sum, number)=>sum+number);
}

const numbers = [1, 2, 3];
console.log(sum(numbers));

/*

OPPURE

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));
*/