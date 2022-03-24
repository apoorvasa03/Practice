
class Calculator{
    constructor(perviousOperandTextElement, currentOperandTextElement){
        this.perviousOperandTextElement = perviousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = null
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return;

        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':  
                computation = prev - current
                break
            case '*':  
                computation = prev * current
                break
            case '/':  
                computation = prev / current
                break
            default:
                return  
        }

        this.currentOperand = computation
        this.previousOperand = ''
        this.operation = undefined
    }


    getDisplayNumber(number){
       let stringNumber = number.toString()
       const integerDigit = parseFloat(stringNumber.split('.')[0])
       const decimalDigit = stringNumber.split('.')[1]
        let integerDisplay
       if(isNaN(integerDigit)){
           integerDisplay = ''
       }else{
           integerDisplay = integerDigit.toLocaleString('en', {maximumFractionDigits: 0})
       }

       if(decimalDigit != null){
           return `${integerDisplay}.${decimalDigit}`
       }else{
           return integerDisplay
       }
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            this.perviousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand) } ${this.operation}`
        }else{
            this.perviousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand) }`
        }
    }
}

let numberButtons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-operation]')
let equalsButton = document.querySelector('[data-equal]')
let allClearButton = document.querySelector('[data-all-clear]')
let deleteButton = document.querySelector('[data-delete]')
let currentOperandTextElement= document.querySelector('[data-current-operand]')
let perviousOperandTextElement = document.querySelector('[data-previous-operand]')


let calculator  = new Calculator(perviousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})
