const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const removeCharacterButton = document.querySelector('[data-removeCharacter]')
const allClearButton = document.querySelector('[data-allClear]')
const plusMinusButton = document.querySelector('[data-plusMinus]')
const previousOperand = document.querySelector('[data-previousOperand]')
const currentOperand = document.querySelector('[data-currentOperand]')
const allButtons = document.querySelectorAll('button')

const appendNumber = function(numb) { currentOperand.innerHTML += (numb === '.' && currentOperand.innerHTML.indexOf('.') >= 0 ? '' : numb); }
const changeSign = function() { currentOperand.innerHTML *= -1; }
const clearAll = function() {
    previousOperand.innerHTML = '';
    currentOperand.innerHTML = '0';
}
const removeCharacter = function() { currentOperand.innerHTML = currentOperand.innerHTML.slice(0, -1); } // requires editing
const operate = function() { console.log('Operation has been changed'); }
const equals = function() { console.log('Total'); }

numberButtons.forEach( element => element.addEventListener('click', () => appendNumber (element.innerHTML)) )
operationsButtons.forEach( element => element.addEventListener('click', operate) )
equalsButton.addEventListener('click', equals)
removeCharacterButton.addEventListener('click', removeCharacter)
allClearButton.addEventListener('click', clearAll)
plusMinusButton.addEventListener('click', changeSign)
