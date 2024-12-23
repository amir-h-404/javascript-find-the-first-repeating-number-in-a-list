// checking user input is valid:
function isValidData() {
  const inputBox = document.querySelector("input[name=inputBox]");
  inputBox.value = inputBox.value.replace(/\D/g, "");
}

// checking the repeating number:
function checkRepeatingNumber() {
  const inputBox = document.querySelector("input[name=inputBox]").value;
  // convert to the list:
  const listOfNumbers = inputBox.split("").map((item) => Number(item));
  console.log(listOfNumbers);
  alertOfResult(4);
}

// show or hide alert of result:
function alertOfResult(number, isShow = true) {
  const alert = document.getElementById("alertOfResult");
  alert.querySelector("strong").innerHTML = String(number);
  isShow ? alert.classList.remove("d-none") : alert.classList.add("d-none");
}
