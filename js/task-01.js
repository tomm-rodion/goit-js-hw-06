"use strict";
const listesElement = document.querySelectorAll(".item");
console.log("Number of categories:", listesElement.length);

const textTitle = listesElement.forEach(function (listElement) {
  console.log("Category:", listElement.firstElementChild.textContent);
  console.log("Elements:", listElement.querySelectorAll("li").length);
});
