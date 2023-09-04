let firstNumber = '';
let operator = '';
let lastNumber = '';
let result = '';
const digit = document.querySelector('.digit')
const buttons = document.querySelectorAll('button')
const operatorBtn = document.querySelectorAll('.operator button')
const display = document.querySelector('.display');

buttons.forEach(btn => {
    btn.addEventListener('click', function(e){
        let text = e.target.textContent
    
        if(!parseFloat(text) && text != '.' && text != '=' && text != 'Clear' && text != 'Delete' && text != '0'){
            operate(text)
        }
        else if (text == 'Clear'){
            clear();
        }
        else if (text == 'Delete'){
            displayText = display.textContent;
            displayAfter = displayText.slice(0, -1);
            display.textContent =  displayAfter;
            if (firstNumber != '' && lastNumber != ''){
                lastNumber = lastNumber.slice(0, -1);
            }
            else if (operator != '' && lastNumber == ''){
                operator = operator.slice(0, -1);
            }
            else if (firstNumber != '' && operator == ''){
                firstNumber = firstNumber.slice(0, -1);
            }
        }
        else if (text == '='){
            result = evaluate(operator, parseFloat(firstNumber), parseFloat(lastNumber))
            display.textContent = result;
            firstNumber = result;
            operator = '';
            lastNumber = '';
        }
        else{
            if (result != '' && operator == ''){
                clear()
            }
            if(operator == ''){
                number1(text)
            }
            else if(firstNumber != '' && operator != ''){
                number2(text);
            }
        }
    })
})

function number1(input){
    if((input == '.' && firstNumber == '') || (input == '.' && firstNumber.includes('.'))){
        return;
    }
    else if (input == '='){
        return;
    }
    else{
        firstNumber += input;
        display.textContent += input
    }
}

function number2(input){
    if((input == '.' && lastNumber == '') || (input == '.' && lastNumber.includes('.'))){
        return;
    }
    else if(input == '='){
        return;
    }
    else{
        lastNumber += input;
        display.textContent += input;
    }
}

const add = (num1, num2) => {
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1/num2;
}

function evaluate(op,num1,num2){
    switch(op){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'x':
            return multiply(num1, num2);
            break;
        case ':':
            return divide(num1, num2);
            break;
    }

}

const operate = (input) => {
    text = display.textContent;
    if(firstNumber == ''){
        return;
    }
    else if(lastNumber != ''){
        display.textContent = evaluate(operator, parseFloat(firstNumber), parseFloat(lastNumber));
        firstNumber = evaluate(operator, parseFloat(firstNumber), parseFloat(lastNumber));
        lastNumber = '';
        operator = input
        display.textContent += input
    }
    else if(operator != '' ){
        display.textContent = text.slice(0, -1);
        operator = input;
        display.textContent += input
        console.log('a')
    }
    else{
        operator = input;
        display.textContent += input;
    }
    
}

const clear = () =>{
    display.textContent = '';
    firstNumber = ''
    operator = ''
    lastNumber = ''
    result = '';
}
