"use strict";

let counterValue = 0;
2;
const spanEl = document.querySelector("#value");
const btnEl = document.querySelectorAll("button");

const minusButton = btnEl[0];
const plusButton = btnEl[1];

minusButton.addEventListener("click", minusClick);
plusButton.addEventListener("click", plusClick);

function minusClick(evt) {
  spanEl.textContent = counterValue -= 1;
}
function plusClick(evt) {
  spanEl.textContent = counterValue += 1;
}
