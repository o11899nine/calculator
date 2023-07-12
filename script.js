const digitButtons = document.querySelectorAll(".digit-btn");
const display = document.querySelector(".display");
const equalsButton = document.getElementById("equals-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");

digitButtons.forEach(button => {
  button.addEventListener("click", addDigitToNumberString)
});
equalsButton.addEventListener("click", operate);

operatorButtons.forEach(button => {
  button.addEventListener("click", setOperator)
});



// Math functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1 = "";
let num2 = "";
let operator = "";
let result = 0;

function operate(operator, num1, num2) {
  switch (operator) {
    case "add":
      result = add(num1, num2);
    case "subtract":
      result = subtract(num1, num2);
    case "multiply":
      result = multiply(num1, num2);
    case "divide":
      result = divide(num1, num2);
  }
}


function setOperator(e) {
  operator = e.target.dataset.operator;
  console.log(`operator: ${operator}`);
}

function addDigitToNumberString(e) {
    num1 += e.target.dataset.digit;
    console.log(`num1: ${num1}`);
}






