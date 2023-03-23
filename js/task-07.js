const elInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
//#1

// elInput.addEventListener("input", hendlerInput);
// let value = 0;

// function hendlerInput(evt) {
//   value = evt.currentTarget.value;
//   spanText.style.fontSize = value + "px";
// }

//#2 refactoring code

function onSizeText(e) {
  spanText.style.fontSize = `${e.target.value}px`;
}

elInput.addEventListener("input", onSizeText);
