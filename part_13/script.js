"use strict";

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

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// SCROLL INTO WIEW
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function () {
    section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation
const navLinks = document.querySelectorAll(".nav__link");
// navLinks.forEach(function (el) {
//     el.addEventListener("click", function (e) {
//         e.preventDefault();

//         const hrefAttr = this.getAttribute("href");
//         const sectionToScroll = document.querySelector(hrefAttr);

//         sectionToScroll.scrollIntoView({ behavior: "smooth" });
//     });
// });

// Whit  EVENT DELEGATION  we need two steps:
// 1. we add the event listener to the common parent element of all the elements that we are interested in
// 2. in the event listener determine what originated the event, so we can  then work with that element where the event were actually created.
const ulEl = document.querySelector(".nav__links");
ulEl.addEventListener("click", function (e) {
    e.preventDefault();
    // Matching strategy
    if (
        e.target.classList.contains("nav__link") &&
        e.target.classList.length === 1
    ) {
        const id = e.target.getAttribute("href");
        const elToScroll = document.querySelector(id);

        elToScroll.scrollIntoView({ behavior: "smooth" });
    }
});

// Tabbed container
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const operationsContent = document.querySelectorAll(".operations__content");

// event delegation
tabsContainer.addEventListener("click", function (e) {
    // traversing the DOM upwards;
    const clicked = e.target.closest(".operations__tab");
    console.log(clicked);
    // Guard clause
    if (!clicked) return;

    // Active tab
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    clicked.classList.add("operations__tab--active");

    // Activate content area
    const contentId = clicked.dataset.tab;
    operationsContent.forEach((el) =>
        el.classList.remove("operations__content--active")
    );

    const neededContent = document
        .querySelector(`.operations__content--${contentId}`)
        .classList.add("operations__content--active");
});

// Menu fade animation
const navEl = document.querySelector(".nav");
// the difference between mouseover and mouseenter is that mouseover bubbles and mouseenter doesn't; the same goes in the other direction with mouseout and mouseleave;

const handleHover = function (opacity, e) {
    const link = e.target;
    if (!link.classList.contains("nav__link")) return;

    const links = link.closest(".nav__links");

    links.querySelectorAll(".nav__link").forEach((el) => {
        if (el !== link) el.style.opacity = opacity;
    });
};

navEl.addEventListener("mouseover", handleHover.bind(navEl, 0.5));

navEl.addEventListener("mouseout", handleHover.bind(navEl, 1));

// Sticky navigtion INTERSECTIONOBSERVER;

const header = document.querySelector(".header");
const targetHeight = navEl.getBoundingClientRect().height;

const obsOptions = {
    root: null,
    threshold: [0],
    rootMargin: `-${targetHeight}px`,
};

const stickyNav = (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
        navEl.classList.add("sticky");
    } else {
        navEl.classList.remove("sticky");
    }
};

const observer = new IntersectionObserver(stickyNav, obsOptions);
observer.observe(header);

// REVEAL SECTIONS
const allSections = document.querySelectorAll(".section");
const revealSection = (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) {
        entry.target.classList.add("section--hidden");
        return;
    }

    entry.target.classList.remove("section--hidden");
    // observer.unobserve(entry.target);
};

const sectionObj = {
    root: null,
    threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealSection, sectionObj);
allSections.forEach((section) => {
    sectionObserver.observe(section);
    // section.classList.add("section--hidden");
});

// LAZY IMAGES LOADING...
const imagesObj = {
    root: null,
    threshold: 0.5,
    rootMargin: "+200px",
};

const revealImage = function (entries, observer) {
    const [entry] = entries;
    const imgEl = entry.target;

    if (!entry.isIntersecting) {
        imgEl.classList.add("lazy-img");
        return;
    }
    imgEl.src = imgEl.dataset.src;
    imgEl.addEventListener("load", function () {
        imgEl.classList.remove("lazy-img");
    });

    observer.unobserve(imgEl);
};

const imgObserver = new IntersectionObserver(revealImage, imagesObj);

const images = document.querySelectorAll(".features img");
images.forEach((image) => {
    imgObserver.observe(image);
});

// This callback will get called each time that the observer element (our target element), is intersecting the root element at threshold that we defined.
// const obsCallback = function (entries, observer) {
//     // this function is called with two arguments: entries and the observer object itself.
//     entries.forEach((entry) => console.log(entry));
// };

// const obsOptions = {
//     // the root is the element that the target is intersecitng. if we set it to null, we'll observer the target to intersect with the entire viewport;
//     root: null,
//     // the threshold is the persentage of intersection at which the observer callback will be called. value could be an array of tresholds
//     // threshold: 0.1, // 10%
//     threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// // put target as parameter
// observer.observe(section1);

// const h1 = document.querySelector("h1");
// // Going downwards: child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "red";
// h1.lastElementChild.style.color = "orangered";

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest(".header").style.background = "var(--gradient-secondary)";

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);

// SLIDER
const rightBtn = document.querySelector(".slider__btn--right");
const leftBtn = document.querySelector(".slider__btn--left");
const slides = [...document.querySelectorAll(".slide")];
const dotContainer = document.querySelector(".dots");
let currentSlide = 0;
// EVENT LISTENERS
rightBtn.addEventListener("click", (e) => {
    nextSlide();
});

leftBtn.addEventListener("click", () => {
    previousSlide();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") nextSlide();
    if (e.key === "ArrowRight") previousSlide();
});

dotContainer.addEventListener("click", function (e) {
    const btn = e.target;

    if (!btn.dataset.slide) return;
    currentSlide = Number(btn.dataset.slide);
    goToSlide(Number(currentSlide));

    activateDot(currentSlide);
});

// SLIDER FUNCTIONS LISTENERS
const nextSlide = () => {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;

    goToSlide(currentSlide);
    activateDot(currentSlide);
};

const previousSlide = () => {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    goToSlide(currentSlide);
    activateDot(currentSlide);
};

const goToSlide = (slide) => {
    slides.forEach((el, idx) => {
        el.style.transform = `translateX(${(idx - slide) * 100}%)`;
    });
};

const createDots = function () {
    slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
            "beforeend",
            i === 0
                ? `<button class="dots__dot dots__dot--active" data-slide="${i}"></button>`
                : `<button class="dots__dot" data-slide="${i}"></button>`
        );
    });
};

const activateDot = (current) => {
    const dots = document.querySelectorAll(".dots__dot");
    dots.forEach((d) => d.classList.remove("dots__dot--active"));
    dots[current].classList.add("dots__dot--active");
};

const initSlider = () => {
    createDots();
    goToSlide(currentSlide);
};

initSlider();

// END SLIDER

// document.addEventListener("DOMContentLoaded", function (e) {
//     console.log("HTML parsed and DOM tree built!", e);
// });

// window.addEventListener("load", function (e) {
//     console.log("Page fully loaded!", e);
// });

// window.addEventListener("beforeunload", function (e) {
//     e.preventDefault();
//     e.returnValue = "";
// });
