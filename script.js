const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount')
const billInput = document.getElementById('bill');
const countInput = document.getElementById('count')
const tipSelection = document.querySelectorAll('.tip-percent')
const customTip = document.getElementById('custom-tip')
const resetButton = document.getElementById('reset-button')
const calculateButton = document.getElementById('calculate-button')

//Computation Variables
let bill = 0
let tip = 0
let count = 0


//Assign Tip Values
tipSelection.forEach(selection => {
    selection.addEventListener('click', () => {
        let tipVal = selection.getAttribute('tip')
        tip = tipVal / 100
    })
})

//Calculate Button Function
calculateButton.addEventListener('click',() => {
    //Input Validations
    if (!billInput.value) {
        alert('No Value fo Bill') 
        return 
    } else if (!countInput.value) {
        alert('Count must not be 0')
        return
    } else if (customTip.value) {
        tip = Number(customTip.value) / 100
    }
    bill = Number(billInput.value)
    count = Number(countInput.value)
    console.log(tip)
    console.log(bill)
    console.log(count)
    calculate(bill, tip, count)
})

//Calculation Function
const calculate = (bill,tip,count) => {
    tipAmount.textContent = `$ ${bill * tip}`
    totalAmount.textContent = `$ ${(bill / count) * tip}`
}

resetButton.addEventListener('click', ()=> {
    resetComputation()
})

//Reset Function
const resetComputation = () => {
    bill = 0
    count = 0
    tip = 0
    tipAmount.textContent = `$0`
    totalAmount.textContent = `$0`
}

