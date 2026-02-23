console.log("1) Addition 2) Subtraction 3) Multiplication 4) Division");
// save history
let history = [];
const selectOperator = parseInt(prompt("Select Opreator: "));
if (isNaN(selectOperator) || selectOperator <= 0 || selectOperator > 4) {
  console.log("Invalid User Input. ");
} else {
  let num1 = parseFloat(prompt("Enter Number1: "));
  let num2 = parseFloat(prompt("Enter Number2: "));

  // Add
  function add(n1, n2) {
    return n1 + n2;
  }
  // Sub
  function sub(n1, n2) {
    return n1 - n2;
  }
  // Multiply
  function multiply(n1, n2) {
    return n1 * n2;
  }
  // Divide
  function divide(n1, n2) {
    return n1 / n2;
  }

  // save in memory
  function saveAns(getAns) {
    history.push(getAns);
  }

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid User Input. ");
  } else if (selectOperator === 1) {
    console.log("Addition: ", add(num1, num2));
    saveAns({ Add: add(num1, num2) });
  } else if (selectOperator === 2) {
    console.log("Subtraction: ", sub(num1, num2));
    saveAns({ Sub: sub(num1, num2) });
  } else if (selectOperator === 3) {
    console.log("Division: ", multiply(num1, num2));
    saveAns({ Multiply: multiply(num1, num2) });
  } else if (selectOperator === 4) {
    console.log("Multiplication: ", divide(num1, num2));
    saveAns({ Divide: divide(num1, num2) });
  }
}

console.log("History: ", history);
