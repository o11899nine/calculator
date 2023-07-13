const digitButtons = document.querySelectorAll(".digit-btn");
const display = document.querySelector(".display");
const equalsButton = document.getElementById("equals-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

digitButtons.forEach(button => {
  button.addEventListener("click", addDigit)
});
equalsButton.addEventListener("click", calculate);

operatorButtons.forEach(button => {
  button.addEventListener("click", setOperator)
});

// Math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Global variables
let displayValue = "";
let operator;
let num1;
let num2;
let solution;


function calculate() {
  console.log("calculate()");
  num2 = parseFloat(displayValue);
  console.log(`num2: ${num2}`);
  solution = operate(operator, num1, num2);
  console.log(`solution: ${solution}`);
  num1 = solution;
  console.log(`num1: ${num1}`);
  displayValue = solution;
  console.log(`displayValue: ${displayValue}`);
  updateDisplay(displayValue);
}


function operate(operator, a, b) {
  console.log("operate()");
  switch (operator) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
  }
}


function setOperator(event) {
  console.log("setOperator()");
  operator = event.target.dataset.operator;
  console.log(`operator: ${operator}`);
  num1 = parseFloat(displayValue);
  console.log(`num1: ${num1}`);
  displayValue = "";
  console.log(`displayValue: ${displayValue}`);
}

function addDigit(event) {
  console.log("addDigit()");
  displayValue += event.target.dataset.digit;
  console.log(`displayValue: ${displayValue}`);
  updateDisplay(displayValue);
}

function updateDisplay(value) {
  display.textContent = value;
}



