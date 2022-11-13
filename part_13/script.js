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

//////////////////////////////////////////////////

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSelections = document.querySelectorAll(".section"); // returns NodeList
console.log(allSelections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button"); // returns HTMLCollection whitch is updated automatically
console.log(allButtons);

const classes = document.getElementsByClassName("btn"); // returns HTMLCollection whitch is updated automatically
console.log(classes);

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
