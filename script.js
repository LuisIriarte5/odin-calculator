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

function numberButton (value) {
    if (!isSecond) {
        firstNumber.push(value);
        screenContent.textContent = firstNumber.join('');
    } else {
        secondNumber.push(value);
        screenContent.textContent = secondNumber.join('');
    }
}

function operatorButton (op) {
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
    operator = op;
    isSecond = true;
    isNegative = false;
    hasDot = false;
}

function equalButton () {
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
    isNegative = false;
    hasDot = false;
}

function clearButton () {
    firstNumber = [];
    secondNumber = [];
    operator = undefined;
    isSecond = false;
    isNegative = false;
    hasDot = false;
    screenContent.textContent = 0;
}

function signButton () {
    if (isNegative) {
        isNegative = false;
        // screenSign.textContent = '';
        if (isSecond) {
            secondNumber.shift('-');
            screenContent.textContent = secondNumber.join('');
        } else {
            firstNumber.shift('-');
            screenContent.textContent = firstNumber.join('');
        }
    } else {
        isNegative = true;
        // screenSign.textContent = '-';
        if (isSecond) {
            secondNumber.unshift('-');
            screenContent.textContent = secondNumber.join('');
        } else {
            firstNumber.unshift('-');
            screenContent.textContent = firstNumber.join('');
        }
    }
}

function deleteButton() {
    if (isSecond) {
        deleted = secondNumber.splice(-1);
        screenContent.textContent = secondNumber.join('');
    } else {
        deleted = firstNumber.splice(-1);
        screenContent.textContent = firstNumber.join('');
    }
    if(deleted[0] === '.') {
        hasDot = false;
    }
}

function dotButton() {
    if (!hasDot) {
        hasDot = true;
        if (isSecond) {
            secondNumber.push('.');
            screenContent.textContent = secondNumber.join('');
        } else {
            firstNumber.push('.');
            screenContent.textContent = firstNumber.join('');
        }   
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

function buttonRecognizer(event) {
    switch (event.srcElement.className) {
        case 'number':
            numberButton(event.srcElement.textContent);
            break;
        case 'operator':
            operatorButton (event.srcElement.textContent);
            break;
        case 'equal':
            equalButton ();
            break;
        case 'clear':
            clearButton();
            break;
        case 'delete':
            deleteButton();
            break;
        case 'sign':
            signButton();
            break;
        case 'dot':
            dotButton();
            break;
    }
}

let firstNumber = [0];
let secondNumber = [0];
let operator;
let isSecond = false;
let isNegative = false;
let hasDot = false;
let result;

const screen = document.querySelector('#display');
const screenContent = document.createElement('div');
const screenSign = document.createElement('div');
screenContent.textContent = 0;
screenSign.textContent = '';
screen.appendChild(screenSign);
screen.appendChild(screenContent);

let pressedButton = document.querySelectorAll('button');
pressedButton.forEach(item => item.addEventListener('click', buttonRecognizer));