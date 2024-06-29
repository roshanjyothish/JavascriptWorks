var text="THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"

var alphabets="QWERTYUIOOOPASDFGHJKLZXCVBNM"

var isPanagram=true;

for(let ch of alphabets){

    if(!text.includes(ch)){

        isPanagram=false
        break

    }

}

console.log(isPanagram);