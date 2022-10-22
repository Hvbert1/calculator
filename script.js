var a = null;
var b = "";
var valueb = "";
var result ="";
const numberButtons = document.querySelectorAll('#digits');
const operationsButtons = document.querySelectorAll('#btns');
const equalsButton = document.querySelector('.equals');
const divideButton = document.querySelector('.equals');
const timesButton = document.querySelector('.equals');
const equalsButton = document.querySelector('.equals');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');


class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand  = currentOperand;
    }
}
function display(value) {
    document.getElementById("result").value += value;
    valueb += value;
}

function store() {
    if(a == null) {
        a = valueb.slice(0, -1);
        console.log("if a: " + a);
        valueb = "";
    }
    else {
        b = valueb.slice(0, -1);
        console.log("if b: " + b);
        valueb = "";
    }
}

function add() {
    result = parseInt(a) + parseInt(b);
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

function operate() {
    add();
    console.log(result);
    a = result;
}