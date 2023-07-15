const backspaceBtn = document.getElementById("backspace-btn");
const clearBtn = document.getElementById("clear-btn");
const digiBtns = document.querySelectorAll(".digit-btn");
const display = document.querySelector(".display");
const equalsBtn = document.getElementById("equals-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");

digiBtns.forEach(button => {
  button.addEventListener("click", addDigit)
});
equalsBtn.addEventListener("click", calculate);
backspaceBtn.addEventListener("click", removeDigit);
clearBtn.addEventListener("click", reset);

operatorBtns.forEach(button => {
  button.addEventListener("click", setOperator)
});

// Math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Global variables
let numberString = "";
let operator = "";
let memory = [];

function calculate() {
  if (numberString !== "") {
    memory.push(parseFloat(numberString));
  }
  if (memory.length > 1) {
    memory = [operate(memory[0], memory[1])];
    updateDisplay(memory)
  } 
  numberString = "";
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
  if (numberString !== "") {
    updateDisplay(numberString); 
  } else {
    updateDisplay("0");
  }
}

function updateDisplay(value) {
  display.textContent = value;
}

function reset() {
  numberString = "";
  operator = "";
  memory = [];
  display.textContent = "0";
}

reset();



