function sum(...numbers) {
    return numbers.reduce((sum, number) => sum + number);
}

console.log(sum(1, 2, 3, 4, 7));