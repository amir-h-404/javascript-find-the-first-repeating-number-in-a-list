// checking user input is valid:
function isValidData() {
  const inputBox = document.querySelector("input[name=inputBox]");
  inputBox.value = inputBox.value.replace(/\D/g, "");
}

// checking the repeating number:
function checkRepeatingNumber() {
  if (!isEmptyData()) {
    alertOfResult("", true, "Type a number, please!");
    return;
  }
  const inputBox = document.querySelector("input[name=inputBox]").value;
  // convert to the list:
  const listOfNumbers = inputBox.split("").map((item) => Number(item));
  // The unique numbers:
  const uniqueNumbers = new Set(listOfNumbers);
  const listObject = [];
  uniqueNumbers.forEach((value) => {
    listObject.push({
      number: value,
      repeat: listOfNumbers.filter((item) => item === value).length,
    });
  });
  const listCount = listObject
    .map((obj) => Object.values(obj)[1])
    .filter((f) => f !== 1);
  const foundItem = listObject.find(
    (el) => Object.values(el)[1] === Math.max(...listCount)
  );
  alertOfResult(foundItem ? foundItem["number"] : "nothing!");
}

// show or hide alert of result:
function alertOfResult(
  number,
  isShow = true,
  message = "The most repeated number: "
) {
  const alert = document.getElementById("alertOfResult");
  alert.querySelector("strong").innerHTML = String(number);
  alert.querySelector("span").innerHTML = message;
  isShow ? alert.classList.remove("d-none") : alert.classList.add("d-none");
}

// checking user input is not empty:
function isEmptyData() {
  return document.querySelector("input[name=inputBox]").value.length !== 0;
}
