const backspaceBtn = document.getElementById("backspace-btn");
const clearBtn = document.getElementById("clear-btn");
const digiBtns = document.querySelectorAll(".digit-btn");
const display = document.querySelector(".display");
const equalsBtn = document.getElementById("equals-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");

backspaceBtn.addEventListener("click", removeDigit);
clearBtn.addEventListener("click", reset);
digiBtns.forEach(button => { button.addEventListener("click", addDigit) });
equalsBtn.addEventListener("click", calculateIfPossible);
operatorBtns.forEach(button => { button.addEventListener("click", setOperator) });

// memory[0] will be the current solution, memory[1] will be the new number
let memory = []; 
let numberString = "";
let operator = "";

function reset() {
  numberString = "";
  operator = "";
  memory = [];
  display.textContent = "0";
}

const add = (a, b) => a + b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

function updateDisplay(value) {
  display.textContent = value;
}

function operate(a, b) {
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

function saveNumberToMemory() {
  memory.push(parseFloat(numberString));
}

function calculateIfPossible() {
  if (numberString !== "") {
    saveNumberToMemory();
  }

  // Calculates if there is two numbers to work with
  if (memory.length > 1) {
    // Checks for zero division
    if (memory[1] === 0 && operator === "divide") {
      updateDisplay("ZERO DIVISION ERROR")
    } else {
      const solution = operate(memory[0], memory[1])
      updateDisplay(+solution.toFixed(10));
      memory = [solution];
    }
  }
  numberString = "";
}

function setOperator(event) {
  calculateIfPossible();
  operator = event.target.dataset.operator;
}

function addDigit(event) {
  const digit = event.target.dataset.digit;

  // Prevents two dots in one number
  if (digit === "." && numberString.includes(".")) {
    return
  }

  numberString += digit;
  updateDisplay(numberString);
}

function removeDigit() {
  numberString = numberString.slice(0, -1);

  // Displays 0 if all digits are removed
  if (numberString !== "") {
    updateDisplay(numberString);
  } else {
    updateDisplay("0");
  }
}