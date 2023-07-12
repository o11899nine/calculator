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

// Globals
let activeNumberString = "";
let operator = "";
let numberHolder = [];

// cijfers duwen = aan string toevoegen (variabele input)
// operator duwen = variabele input opslaan in andere variabele, string leegmaken, operator pslaan
// cijfers duwen = aan string toevogen (variable input)
// = duwen = som

function operate() {
  numberHolder.push(parseFloat(activeNumberString));
  console.log(numberHolder);
  console.log(operator);
  let result;

  switch (operator) {
    case "add":
      result = add(numberHolder[0], numberHolder[1]);
      break
    case "subtract":
      result = subtract(numberHolder[0], numberHolder[1]);
      break
    case "multiply":
      result = multiply(numberHolder[0], numberHolder[1]);
      break
    case "divide":
      result = divide(numberHolder[0], numberHolder[1]);
      break
  }

  console.log(result);
}


function setOperator(e) {
  operator = e.target.dataset.operator;
  numberHolder.push(parseFloat(activeNumberString));
  activeNumberString = "";
  console.log(`operator: ${operator}`);
  console.log(`numberHolder: ${numberHolder}`);
}

function addDigitToNumberString(e) {
    activeNumberString += e.target.dataset.digit;
    console.log(`activeNumberString: ${activeNumberString}`);
}






