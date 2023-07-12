const digitButtons = document.querySelectorAll(".digit-btn");
const display = document.querySelector(".display");
const equalsButton = document.getElementById("equals-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

digitButtons.forEach(button => {
  button.addEventListener("click", addDigitToNumberString)
});

operatorButtons.forEach(button => {
  button.addEventListener("click", setOperator)
});


equalsButton.addEventListener("click", operate);

let num1 = "";
let operator;

function operate(operator, num1, num2 = display.textContent) {
  switch (operator) {
    case "add": console.log(add(num1, num2));
    case "subtract": return subtract(num1, num2);
    case "multiply": return multiply(num1, num2);
    case "divide": return divide(num1, num2);
  }
}


function setOperator() {
  operator = this.value;
  console.log(operator);
}

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

function addDigitToNumberString() {
  if (!(num1.length < 1 && this.value === "0")) {
    num1 += this.value;
    console.log(num1);
  }
}




