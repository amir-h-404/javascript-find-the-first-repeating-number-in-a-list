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
}
