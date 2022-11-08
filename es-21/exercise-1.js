let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
let [n1, n2] = [num2, num1] ;
num1 = n1;
num2 = n2;

console.log('After swap: ', num1, num2); // After swap: 20 10
