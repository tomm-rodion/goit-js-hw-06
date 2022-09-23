const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

input.addEventListener("input", hendlerInput);
let value = 0;

function hendlerInput(evt) {
  value = evt.currentTarget.value;
  spanText.style.fontSize = value + "px";
}
