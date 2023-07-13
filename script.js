const digitButtons = document.querySelectorAll(".digit-btn");
const display = document.querySelector(".display");
const equalsButton = document.getElementById("equals-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

digitButtons.forEach(button => {
  button.addEventListener("click", updateDisplayValue)
});
equalsButton.addEventListener("click", calculate);

operatorButtons.forEach(button => {
  button.addEventListener("click", selectOperator)
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


// cijfers duwen = aan string toevoegen (variabele input)
// operator duwen = variabele input opslaan in andere variabele, string leegmaken, operator pslaan
// cijfers duwen = aan string toevogen (variable input)
// = duwen = som

function calculate() {
  num2 = parseInt(displayValue);
  displayValue = operate(operator, num1, num2);
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


function selectOperator() {
  operator = this.dataset.operator;
  num1 = parseInt(displayValue);
  displayValue = "";
}

function updateDisplayValue() {
  displayValue += this.dataset.digit;
  updateDisplay(displayValue);
}

function updateDisplay(value) {
  display.textContent = value;
}



