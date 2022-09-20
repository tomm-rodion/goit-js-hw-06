"use strict";
// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name - output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const onInput = (event) => {
  event.currentTarget.value.trim() === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = event.currentTarget.value);
};
input.addEventListener("input", onInput);
