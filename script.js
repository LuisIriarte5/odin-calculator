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
        screenContent.textContent = firstNumber.join('');
    } else {
        secondNumber.push(value);
        screenContent.textContent = secondNumber.join('');
    }
}

function operate (num1, num2, operator = '+') {
    if (typeof num1 !== 'number') {
        num1 = Number(num1.join(''));
    }
    if (typeof num2 !== 'number') {
        num2 = Number(num2.join(''));
    }
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
            if (num2 === 0) {
                return 'Math ERROR!';
            }
            return divide(num1, num2);
            break;
    }
}

let firstNumber = [];
let secondNumber = [];
let operator;
let isSecond = false;
let result;

const screen = document.querySelector('#display');
const screenContent = document.createElement('p');
screenContent.textContent = 0;
screen.appendChild(screenContent);

let pressedButton = document.querySelectorAll('button');
pressedButton.forEach((item) => {
    item.addEventListener('click', (event) => {
        switch (event.srcElement.className) {
            case 'number':
                populateDisplay(event.srcElement.textContent);
                break;
            case 'operator':
                if (firstNumber.length === 0) {
                    firstNumber = 0;
                    screenContent.textContent = 0;
                }
                if (isSecond) {
                    res = operate(firstNumber, secondNumber,operator);
                    screenContent.textContent = res;
                    firstNumber = res;
                    secondNumber = [];
                }
                operator = event.srcElement.textContent;
                isSecond = true;
                break;
            case 'equal':
                if (firstNumber == []) {
                    firstNumber = 0;
                }
                if (secondNumber == []) {
                    secondNumber = 0;
                }
                res = operate(firstNumber, secondNumber, operator);
                screenContent.textContent = res;
                firstNumber = [];
                secondNumber = [];
                operator = undefined;
                isSecond = false;
                break;
            case 'clear':
                firstNumber = [];
                secondNumber = [];
                operator = undefined;
                isSecond = false;
                screenContent.textContent = 0;
                break;
        }
    });
});