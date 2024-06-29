var number=153;

var original=number;

var total=0;

while(number !=0){

    let digit=number%10;

    let cube=digit**3

    total=total+cube
    
    number=Math.floor(number/10)

}

console.log(original==total ? "amstrong" : "not amstrong");




