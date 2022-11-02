function printName(){
    helloName = "Hello Jhon";
    
    return inner();
}
function inner(){
    return helloName;
}
console.log(printName());