function printName(){
    helloName = "Hello Jhon";
    
    console.log(inner());
}
function inner(){
    return helloName;
}
setTimeout(printName, 1000);