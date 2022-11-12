"use strict";

// iterables are basically most of the build-in data structures in JavaScript arrays, strings, maps or sets but not objects;

// Sets are basically just a collection of uniqe values
// Maps in JavaScript is a data structure that we can use to map values to keys; just like an object, data is stored in key value pairs in maps. The big difference between OBJECTS and MAPS is that in MAPS the keys can have any type; in objects the keys are basically allways strings. In maps we can have any type of key.

// Data needed for a later exercise
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    orderDelivery: function (obj) {
        const { time, address, mainIndex, starterIndex } = obj;
        const message = `Order reveived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
        console.log(message);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with: ${ing1}, ${ing2}, ${ing3}`
        );
    },
};

// The Spread Operator
// const ingredients = [
//     prompt("Les's make pasta! Ingredient 1?"),
//     prompt("Ingredient 2?"),
//     prompt("Ingredient 3?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// const str = "Jonas"; // spread operator works on all of the iterables
// console.log(...str);

// // Coppy array
// const newMenu = [...restaurant.mainMenu]; // shallow coppy
// //  Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// restaurant.orderDelivery({
//     time: "22:30",
//     address: "Via del Sole, 21",
//     mainIndex: 2,
//     starterIndex: 2,
// });

// nested objects
// const { openingHours } = restaurant;
// const {
//     fri: { open, close },
// } = openingHours;
// console.log(open, close);

// mutating variables
// let a = 5;
// let b = 7;
// let obj = { a: 18, b: 33 };
// ({ a, b } = obj);
// console.log(a, b);

// let x = 5;
// let y = 7;
// [x, y] = [y, x];
// console.log(x, y);

// Nullish operator ?? -> null or undefined NOT 0 or ''

// const arr = ["first", "second", "third"];
// const [gk, ...rest] = arr;
// console.log(gk, rest);

// const game = {
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// const {
//     odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const [idx, el] of menu.entries()) {
//     console.log(`${idx + 1}: ${el}`);
// }
// console.log([...menu.entries()]);
// const obj = {
//     test: 1,
// };
// console.log(Object.entries(obj));

// let test = null;
// console.log(test ?? "nullish: null or undefined");

// let obj = {
//     name: "kika",
//     getName() {
//         return this.name;
//     },
//     calc(a, b) {
//         return a + b;
//     },
// };
// console.log(obj.calc?.(5, 5));
// console.log(obj.add?.(5, 5) ?? "This method does not exist");

// let arr = ["a", "b", "c"];
// for (const [idx, el] of arr.entries()) {
//     console.log(`${idx + 1}: ${el}`);
// }

// const hours = {
//     mon: {
//         open: 3,
//         close: 9,
//     },
//     fri: {
//         open: 1,
//         close: 6,
//     },
//     sun: {
//         open: 10,
//         close: 17,
//     },
// };
// const entries = Object.entries(hours);
// for (const [k, { open, close }] of entries) {
//     console.log(`Our hours are -> ${k} open: ${open}, and close: ${close}`);
// }

// const game = {
//     scored: ["Loko", "Botev", "Marica", "Spartak"],
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// for (const [idx, club] of game.scored.entries()) {
//     console.log(`Goal ${idx + 1}, club: ${club}`);
// }

// const odds = Object.entries(game.odds);
// let sum = 0;
// for (const [_team, score] of odds) {
//     sum += score;
// }
// console.log(sum / odds.length);

/* --------------------------- */
// Sets are basically just a collection of uniqe values
// Maps in JavaScript is a data structure that we can use to map values to keys; just like an object, data is stored in key value pairs in maps. The big difference between OBJECTS and MAPS is that in MAPS the keys can have any type; in objects the keys are basically allways strings. In maps we can have any type of key.

// const ordersSet = new Set(["pasta", "piza", "rizoto", "piza", "piza", "pasta"]);
// console.log(Array.from(ordersSet));
// console.log(ordersSet.size);
// console.log(ordersSet.has("piza"));
// console.log(ordersSet.has("bread"));
// ordersSet.add("new item");
// ordersSet.add("new item");
// console.log(ordersSet);
// ordersSet.delete("rizoto");
// console.log(ordersSet);

// const staff = [
//     "waiter",
//     "cheff",
//     "manager",
//     "waiter",
//     "cheff",
//     "waiter",
//     "waiter",
// ];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// const rest = new Map();
// // SET key -> value
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");
// // we can change set method because it returns an updated map;
// rest.set("categories", ["Italian", "Pizzeria", "Vegeterian", "Organic"])
//     .set("open", 11)
//     .set("close", 23)
//     .set(true, "We are open :D")
//     .set(false, "We are closed :(");
// // console.log(rest);
// // in oreder to read data from a MAP we use GET method
// // console.log(rest.get("categories"));

// const time = 21;
// // console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// // check if there is a key -> HAS
// // console.log(rest.has("categories"));
// // DELETE  from a MAP also happens base on the key
// rest.delete(2);
// // console.log(rest);
// // another way of defining MAP
// const question = new Map([
//     ["question", "What is the best programming language in the world?"],
//     [1, "C"],
//     [2, "Java"],
//     [3, "JavaScript"],
//     ["correct", 3],
//     [true, "Correct 🎉"],
//     [false, "Try again!"],
// ]);
// // console.log(question);

// // Convert Object to Map
// const hours = {
//     mon: {
//         open: 3,
//         close: 9,
//     },
//     fri: {
//         open: 1,
//         close: 6,
//     },
//     sun: {
//         open: 10,
//         close: 17,
//     },
// };
// const hoursMap = new Map(Object.entries(hours));
// // console.log(hoursMap);
// // quiz app
// // console.log(question.get("question"));
// for (const [k, v] of question) {
//     if (typeof k === "number") {
//         console.log(`Answer ${k}: ${v}`);
//     }
// }
// // const answer = Number(prompt(question.get("question")));
// // console.log(answer);
// // console.log(question.get(answer === 3));

// // convert Map to Array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// coding challenge #3
// const gameEvents = new Map([
//     [17, "GOAL"],
//     [36, "Substitution"],
//     [47, "GOAL"],
//     [61, "Substitution"],
//     [64, "Yellow Card"],
//     [69, "Red Card"],
//     [70, "Substitution"],
//     [72, "Substitution"],
//     [76, "GOAL"],
//     [80, "GOAL"],
//     [92, "Yellow Card"],
// ]);
// const events = [...new Set(gameEvents.values())];
// // console.log(events);
// gameEvents.delete(64);
// // console.log(gameEvents);
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happend, on every ${time / gameEvents.size} minutes`);

// for (const [k, v] of gameEvents) {
//     const str = k > 45 ? "[SECOND HALF]" : "[FIRST HALF]";
//     console.log(`${str} ${k}: ${v}`);
// }

//// STRINGS
// const airLine = "TAP Air Portugal";
// const plane = "A320";
// console.log(airLine.indexOf("r"));
// console.log(airLine.lastIndexOf("r"));
// console.log(airLine.indexOf("Portugal"));
// console.log(airLine.indexOf("portugal"));
// console.log(airLine.slice(4)); // index of start position
// console.log(airLine.slice(4, 7)); // index of start and end position
// console.log(airLine.slice(0, airLine.indexOf(" ")));
// console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));
// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const middleSeat = function (seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     s === "B" || s === "E"
//         ? console.log("Middle, sorry...")
//         : console.log("Lucky, lucky, lucky...");
// };
// middleSeat("11B");
// middleSeat("23C");
// middleSeat("3E");
// // Fix capitalization in name
// const passenger = "jOnAS";
// const passengerToLower = passenger.toLowerCase();
// const passengerCorrect =
//     passengerToLower[0].toUpperCase() + passengerToLower.slice(1);
// console.log(passengerCorrect);

// // Replace parts of strings;
// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log({ priceUS });

// const randomStr = "asdfwr24234 fas545sdf 345gs s44";
// const testRandom = randomStr.replace(/[0-9]+/g, (el) => {
//     return "*".repeat(el.length);
// });
// console.log(testRandom);
// // Booleans
// const planeA320 = "A320neo";
// console.log(planeA320.includes("320"));
// console.log(planeA320.startsWith("Ai"));

// const str = "test";
// let res = str[0].toUpperCase() + str.slice(1);
//  res = str.replace(str[0], str[0].toUpperCase());

// Padding
const message = "Go to gate 23!";
const padStart = message.padStart(25, "+");
const paded = padStart.padEnd(30, "*");

const maskCreditCard = function (num) {
    const str = num.toString();
    const length = str.length;
    const last4Digits = str.slice(-4);
    const result = last4Digits.padStart(length, "*");
    console.log(result);
};

maskCreditCard(1234567890123456);
