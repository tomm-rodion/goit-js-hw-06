// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >,
// сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
input.classList.add(".js-input");
const boxesShow = document.querySelector("#boxes");
let amount;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = Number(input.value);
  console.log(amount);
  const newBox = document.createElement("div");
  console.log(newBox);
  newBox.classList.add("box");
  newBox.style.backgroundColor = getRandomHexColor();
  newBox.style.width = 30 + "px";
  newBox.style.height = 30 + "px";
  boxesShow.after(newBox);
}
// amount * document.boxesShow.createElement("div");

function destroyBoxes() {
  const resetBox = document.querySelector(".box");
  resetBox.remove();
}
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

// input.addEventListener("input", (evt) => {
//   let amount = Number(evt.currentTarget.value);
//   console.log(amount);
//   function createBoxes(amount) {
//     amount * document.boxesShow.createElement("div");
//   }
// });

//#2 ✅
const Elinput = document.querySelector("input");
const containerForColectionEl = document.querySelector("#boxes");
const btnCreateElements = document.querySelector("button[data-create]");
const btnCleenUpElements = document.querySelector("button[data-destroy]");

function numberCreateBoxs(e) {
  console.log(e.currentTarget.value);
  createBoxes(e.currentTarget.value);
  e.currentTarget.value = "";
}
Elinput.addEventListener("change", numberCreateBoxs);

function createBoxes(amount) {
  let number = 10;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    elements.push(
      `<div class = "box-light" style = "background-color:${getRandomHexColor()}; width: ${(number += 20)}px; height: ${number}px;"></div>`
    );
  }

  const DIVS = [...elements].join("");
  console.log(DIVS);
  containerForColectionEl.insertAdjacentHTML("beforeend", DIVS);
}

function onCleenBoxs() {
  containerForColectionEl.innerHTML = "";
}

btnCleenUpElements.addEventListener("click", onCleenBoxs);
