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
let newNumberString = "";
let operator;
let numbers = [];
let solution = 0;

function calculate() {
  // console.log("calculate()");
  num2 = parseFloat(newNumberString);
  // console.log(`num2: ${num2}`);
  solution = operate(operator, num1, num2);
  // console.log(`solution: ${solution}`);
  num1 = solution;
  // console.log(`num1: ${num1}`);
  newNumberString = solution;
  // console.log(`displayValue: ${displayValue}`);
  updateDisplay(newNumberString);
}


function operate(a, b) {
  // console.log("operate()");
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
  // console.log("setOperator()");
  operator = event.target.dataset.operator;
  // console.log(`operator: ${operator}`);
  if (newNumberString !== "") {
    numbers.push(parseFloat(newNumberString));
  }

  if (numbers.length > 1) {
    solution = operate(numbers[0], numbers[1]);
    numbers = [solution];
    updateDisplay(solution)
  } 
  newNumberString = "";
}

function addDigit(event) {
  // console.log("addDigit()");
  newNumberString += event.target.dataset.digit;
  // console.log(`displayValue: ${displayValue}`);
  updateDisplay(newNumberString);
}

function updateDisplay(value) {
  display.textContent = value;
}



