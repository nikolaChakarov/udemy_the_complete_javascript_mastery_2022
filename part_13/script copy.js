"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
// 	btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// Page Navigation

//////////////////////////////////////////////////

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector(".header");
const allSelections = document.querySelectorAll(".section"); // returns NodeList
// console.log(allSelections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button"); // returns HTMLCollection whitch is updated automatically
// console.log(allButtons);

const classes = document.getElementsByClassName("btn"); // returns HTMLCollection whitch is updated automatically
// console.log(classes);

// Creating and Inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improve functionality and analytics.";
message.innerHTML =
    "We use cookies for improve functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

// the dom node is unique, it means one node can be at one place only at the time
// header.prepend(message); // prepend() -> add node as first child of the element
header.append(message); // append() -> add node as last child of the element
// if we want a copy, we must clone the element
// header.prepend(message.cloneNode(true));

header.after(message); // the same rulles apply here with the clone element if needed.
header.before(message);

// delete element
document
    .querySelector(".btn--close-cookie")
    .addEventListener("click", function () {
        message.remove();
    });

// Styles
message.style.backgroundColor = "#37383d";
const compHeight = getComputedStyle(message).height;
message.style.height =
    Number.parseFloat(getComputedStyle(message).height) + 50 + "px";

// CHANGE CSS VARIABLES
// ...inside our .css file :root {}; with custom properies we need to use setProperty(name, value);
// document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
logo.setAttribute("designer", "nikk");
logo.getAttribute("designer"); // nikk

// Data Attributes
// console.log(logo.dataset);

// Classes
logo.classList.add("test");
logo.classList.remove("test");
logo.classList.toggle("test");
logo.classList.contains("test");

// IMPLEMENTING SMOOTH SCROLLING
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
    // OLD SCHOOL METHOD
    // const section1Coords = section1.getBoundingClientRect();
    // const currentX = window.pageXOffset;
    // const currentY = window.pageYOffset;
    // // window.scrollTo(
    // //     section1Coords.left + currentX,
    // //     section1Coords.top + currentY
    // // );
    // window.scrollTo({
    //     top: section1Coords.top + currentY,
    //     left: section1Coords.left + currentX,
    //     behavior: "smooth",
    // });
    // END OLD SCHOOL METHOD
    section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", function () {
    this.style.color = "red";
});

// EVENTS -> 1. CAPTURING PHASE: FROM FROM PARENT TO CHILDREN; 2. TARGET PHASE: WHEN REACHS THE ELEMENT WHO IS LISTENING THE EVENT; 3. BUBLING PHASE: UP FROM THE TARGET ELEMENT, THROUGH ALL THE PARENTS TO THE LAST ONE;

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) - min);
const randomColor = () =>
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", changeColor);

document.querySelector(".nav__links").addEventListener("click", changeColor);

document.querySelector(".nav").addEventListener("click", changeColor);

function changeColor(e) {
    // target is the element where the event first happened; IT IS NOT THE ELEMENT ON WHICH THE EVENT IS ATTACHED. the element on wich the event handler is attached is currentTarget;
    e.preventDefault();
    console.log(e.currentTarget.tagName);
    console.log(this);
    this.style.backgroundColor = randomColor();
}
