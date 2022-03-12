const numberButtons = document.querySelectorAll('[data-number]') /*const = variable*/
//console.log(numberButtons);

const operationsButtons = document.querySelectorAll('[data-operation]')
//console.log(operationsButtons)

const equalsButton = document.querySelector('[data-equals]')
//console.log(equalsButton)

const deleteButton = document.querySelector('[data-delete]')
//console.log(deleteButton)

const allClearButton = document.querySelector('[data-allClear]')
//console.log(allClearButton)

const plusMinusButton = document.querySelector('[data-plusMinus]')
//console.log(plusMinusButton)

const previousOperand = document.querySelector('[data-previousOperand]')
//console.log(previousOperand)

const currentOperand = document.querySelector('[data-currentOperand]')
//console.log(currentOperand)

const allButtons = document.querySelectorAll('button')
//console.log(allButtons)

class Calculator {
    constructor(previousOperandText,currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
    };
    appendNumber(numb) {
        const curr = this.currentOperandText
        if (numb === '.' && curr.indexOf('.') >= 0) {
            numb = ''
        }
        this.currentOperandText += numb;
        this.updateDisplay;
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
        previousOperand.innerHTML = this.previousOperandText;
        currentOperand.innerHTML = this.currentOperandText;
    }
}

const calculator = new Calculator('','0')
numberButtons.forEach(element =>
    element.addEventListener('click', () => calculator.appendNumber (element.innerHTML))
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


// numberButtons.forEach(element =>
//     element.addEventListener('click', () => console.log(element.innerHTML))
// )
