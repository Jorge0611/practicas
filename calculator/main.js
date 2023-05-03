let firstNum = "";
let secondNum = "";
let operation = "";
let result = "";

const inputNum = document.getElementById("inputNum");

function appendNum(input) {
  if (result !== "") resetState();

  if (input === "." && secondNum.includes(".")) return;

  secondNum = secondNum.concat(input);
  inputNum.value = secondNum;
}

function setOperation(type) {
  operation = type;
}

function resetState() {
  firstNum = "";
  secondNum = "";
  operation = "";
  result = "";

  inputNum.value = "";
}

function deleteNum() {
  secondNum = secondNum.slice(0, -1);
  inputNum.value = secondNum;
}

function setOperation(opt) {
  operation = opt;
  firstNum = secondNum;
  secondNum = "";
  inputNum.value = "";
}

function getResult() {
  switch (operation) {
    case "/":
      result = firstNum / secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "=":
      console.log("Not defined");
      break;
  }

  inputNum.value = result;
}
