const digitButtons = document.querySelectorAll(".digit-btn");
const display = document.querySelector(".display");
const equalsButton = document.getElementById("equals-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

digitButtons.forEach(button => {
  button.addEventListener("click", updateDisplayValue)
});
equalsButton.addEventListener("click", operate);

operatorButtons.forEach(button => {
  button.addEventListener("click", selectOperator)
});

// Math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Global variables
let result = 0;
let displayValue = "";


// cijfers duwen = aan string toevoegen (variabele input)
// operator duwen = variabele input opslaan in andere variabele, string leegmaken, operator pslaan
// cijfers duwen = aan string toevogen (variable input)
// = duwen = som

function operate(operator, num1, num2) {
  switch (operator) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }

}


function selectOperator(event) {
  const operator = event.target.dataset.operator;
  const activeNumber = parseInt(displayValue);
  result = operate(operator, activeNumber, result);
  displayValue = "";
  display.textContent = displayValue;
  console.log(result);

}

function updateDisplayValue(event) {
  displayValue += event.target.dataset.digit;
  display.textContent = displayValue;
}



