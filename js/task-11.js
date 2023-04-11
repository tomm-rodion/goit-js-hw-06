const form = document.querySelector(".js-form");
const containerForColectionEl = document.querySelector("#boxes");
const btnCleenUpElements = document.querySelector("button[data-destroy]");

form.addEventListener("submit", onSubmitForm);
btnCleenUpElements.addEventListener("click", onCleenBoxs);

function onSubmitForm(e) {
  e.preventDefault();
  const { size, number } = e.currentTarget.elements;
  const amount = Number(number.value);
  const sizeBox = Number(size.value);

  createBoxes(amount, sizeBox);

  size.value = "";
  number.value = "";
}

function createBoxes(amount, sizeBox) {
  let number = 10;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    elements.push(
      `<div class = "box-light" style = "background-color:${getRandomHexColor()}; width: ${(number +=
        sizeBox)}px; height: ${number}px;"></div>`
    );
  }

  const DIVS = [...elements].join("");
  containerForColectionEl.insertAdjacentHTML("beforeend", DIVS);
}

function onCleenBoxs() {
  containerForColectionEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//#test search max number in [].

const arrNumber = [3, 5, 67, 46, 34, 23, 67, 89, 34];

let maxNumber = 0;
for (const item of arrNumber) {
  if (item > maxNumber) {
    maxNumber = item;
  }
}

console.log(maxNumber);

//#2
let maxNum = 0;

arrNumber.map((item) => {
  if (item > maxNum) {
    maxNum = item;
  }
});

console.log(maxNum);

//#3
let num = 0;

arrNumber.forEach((item) => {
  if (item > num) {
    num = item;
  }
});

console.log(num);

//#4
const arrey = [1, 5, 6, 7, 8, 9, 34, 45, 56, 67, 23, 24, 56, 45];
let evenNumb = [];
let notEvenNumb = [];

arrey.map((item) => {
  if (item % 2 === 0) {
    evenNumb.push(item);
  } else {
    notEvenNumb.push(item);
  }
});

console.log(evenNumb);
console.log(notEvenNumb);
