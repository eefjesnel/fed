// JavaScript Document

var pompoenButton = document.querySelector("header div button");
var customProperty = document.querySelector("body");
pompoenButton.addEventListener("click", halloweenState);


//function halloweenstate image veranderen van een video die Katarina mij had meegegeven: Change Image using Onclick. Simple Js tricks op youtube van simple codes.
//function halloweenstate audio van eerder gemaakte website bij inleiding programmeren.
function halloweenState() {
    customProperty.classList.toggle("halloween");
    if(logoFiartradeFooter.src.match("./images/logoFairtradeOrange.png")) {
        logoFiartradeFooter.src = './images/logoFairtradeWhite.png'
    }
    else {
        logoFiartradeFooter.src = './images/logoFairtradeOrange.png'
        var halloweenaudio = new Audio("images/halloweenAudio.mp3");
        halloweenaudio.src = "images/halloweenAudio.mp3";
        halloweenaudio.play();
    }
    console.log("hallogween");
};

var logoFiartradeFooter = document.querySelector("footer section div img");
var homeButton = document.querySelector("nav button");
var navElement = document.querySelector("nav ul");
var headerElement = document.querySelector("header div");

var kaartButton = document.querySelector(".productenHTML section:nth-of-type(2) button");
var kaartButton2 = document.querySelector(".productenHTML section:nth-of-type(2) button:nth-of-type(2)");
var kaartButton3 = document.querySelector(".productenHTML section:nth-of-type(2) button:nth-of-type(3)");
var kaartButton4 = document.querySelector(".productenHTML section:nth-of-type(2) button:nth-of-type(4)");
var kaartButton5 = document.querySelector(".productenHTML section:nth-of-type(2) button:nth-of-type(5)");
var kaartButton6 = document.querySelector(".productenHTML section:nth-of-type(2) button:nth-of-type(6)");



homeButton.addEventListener("click", openMenu);

kaartButton.addEventListener("click", draaiKaart);
kaartButton2.addEventListener("click", draaiKaart2);
kaartButton3.addEventListener("click", draaiKaart3);
kaartButton4.addEventListener("click", draaiKaart4);
kaartButton5.addEventListener("click", draaiKaart5);
kaartButton6.addEventListener("click", draaiKaart6);





function openMenu() {
    navElement.classList.toggle("toonMenu");
};

function draaiKaart() {
    kaartButton.classList.toggle("toonKaart");
    console.log("kaart1");
};

function draaiKaart2() {
    kaartButton2.classList.toggle("toonKaart");
    console.log("kaart2");
};

function draaiKaart3() {
    kaartButton3.classList.toggle("toonKaart");
    console.log("kaart3");
};

function draaiKaart4() {
    kaartButton4.classList.toggle("toonKaart");
    console.log("kaart4");
};

function draaiKaart5() {
    kaartButton5.classList.toggle("toonKaart");
    console.log("kaart5");
};

function draaiKaart6() {
    kaartButton6.classList.toggle("toonKaart");
    console.log("kaart6");
};



console.log("heyyyyyy");

