function printName(){
    helloName = "Hello Jhon";
    
    function inner(){
        return helloName;
    }

    console.log(inner());
}

setTimeout(printName, 1000);