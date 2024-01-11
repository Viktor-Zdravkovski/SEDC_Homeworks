// error message ne mi vlaga vo else codot ...
// decimali moze da stavi tocki kolku saka
// koristena literatura : google, youtube, w3schools, github, codepin, stack overflow i za hanmanot ista literatura


let calculatorHistory = 0;
let result = "0";
let prevousOperator;

let screen = document.getElementById('CalculatorResault');
let dot = document.getElementById('dot')

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerHTML = result;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            result = '0';
            calculatorHistory = 0;
            break;
        case '=':
            if (prevousOperator === null) {
                return
            }
            flushOperation(parseInt(result));
            prevousOperator = null;
            result = calculatorHistory;
            calculatorHistory = 0;
            break;
        case '◄':
            if (result.length === 1) {
                result = '0';
            } else {
                result = result.substring(0, result.length - 1);
            }
            break;
        case '.':
            result += '.';

            break;
        case '+':
        case '-':
        case 'X':
        case '/':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (result === '0') {
        return;
    }

    const intresult = parseInt(result);

    if (calculatorHistory === 0) {
        calculatorHistory = intresult;
    } else {
        flushOperation(intresult);
    }
    prevousOperator = symbol;
    result = '0';
}

function flushOperation(intresult) {
    if (prevousOperator === '+') {
        calculatorHistory += intresult;
    } else if (prevousOperator === '-') {
        calculatorHistory -= intresult;
    } else if (prevousOperator === 'X') {
        calculatorHistory *= intresult;
    } else if (prevousOperator === '/') {
        if (result = Infinity) {
            calculatorHistory = 0
            alert("Cant devide with 0")
        } else {
            calculatorHistory /= intresult;
        }
    } else if (prevousOperator == dot) {
        alert('zdravo')
    }
}

function appendToDisplay(input) {
    screen.value += input;
}

function handleNumber(numberString) {
    if (result === "0") {
        result = numberString;
    } else {
        result += numberString;
    }
}

function init() {
    document.querySelector('.CalculatorButtons').addEventListener('click', function (event) {
        buttonClick(event.target.innerText);
    })
}

init();
