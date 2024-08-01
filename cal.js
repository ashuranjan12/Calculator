let currentDisplay = "";
document.querySelector(".display").value = currentDisplay;

function equal() {
  let result = eval(currentDisplay);
  currentDisplay = result;
  document.querySelector(".display").value = currentDisplay;
}
