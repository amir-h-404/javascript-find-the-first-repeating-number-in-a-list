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
  // The unique numbers:
  const uniqueNumbers = new Set(listOfNumbers);
  const targetObject = [];
  uniqueNumbers.forEach((value) => {
    targetObject.push({
      number: value,
      repeat: listOfNumbers.filter((item) => item === value).length,
    });
  });
  const listForMax = targetObject
    .map((obj) => Object.values(obj)[1])
    .filter((f) => f !== 1);
  const foundItem = targetObject.find(
    (el) => Object.values(el)[1] === Math.max(...listForMax)
  );
  alertOfResult(foundItem ? foundItem["number"] : "nothing!");
}

// show or hide alert of result:
function alertOfResult(number, isShow = true) {
  const alert = document.getElementById("alertOfResult");
  alert.querySelector("strong").innerHTML = String(number);
  isShow ? alert.classList.remove("d-none") : alert.classList.add("d-none");
}
