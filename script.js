var a = null;
var b;
var curr = ""; //current value
var result = "";
var displayRes="";
var prevOperation = null;
var nextOperation;
var currOperation;

function display(value) {
    document.getElementById("result").value += value;
    curr += value;
}

function displayResult() {
    if(!isNaN(result)) {
        document.getElementById("result2").value = displayRes;
    }
}

function store() {
    if(a == null) {
        a = curr;
        curr = "";
    }
    else {
        b = curr;
    }
}

function storeOperation() {
    if(prevOperation == null) {
        prevOperation = currOperation;
    }
    else {
        nextOperation = currOperation;
    }
}

function operate() {
    if(prevOperation != undefined) {
        if(prevOperation == "plus") {
            add();
        }
        else if (prevOperation == "over") {
            divide();
        }
        else if (prevOperation == "minus") {
            subtract();
        }
        else if (prevOperation == "times") {
            multiply();
        }
    }
    console.log(result);
    displayRes = result;
}

function clear() {
    a = null;
    prevOperation = null;
    b = "";
    curr = "";
    result = "";
    operation2 = "";
    document.getElementById("result").value = "";
}

function add() {
    result = parseFloat(a) + parseFloat(b);
}

function subtract() {
    result = parseFloat(a) - parseFloat(b);
}

function multiply() {
    result = parseFloat(a) * parseFloat(b);
}

function divide() {
    result = parseFloat(a) / parseFloat(b);
    if(parseInt(a) % parseInt(b) == 0) {
        result = parseInt(a) / parseInt(b);
    } else {
        result = result.toFixed(3);
    }
}

function reset() {
    document.getElementById("result2").value = "";
    curr = "";
}

// const btnDigits = document.querySelectorAll('.digits')

// btnDigits.forEach(btn => {
//     btn.addEventListener('click', event => {
//         console.log(event.target.value);
//     });
//     check();
// });

function clearCurrent() {
    curr = ""; //current value
    document.getElementById("result").value = "";
}

const btnOperators = document.querySelectorAll('.btns')

btnOperators.forEach(btn => {
    btn.addEventListener('click', event => {
        if(prevOperation == null) {
            current_operation = event.target.id;
        }
        else {
            nextOperation = event.target.id;
        }
        store();
        operate();
        clearCurrent();
        displayResult();
    });
});