// JavaScript Document


var homeButton = document.querySelector("nav button");
var navElement = document.querySelector("nav ul");
var headerElement = document.querySelector("header div")

homeButton.addEventListener("click", openMenu);

function openMenu() {
    navElement.classList.toggle("toonMenu");
}

console.log("hi");