const digitButtons = document.querySelectorAll(".digit-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const equalsButton = document.getElementById("equals-btn");
const display = document.querySelector(".display");

digitButtons.forEach(button => {
  button.addEventListener("click", setCurrentDigit)
});

operatorButtons.forEach(button => {
  button.addEventListener("click", setOperator)
});


equalsButton.addEventListener("click", operate);




function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}




function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function setCurrentDigit() {
  display.textContent += this.value;
}

let num1 = "";
let num2 = 0;
let operator;

function operate(operator, num1, num2) {
  switch (operator) {
    case "add": return add(num1, num2)
    case "subtract": return subtract(num1, num2);
    case "multiply": return multiply(num1, num2);
    case "divide": return divide(num1, num2);
  }
}
