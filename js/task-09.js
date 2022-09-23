// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color
//  и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.body.classList.add("bgColor");
const body = document.querySelector(".bgColor");
const button = document.querySelector(".change-color");
let colorValue = document.querySelector(".color");

button.addEventListener("click", onBgColorBody);

function onBgColorBody(evt) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = document.body.style.backgroundColor;
}
