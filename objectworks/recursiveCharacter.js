// var text="ABCBDDE"
// find first recursive character

var text="ABCBDDE"

var wc={}

for(let ch of text){

    if(ch in wc){

        console.log(ch,"is the first recursive character");

        break
    }
    else{

        wc[ch]=1
    }
}