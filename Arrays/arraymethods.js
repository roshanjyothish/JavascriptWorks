// ================ARRAY METHODS================

// push(object)-add object in the end

// pop()-remove object from the end

// shift()-remove object from the begining

// unshift()-add object to the begining

// includes()-if it includes it print true else false

// =========================================================================
var colors=["red","green","blue"]

// ===============================push======================================

// colors.push("yellow")

// console.log(colors);

// ===============================pop==========================================

// colors.pop()

// console.log(colors);

// ==============================unshift=======================================

// colors.unshift("black")

// console.log(colors);

// ==============================shift==========================================

// colors.shift()

// console.log(colors);

// ==============================includes=======================================

// console.log(colors.includes("red"));

// =====================================================================



// ===================================================================================
// .map()

var arr=[10,11,12,13,14,15,16]

var result=arr.map((num)=>num+2)

// console.log(result);


var cube=arr.map((num)=>num**3)

// console.log(cube);


var square=arr.map((num)=>num**3)

// console.log(square);


// if num < 12 num-1
// if num > 12 num+1

var changeNum=arr.map((num)=> num > 12 ? num + 1 : num - 1 )

console.log(changeNum);

// ===================================================================================