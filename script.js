
let a = add(1,2,3,4);
let s = substract(5,4);
let m = multiply(3,4,5);
let d = divide(10,5);

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