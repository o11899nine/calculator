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
  calculate();
  operator = event.target.dataset.operator;
  
}

function addDigit(event) {
  newNumberString += event.target.dataset.digit;
  updateDisplay(newNumberString);
}

function updateDisplay(value) {
  display.textContent = value;
}



