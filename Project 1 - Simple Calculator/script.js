const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-allClear]')
const plusMinusButton = document.querySelector('[data-plusMinus]')
const previousOperand = document.querySelector('[data-previousOperand]')
const currentOperand = document.querySelector('[data-currentOperand]')
const allButtons = document.querySelectorAll('button')

class Calculator {
    #previousOperandText;
    #currentOperandText = '';
    constructor(previousOperandText,currentOperandText) {
        this.#previousOperandText = previousOperandText;
        this.#currentOperandText = currentOperandText;
    };
    get currentOperandText() {
        return this.#currentOperandText
    }
    appendNumber(numb) {
        const curr = currentOperand.innerHTML
        if (numb === '.' && curr.indexOf('.') >= 0) {
            numb = ''
        }
        currentOperand.innerHTML += numb;
    }
    changeSign() {
        console.log('The sign has been changed')
    }
    clearAll() {
        console.log('Everything has been cleared')
    }
    delete() {
        console.log('The last digit has been deleted')
    }
    operate() {
        console.log('Operation has been changed')
    }
    equals() {
        console.log('Total')
    }
    updateDisplay() {
        console.log(this.currentOperandText)
    }
}

const calculator = new Calculator('x','y')
numberButtons.forEach(element =>
    element.addEventListener('click', () => calculator.appendNumber(element.innerHTML))
)
operationsButtons.forEach(element =>
    element.addEventListener('click', calculator.operate)
)
equalsButton.addEventListener('click', calculator.equals)
deleteButton.addEventListener('click', calculator.delete)
allClearButton.addEventListener('click', calculator.clearAll)
plusMinusButton.addEventListener('click', calculator.changeSign)
allButtons.forEach(element =>
    element.addEventListener('click', calculator.updateDisplay)
)

numberButtons.forEach(element =>
    element.addEventListener('click', () => console.log(element.innerHTML))
)
