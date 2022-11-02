function sumUntil(maxValue) {
  let sum = 0;
  for(let i = 1; i <= maxValue; i++){
    if(i == maxValue){
      return sum + i;
    }
    else{
      sum = sum + i;
    }
  }
}

console.log(sumUntil(5));
