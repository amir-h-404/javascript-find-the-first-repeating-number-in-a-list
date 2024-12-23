// checking user input is valid:
function isValidData() {
  const inputBox = document.querySelector("input[name=inputBox]");
  inputBox.value = inputBox.value.replace(/\D/g, "");
}

// checking the repeating number:
function checkRepeatingNumber() {
  alertOfResult(0, false);
  if (!isEmptyData()) {
    alertOfResult("", true, "Type a number, please!");
    return;
  }
  // convert to the list:
  const listOfNumbers = document
    .querySelector("input[name=inputBox]")
    .value.split("")
    .map((item) => Number(item));
  // The unique numbers:
  const listObject = [];
  new Set(listOfNumbers).forEach((value) => {
    listObject.push({
      number: value,
      repeat: listOfNumbers.filter((item) => item === value).length,
    });
  });
  const listCount = listObject
      .map((obj) => Object.values(obj)[1])
      .filter((f) => f !== 1),
    foundItem = listObject.find(
      (el) => Object.values(el)[1] === Math.max(...listCount)
    );
  if (!foundItem) {
    alertOfResult("nothing!");
    return;
  }
  alertOfResult(foundItem["number"]);
  showDataInTable(listObject);
}

// show or hide alert of result:
function alertOfResult(
  number,
  isShow = true,
  message = "The most repeated number: "
) {
  const alert = document.getElementById("alertOfResult"),
    tableOfNumbers = document.getElementById("tableOfNumbers");
  alert.querySelector("strong").innerHTML = String(number);
  alert.querySelector("span").innerHTML = message;
  if (!isShow) {
    alert.classList.add("d-none");
    tableOfNumbers.classList.add("d-none");
    tableOfNumbers.querySelector("tbody").innerHTML = "";
    return;
  }
  alert.classList.remove("d-none");
}

// checking user input is not empty:
function isEmptyData() {
  return document.querySelector("input[name=inputBox]").value.length !== 0;
}

// display data in the table:
function showDataInTable(objectsOfList) {
  const tableOfNumbers = document.getElementById("tableOfNumbers");
  tableOfNumbers.classList.remove("d-none");
  let counter = 1;
  objectsOfList.map((item) => {
    const tr = document.createElement("tr"),
      th = document.createElement("th"),
      tdNumber = document.createElement("td"),
      tdCount = document.createElement("td");
    th.scope = "row";
    th.innerHTML = String(counter);
    tdNumber.innerHTML = item["number"];
    tdCount.innerHTML = item["repeat"];
    tr.appendChild(th);
    tr.appendChild(tdNumber);
    tr.appendChild(tdCount);
    tableOfNumbers.querySelector("tbody").appendChild(tr);
    counter++;
  });
}
