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
