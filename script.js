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
  num2 = parseFloat(displayValue);
  solution = operate(operator, num1, num2);
  num1 = solution;
  displayValue = solution;
  updateDisplay(displayValue);
}

function operate(operator, a, b) {
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
  if (num1 !== undefined) {
    console.log("there is a num1");
    calculate();
  }
  operator = event.target.dataset.operator;
  num1 = parseFloat(displayValue);
  displayValue = "";

  if (solution !== null) {
    
  }
}

function addDigit(event) {
  displayValue += event.target.dataset.digit;
  updateDisplay(displayValue);
}

function updateDisplay(value) {
  display.textContent = value;
}



