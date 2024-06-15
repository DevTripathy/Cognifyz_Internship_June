const calculateBtn = document.querySelector('#calculate-btn')
const resetBtn = document.querySelector('#reset-btn')
const resultEl = document.querySelector('#result')
const inputEl_1 = document.querySelector('#num1')
const inputEl_2 = document.querySelector('#num2')
const formElement = document.querySelector('#form')


formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const value_1 = parseInt(inputEl_1.value);
    const value_2 = parseInt(inputEl_2.value);

    if(value_1 && value_2) {
        const result = value_1 + value_2;
        resultEl.innerHTML = `Sum = ${result}` 
    }

    else {
        alert("Plese enter the two number to calculate the sum.")
    }
})


formElement.addEventListener('reset', () => {
    resultEl.innerHTML = ""
})