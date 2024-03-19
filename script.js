let num1 = '';
let num2 = '';
let operator = '';
let solution = '';

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const equal = document.querySelector(".equal");
const signs = document.querySelectorAll(".sign")
const clear = document.querySelector(".clear");


function add(num1, num2) {
    return num1, num2
};

function subtract(num1, num2) {
    solution = num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operator) {
    if(operator === '+') {
    } else if (operator === '-') {
        subtract(num1, num2);
    } else if (operator === '*') {
        multiply(num1, num2);
    } else if (operate === '/') {
        divide(num1, num2);
    }
};



digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        num1 = num1 + digit.innerHTML;
        display.innerHTML = num1;
    });
});

signs.forEach((sign) => {
    sign.addEventListener("click", () => {
        operator = sign.innerHTML;
    });
});

clear.addEventListener("click", () => {
    num1 = '';
    num2 = '';
    operator = '';
    solution = '';
    display.innerHTML = '';
});

function buttonClick(button) {
    display.textContent += parseInt(button);
    if(button === "clear") {
        while(display.firstChild) {
            display.removeChild(display.firstChild);
            num1 = "";
            num2 = "";
            operator = "";
        }
    }
    if(button === "+" || button === "-" || button === "/" || button === "*") {
        operator = button;
    }
    if(num1 === "" && button === "+" || button === "-" || button === "/" || button === "*") {
        while(display.firstChild) {
            num1 += parseInt(display.textContent);
            display.removeChild(display.firstChild);
        }
    }

    if(num1 > 0 && button === "+" || button === "-" || button === "/" || button === "*" || button === "=") {
        while(display.firstChild) {
            num2 += parseInt(display.textContent);
            display.removeChild(display.firstChild);
        }
    }
    
    if(button === "=" && num1 !== "" && num2 !== "" && operator !== "") {
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        console.log(num1)
        console.log(num2)
        console.log(operator)
        operate(num1, num2, operator);
    }
}






