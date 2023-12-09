function add (...array) {
    return array.reduce((total, item) => total+item,0);
}

function substract (...array) {
    return array.reduce((total, item) => total-item);
}

function multiply (...array) {
    return array.reduce((total, item) => total*item,1);
}

function divide (...array) {
    return array.reduce((total, item) => total/item);
}

function populateDisplay (value) {
    if (!isSecond) {
        firstNumber.push(value);
    } else {
        secondNumber.push(value);
    }
    screenContent.textContent += value;
}

function operate (num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return substract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

let firstNumber = [];
let secondNumber = [];
let operator;
let isSecond = false;

let pressedButton = document.querySelectorAll('button');
pressedButton.forEach((item) => {
    item.addEventListener('click', (event) => {
        switch (event.srcElement.className) {
            case 'number':
                console.log('number');
                populateDisplay(event.srcElement.textContent);
                break;
            case 'operator':
                operator = event.srcElement.textContent;
                isSecond = true;
                screenContent.textContent = '';
                console.log('operator');
                break;
            case 'equal':
                let res = operate(Number(firstNumber.join('')),Number(secondNumber.join('')),operator);
                screenContent.textContent = res;
                console.log('equal');
                break;
            case 'clear':
                console.log('clear button');
                break;
        }
        // screenContent.textContent = event.srcElement.textContent;
    });
});

const screen = document.querySelector('#display');
const screenContent = document.createElement('p');
screen.appendChild(screenContent);
