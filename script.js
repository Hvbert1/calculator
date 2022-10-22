var first = null;
var second = "";
var current = "";
var result ="";
var displayRes="";

function display(value) {
    document.getElementById("result").value += value;
    current += value;
}

function displayResult() {
    document.getElementById("result2").value = displayRes;
}

function store() {
    if(first == null) {
        first = current.slice(0, -1);
        console.log("if a: " + first);
        current = "";
    }
    else {
        second = current.slice(0, -1);
        console.log("if b: " + second);
    }
}

function operate() {
    add();
    console.log(result);
    display(result);
    displayRes = result;
    clear();
}

function clear() {
    first = null;
    second = "";
    current = "";
    result ="";
    document.getElementById("result").value = "";
    console.log('cleared');
}

function add() {
    result = parseInt(first) + parseInt(second);
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