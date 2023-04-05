const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const inputNumber = (number) => {
 if (currentNumber === '0') {
    currentNumber = number
 } else {
    currentNumber += number
 }
}

const operator = document.querySelectorAll(".operator")
operator.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case'+':
            result = parseFloat (prevNumber) + parseFloat (currentNumber)
            break
        case'-':
            result = parseFloat (prevNumber) - parseFloat (currentNumber)
            break
        case'*':
            result = parseFloat (prevNumber) * parseFloat (currentNumber)
        case'/':
            result = parseFloat (prevNumber) / parseFloat (currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}