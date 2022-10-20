var result = "";

function display(value) {
    document.getElementById("result").value += value;
}

function add(a, b) {
    result = a + b;
}

function subtract(a, b) {
    result =  a - b;
}

function multiply(a, b) {
    result = a * b;
}

function divide(a, b) {
    result = a / b;
}

function operate(a, b) {
    add(a, b);
    console.log(result);
}