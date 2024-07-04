document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  let currentInput = "";
  let previousInput = "";
  let operator = "";
  /* 
-The code waits for the DOM content to load before executing.
-Variables are defined to keep track of the current input, the previous input, and the operator.
*/

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
      /*
-An event listener is added to each button.
-The value of each button is retrieved using getAttribute('data-value').
*/
      if (value === "C") {
        currentInput = "";
        previousInput = "";
        operator = "";
        display.value = "";
        /* If the clear button ('C') is pressed, all variables are reset and the display is cleared.*/
      } else if (value === "=") {
        if (previousInput && currentInput && operator) {
          currentInput = operate(previousInput, currentInput, operator);
          display.value = currentInput;
          previousInput = "";
          operator = "";
        }
        /* 
        -If the equal button ('=') is pressed, the operation is performed using the operate function if all necessary inputs are available.
        -The result is then displayed, and variables are reset accordingly.
        */
      } else if (["+", "-", "*", "/"].includes(value)) {
        if (currentInput) {
          operator = value;
          previousInput = currentInput;
          currentInput = "";
        }
        /* 
          If an operator button is pressed, the current input is saved as previousInput, and the currentInput is cleared for the next input.
          */
      } else {
        currentInput += value;
        display.value = currentInput;
      }
      /* 
        For number and decimal buttons, the value is appended to currentInput and displayed.
        */
    });
  });
  function operate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
      case "+":
        return (a + b).toString();
      case "-":
        return (a - b).toString();
      case "*":
        return (a * b).toString();
      case "/":
        return (a / b).toString();
      default:
        return "";
    }
    /* 
      The operate function performs the arithmetic operation based on the operator and returns the result as a string.
      */
  }
});
