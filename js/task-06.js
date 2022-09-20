"use strict";
const textInput = document.querySelector("#validation-input");
console.log(textInput);
const inputValueDefaultLength = Number(textInput.dataset.length);
console.log(inputValueDefaultLength);

textInput.addEventListener("blur", onCallbackInput);
function onCallbackInput() {
  if (inputValueDefaultLength === textInput.value.length) {
    textInput.classList.remove("invalid");
    return textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    return textInput.classList.add("invalid");
  }
}
