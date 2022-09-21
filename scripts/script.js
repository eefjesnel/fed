// JavaScript Document


var homeButton = document.querySelector("nav button");
var navElement = document.querySelector("nav ul");

homeButton.addEventListener("click", openMenu);

function openMenu() {
    navElement.classList.toggle("toonMenu");
}

console.log("hi");