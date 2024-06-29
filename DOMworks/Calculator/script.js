
// function displayNumber(event){

//     let num=event.target.value;

//     document.querySelector("#result").value+=num

// }

function clearBox(){

    document.querySelector("#result").value=" "
}

function evaluvateExpression(event){

    let currentExpression=document.querySelector("#result").value

    let result=eval(currentExpression)

    document.querySelector("#result").value=result

}

function backSpace(event){

    let currentExpression=document.querySelector("#result").value

    let result=currentExpression.slice(0,-1)
    
    document.querySelector("#result").value=result

}

function displayNumber(event){

    const operators=["+","-","*","/","."]

    let textBox=document.querySelector("#result")

    // extractCurrentExpression

    let currentExpression=textBox.value;

    // extract displayNumber

    let displayNumber=event.target.value;

    let currentExpressionLastChar=currentExpression.slice(-1)

    if (operators.includes(displayNumber) && operators.includes(currentExpressionLastChar)){

        currentExpression=currentExpression.slice(0,-1)
    }

    textBox.value=currentExpression + displayNumber
}