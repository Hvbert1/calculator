var first = null;
var second = "";
var current = "";
var result ="";
var displayRes="";
var operation = "";

function operatePlus() {
    operation = "plus";
}
function operateMinus() {
    operation = "minus";
}
function operateDivide() {
    operation = "divide";
}
function operateTimes() {
    operation = "times";
}

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
    if(operation == "plus") {
        add();
    }
    else if (operation == "divide") {
        divide();
    }
    else if (operation == "minus") {
        subtract();
    }
    else if (operation == "times") {
        multiply();
    }
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

function subtract() {
    result = parseInt(first) - parseInt(second);
}

function multiply() {
    result = parseInt(first) * parseInt(second);
}

function divide() {
    result = parseInt(first) / parseInt(second);
}