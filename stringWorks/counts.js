var text="pneumonoultramicroscopicsilicovolcanoconiosis"

var vowels="aeiou";

var v_count=0;

var c_count=0;


for(let ch of text){

    if(vowels.includes(ch)){

        v_count+=1

    }
    else{

        c_count+=1
    }

}

console.log("vowel count",v_count);
console.log("consonant count",c_count);
console.log("total characters",text.length);



