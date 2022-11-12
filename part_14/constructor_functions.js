// when we create Constructor Function we use only function declaration or function expression. arrow functions don't have a 'this' keyword and we need that; The only difference between function and constractor function is that we call constractor function with the 'new' key word;

// When we call the function with the NEW keyword behind the scenes it happens 4 steps:

// 1. The new empty object {} is created;
// 2. the function is called. the THIS keyword is set to this new empty object; so in the execution context of the person funcion the THIS keyword will point to this new object here;
// 3. this new OBJECT is linked to PROTOTYPE;
// 4. object that is created in the beginning is automatically returned from the function; __proto__

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // NEVER CREATE METHOD INSIDE THE COSTRUCTOR FUNCTION, FOR THIS GOAL WE USE PROTOTYPE AND PROTOTYPE INHERITANCE
    // this.calcAge = function () {
    // return year - this.birthYear;
    // };
};

const kika = new Person("kika", 1990);
const mario = new Person("Mario", 1975);

// console.log(kika instanceof Person);

// Prototypes
// each and every function in JavaScript automatically has a property called PROTOTYPE. That includes the CONSTRUCTOR FUNCTIONS. Every Object that's created by certain constructor function will get access to all the methods and properties that we define on the constructor prototype property.
// console.log(Person.prototype);
Person.prototype.calcAge = function (year) {
    // return year - this.birthYear;
    // console.log(this.birthYear);
};

// we can set properties to the prototype, not only methods
Person.prototype.species = "Homo Sapiens";

// console.log(kika.hasOwnProperty("firstName")); // true
// console.log(kika.hasOwnProperty("species")); // false -> this is the property from the prototype

// console.dir(Person.prototype.constructor);

// CODING CHALLENGE 1:
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`The new accelerated speed is: ${this.speed}`);
};

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`The new break speed is: ${this.speed}`);
};

const bmw = new Car("BMW", 100);
const mercedes = new Car("MERCEDES", 105);

console.log(bmw);
console.log(mercedes);

bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();
console.log(bmw);
