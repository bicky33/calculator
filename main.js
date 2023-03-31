const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear-all');
const operators = document.querySelectorAll('.operator');
const result = document.querySelector('.result');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.percentage');

let prevNumber = '';
let currentNumber = '';
let op = '';

numbers.forEach(element => {
    element.addEventListener('click', numberEvent);
});

operators.forEach(element => {
    element.addEventListener('click', operate)
});

clear.addEventListener('click', clearAll);

result.addEventListener('click', resultOperation);

decimal.addEventListener('click', decimalInput);

percentage.addEventListener('click', percentageInput);

function percentageInput() {
    updateScreen(this.value);
    if (currentNumber !== '' || currentNumber !== '0') {
        currentNumber = `${parseFloat(currentNumber) * 0.01}`;
    }
    
}
function decimalInput() {
    updateScreen(this.value);
    currentNumber += '.';
}

function numberEvent() {
    updateScreen(this.value);
    currentNumber += this.value;
}

function updateScreen(value) {
    screen.value += value;
}

function resultScreen(value) {
    screen.value = value
}

function operate() {
    prevNumber = screen.value;
    currentNumber = '';
    op = this.value;
    updateScreen(this.value);
    // opButtonStatus(true);
}

function opButtonStatus(value) {
    operators.forEach(element => {
        element.disabled = value;
    });
}

function clearAll(){
    screen.value = '';
}

function checkNaN(value) {
    return isNaN(value) ? 'invalid' :  value;
}

function resultOperation() {
    let result = null;
    // opButtonStatus(false);
    switch (op) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            result = checkNaN(result);
            resultScreen(result);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            result = checkNaN(result);
            resultScreen(result);
            break;
        case '×':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            result = checkNaN(result);
            resultScreen(result);
            break;
        case '÷':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            result = checkNaN(result);
            resultScreen(result);
            break;
        default:
            resultScreen('invalid');
            break;
    }
    
}