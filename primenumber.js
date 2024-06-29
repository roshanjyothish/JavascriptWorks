var number=11;

var isPrime=true;

for(let i=2; i<number; i++){

   if (number % i == 0){

        isPrime=false
   }
}

console.log(isPrime);