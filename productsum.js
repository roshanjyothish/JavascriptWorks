var number=153;

sum=0;

while(number !=0){

    let digit=number%10;

    cube=digit**3;

    sum=sum+cube
    
    number=Math.floor(number/10)

    
}

console.log(sum);




