// CONSTRUCTOR FUNCTION AND THE 'NEW' OPERATOR;
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const kika = new Person("Kika", 1990);

// 1. New {} is created;
// 2. function is called. this = {};
// 3. {} is linked to prototype;
// 4. function automatically return {};

// Prototypes;
// each and every function in JavaScript has a property called PROTOTYPE; That includes CONSTRUCTOR FUNCTIONS. Every Object that's created by a certain constructor funciton will get access to all methods and properties on the constructor PROTOTYPE property; to IT's PROTOTYPE;

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};
console.log(Person.prototype);

kika.calcAge();

// instance.__proto__ -> shows the instance object PROTOTYPE
console.log(kika.__proto__);
// so prototype of the instance object is essentially the prototype property of the consructor function
// Person.prototype is NOT PROTOTYPE of Person, but instead it is what is goning to be used as the prototype of all the objects that are created with the Person Constructor Function;
console.log(kika.__proto__ === Person.prototype); // true;
console.log(Person.prototype.isPrototypeOf(kika)); // true;
// Person.prototype -> BAD NAMING**** SHOULD BE CALLED PROTOTYPE OF THE LINKED OBJECTS;

// the incstance's property __proto__ is created in step N: 3 -> {} is linked to Prototype; this step creates this property and it sets its value to the prototype property of the function that is being called; that's exactlly what is written here:
console.log(kika.__proto__ === Person.prototype); // true;
Person.prototype.species = "Home Sapiens";
console.log(kika.hasOwnProperty("firstName")); // true;
console.log(kika.hasOwnProperty("species")); // false; because this property is not really inside the instance object. it simply has acces to it because of its prototype; so because it's in the prototype property of Person;

////////////////////////////////////////////////////////////////////////////////////
// everything starts with the Person constructor function in our example; this construction function has a PROTOTYPE PROPERTY which is an obect and inside that object we defined the calcAge() method; Actually Person.prototype itself has a reference back to Person which is the constructor property
// Person.prototype is not the PROTOTYPE of Person, but of the Objects that are created through the Person function;
// How the Object is created using the 'NEW' operator and the Constructor function:
// When we call a function, any function with the 'NEW' operator the first thing that is going to happen is that the new empty Object is created instantly. Then the 'THIS' keyword in Constructor function call is set to the newly created Object. So inside the function execution context 'THIS' is now the new empty Object. Then commes the magical step. The new Object is linked to the Constructor function prototype property. in this case to Person.prototype. this happens internally by adding __proto__  property to the new Object. So, Person.prototype is now the new Object prototype which is denoted in __proto__ property of the instances. So __proto__ always points to an Object prototype. finally the new Object is automatically returned from the function;
