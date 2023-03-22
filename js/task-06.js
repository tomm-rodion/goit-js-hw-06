"use strict";
// const textInput = document.querySelector("#validation-input");
// console.log(textInput);
// const inputValueDefaultLength = Number(textInput.dataset.length);
// console.log(inputValueDefaultLength);

// textInput.addEventListener("blur", onCallbackInput);
// function onCallbackInput() {
//   if (inputValueDefaultLength === textInput.value.length) {
//     textInput.classList.remove("invalid");
//     return textInput.classList.add("valid");
//   } else {
//     textInput.classList.remove("valid");
//     return textInput.classList.add("invalid");
//   }
// }

//#2

const elInput = document.querySelector('input[data-length="6"]');
const classInput = document.querySelector("#validation-input");

function onChange(e) {
  if (e.currentTarget.value.length === 0) {
    return;
  } else if (e.currentTarget.value.length !== Number(elInput.dataset.length)) {
    classInput.classList.add("invalid");
  } else if (e.currentTarget.value.length === Number(elInput.dataset.length)) {
    classInput.classList.add("valid");
  }
}

function onCleerInput(e) {
  classInput.classList.remove("valid");
  classInput.classList.remove("invalid");
  e.currentTarget.value = "";
}

elInput.addEventListener("blur", onChange);
elInput.addEventListener("focus", onCleerInput);
