"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const ingredientsConteiner = document.querySelector("#ingredients");

// let liIngredientsArr = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const liIngredient = document.createElement("li");

//   liIngredient.textContent = ingredients[i];
//   liIngredient.classList.add("item");
//   liIngredientsArr.push(liIngredient);
//   ingredientsConteiner.append(...liIngredientsArr);
// }

const ingredientsConteiner = document.querySelector("#ingredients");

let IngredientsListArr = [];

ingredients.map((ingridient) => {
  const liIngredient = document.createElement("li");

  liIngredient.textContent = ingridient;
  liIngredient.classList.add("item");
  IngredientsListArr.push(liIngredient);
});

ingredientsConteiner.append(...IngredientsListArr);
