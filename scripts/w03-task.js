/* LESSON 3 - Programming Tasks */
const addBtn = document.querySelector("#addNumbers");
const subtractBtn = document.querySelector("#subtractNumbers");
const multiplyBtn = document.querySelector("#multiplyNumbers");
const divideBtn = document.querySelector("#divideNumbers");

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){ return num1 + num2 }

function addNumbers(){
  document.querySelector("#sum").value = add(Number(document.querySelector("#add1").value), Number(document.querySelector("#add2").value))
}

/* Function Expression - Subtract Numbers */
const subtract = function(num1, num2){ return num1 - num2 }
const subtractNumbers = function(){
  document.querySelector("#difference").value = subtract(Number(document.querySelector("#subtract1").value), Number(document.querySelector("#subtract2").value))
}

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2
const multiplyNumbers = () => {
  document.querySelector("#product").value = multiply(Number(document.querySelector("#factor1").value), Number(document.querySelector("#factor2").value))
}

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => (divisor != 0) ? dividend / divisor : "Cannot divide by 0"
const divideNumbers = () => {
  document.querySelector("#quotient").value = divide(Number(document.querySelector("#dividend").value), Number(document.querySelector("#divisor").value))
}


/* Decision Structure */
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
document.getElementById("year").innerHTML = currentYear

/* ARRAY METHODS - Functional Programming */
const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
/* Output Source Array */
document.querySelector("#array").innerHTML = myArray

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = myArray.filter((num)=> num % 2 != 0)

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = myArray.filter((num)=> num % 2 === 0)

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = myArray.reduce((acc, currentValue)=> acc + currentValue, 0)

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = myArray.map((num)=> num * 2)

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = myArray.map((num)=> num * 2).reduce((sum, num)=> sum + num, 0)


// EVENT LISTENERS
addBtn.addEventListener("click", addNumbers)
subtractBtn.addEventListener("click", subtractNumbers)
multiplyBtn.addEventListener("click", multiplyNumbers)
divideBtn.addEventListener("click", divideNumbers)