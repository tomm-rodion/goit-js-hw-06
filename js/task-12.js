const titleTargetColor = document.querySelector(".output");
const colorPalette = document.querySelector(".color-palette");

colorPalette.addEventListener("click", handleSelectClick);

function handleSelectClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const selectedColor = event.target.dataset.color;
  titleTargetColor.textContent = `Selected color : ${selectedColor}`;

  titleTargetColor.style.color = selectedColor;
}
createPaletteItem();
function createPaletteItem() {
  const items = [];

  for (let i = 0; i < 60; i++) {
    const color = getRandomColor();
    console.log(color);
    const createItem = document.createElement("button");
    createItem.type = "button";
    createItem.dataset.color = color;
    createItem.style.backgroundColor = color;
    createItem.classList.add("item");
    items.push(createItem);
  }

  colorPalette.append(...items);
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
