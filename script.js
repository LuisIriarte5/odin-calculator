let a = add(1,2,3,4);
let s = substract(5,4);
let m = multiply(3,4,5);
let d = divide(10,5);

let op = operate(5,4,'+');

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

let firstNumber;
let secondNumber;
let operator;

let pressedButton = document.querySelectorAll('button');
pressedButton.forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log(event.srcElement.textContent);
    });
});