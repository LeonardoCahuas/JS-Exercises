let isLoggedIn = true;
//async function promise(isLoggedIn){
//    return new Promise((resolve, reject) => {
let promise = new Promise((resolve, reject) => {
        if (isLoggedIn === true){
            resolve(Math.random())
        } else{
            reject(new Error("not logged in"))
        }
    })


async function verifyNumber(){
    let numb = await promise;
    return new Promise((resolve, reject) => {
        if(numb > 0.5){
            resolve({name: "John", age: 24})
        }else{
            reject(new Error("low number"))
        }
    })
}

promise
   .then((val) => console.log(val))   
   .then(verifyNumber)
   .then((obj) => console.log(obj)) 
   .catch((err) => console.error(err))
   .finally(()=> console.log("verification completed"))


