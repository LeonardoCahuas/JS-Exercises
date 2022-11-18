const number = 15;

let promise = new Promise((resolve, reject) => {
    if (number > 10){
        resolve(number);
    }else{
        reject(number);
    }
})

console.log(promise);

promise
  .then((number) => console.log(number))
  .catch((number) => console.error("numero troppo basso"))

