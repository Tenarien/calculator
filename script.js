let num1 = '';
let num2 = '';
let operator = '';
let solution = '';

let currentOperation = 1;
let currentNumber = 1;

const divideError = 'Error you cannot divide by 0';

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const equals = document.querySelector(".equal");
const signs = document.querySelectorAll(".sign")
const clear = document.querySelector(".clear");


const add = function(num1, num2) {
    return num1 + num2
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operator) {
    if(operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operate === '/') {
        return divide(num1, num2);
    }
};



digits.forEach((digit) => {
    digit.addEventListener("click", () => {

        currentOperation = 1;

        if(currentNumber === 1) {
            num1 = num1 + digit.innerHTML;
            display.innerHTML = num1;
        } else if (currentNumber === 2) {
            if(divideBy0(operator, num2)) {
                return;
            }
            num2 = num2 + digit.innerHTML;
            display.innerHTML = num2;
        }

        
    });
});

signs.forEach((sign) => {
    sign.addEventListener("click", () => {
        if(currentOperation === 2) {
            num1 = parseInt(num1)
            num2 = parseInt(num2)
            solution = operate(num1, num1, operator);
            display.innerHTML = solution;
            num1 = solution;
            operator = sign.innerHTML;
            return;
        }
        if(currentNumber === 1) {
            operator = sign.innerHTML;
            currentOperation = 2;
            currentNumber = 2;
        } else if (currentNumber === 2) {
            if(divideBy0(operator, num2)) {
                return;
            }
            num1 = parseInt(num1)
            num2 = parseInt(num2)
            solution = operate(num1, num2, operator);
            display.innerHTML = solution;
            num1 = solution;
            num2 = '';
            operator = sign.innerHTML;
        }
    });
});

clear.addEventListener("click", () => {
    num1 = '';
    num2 = '';
    currentNumber = 1;
    currentOperation = 1;
    operator = '';
    solution = '';
    display.innerHTML = '';
});

equals.addEventListener("click", () => {
    if(num1 === '' || num2 === '' || operator === '') {
        return
    }
    if(divideBy0(operator, num2)) {
        return;
    }
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    solution = operate(num1, num2, operator);
    number_1 = solution;
    num2 = '';
    currentOperation = 1;
    currentNumber = 2;
    display.innerHTML = solution;
});

const divideBy0 = function(operator, currentDivisor) {
    if(operator === '/' && currentDivisor === '0') {
        display.innerHTML = divideError;
        currentDivisor = '';
        return true;
    }
    return false;
}







