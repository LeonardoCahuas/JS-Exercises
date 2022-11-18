let printHello = () => console.log("hello")

function repeatHello(callback){
    id = setInterval(callback, 1000);
    setTimeout(() => clearInterval(id), 5000);
}

repeatHello(printHello);
