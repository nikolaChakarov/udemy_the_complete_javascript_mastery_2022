// four fundamental principals of Object Oriented Programming
// ABSTRACTION; ENCAPSULATION; INFERITANCE; POLYMORPHISM

// ABSTRACTION:
// ignoring or hidding details that don't matter, allowing us to get an overview perspective ot the thing we're implementing, instead of messing with details that don't realy matter to our implementaion

// ENCAPSULATION:
// Keeping properties and methods private inside the class, so they are not accessible outside the class. Some method can be exposed as a public interface (API);
// the term STATE simply referse to an object's data;
// the  public interface is essentially all the methods that are not private, so they are not encapsulated. Making methods private, makes it easier for us to change our code withour breaking code from outside.

// INFERITANCE:
// Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reuse a common logic and to model real-world relationship;

// POLYMORPHISM (many shapes):
// A child class can overwrite a method it inherit from a parent class;

// PROTOTYPLE INHERITENCE:
// The Prototype contains methods (behavior) that are accessible to all objects linked to that PROTOTYPE
// behavior or methods is DELEGATED to the linked prototypr object; PROTOTYPE (CONTAINS METHODS) -> OBJECT (CAN ACCESS METHODS)
// exemple: Array.prototype.map() is the prototype of all array objects we create in JavaScript. Therefore, all arrays have access to the map method. so our array (we created) inherits the map method. Or again, we can also say that the array delegated the behavior of mapping to its prototype.

// HOW DO WE ACTUALLY CREATE PROTOTYPE? HOW DO WE LINK OBJECTS TO PROTOTYPES? HOW CAN WE CREATE NEW OBJECTS, WITHOUT HAVING CLASSES?
// IN JAVASCRIPT WE HAVE 3 WAYS:

// 1. CONSTRUCTOR FUNCTIONS
// technique to create an object from a function;
// this is how buld-in objects like Arrays, Maps or Sets are actually implemented;

// 2. ES6 CLASSES
// modern alternative to constructor function syntax;
// behind the scenes, ES6 Classes work exactly like constructor functions;
// ES6 Classes do NOT behave like classes in 'classical OOP'

// 3. Object.create()

// THIS KEY WORD;
// THIS key word/variable: Special variable that is created for every execution context(every function); Take the value (points to) the 'owner' of the function in which the THIS key word is used;
// THIS is not static! It depends on how the function is called, and its value is only assigned when the function is ACTUALLY CALLED;
// 1. Method: THIS = object that is calling the method;
// 2. Simple function call: THIS = UNDEFINED (IN STRICT MODE! OTHERWISE WINDOW IN THE BROWSER);
// 3. Arrow function: THIS = THIS of surrounding function(lexical THIS);
// 4. Event listener: THIS = DOM element that the handler is attached to;
// !!! THIS does NOT point to the function itself, and also NOT the its variable environment!
