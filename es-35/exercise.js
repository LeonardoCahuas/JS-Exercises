let printHello = () => console.log("hello")
//function printHello(){
//    console.log("hello")
//}
// Callback must be  an arrow function because normal functions needs return keyword 
// Instead in arrow function it can be omitted 
function repeatHello(callback){
    id = setInterval(callback, 1000);
    setTimeout(() => clearInterval(id), 5000);
}

repeatHello(printHello);