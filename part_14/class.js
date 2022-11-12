// 1. Classes are not hoisted
// 2. just like functions, Classes are first-class citizens, it means we can pass them into functions and return them from a functions;
// 3. Classes are executed in strict mode;

// EVERY OBJECT IN JAVASCRIPT CAN HAVE GETTERS AND SETTERS. we call this special properties ACCESSOR properties, while the normal properties are called data properties;

// we simply use this like a property; we don't call the method;
// it is not mandatory to specify a setter when we have a getter; just the getter or just the setter would be enough;
// how to use setter, if it was a regular method then we would  have to do this:
// account.latest(and we call it with the movement); but setter is actually like a property and not a method, so we can simply set it just like we set any other property;

// Classes also have GETTERS AND SETTES and they work the exactly the same way;

class PersonCl {
    constructor(fullname, birthYear) {
        this.fullname = fullname;
        this.birthYear = birthYear;
    }
    // Instance Methods
    // Methods are added to .prototype property of the class, which is going to be the prototype of the objects created by the class
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    // getters and setters
    get age() {
        return 2037 - this.birthYear;
    }

    set fullname(name) {
        // by convention we create new variable like setter's name with undersocore infront. _fullname;
        if (name.includes(" ")) {
            this._fullname = name;
        } else {
            // const newName = prompt("You must have two names!");
            // this._fullname = newName;
        }
    }

    get fullname() {
        return this._fullname;
    }

    // static methods can be called only from a Class, NOT from a instances of that Class
    static hey() {
        console.log("Hey there...");
        console.dir(this);
    }
}

PersonCl.hey();

const jessica = new PersonCl("Jessica Davis", 1990);
// console.log(jessica);
PersonCl.prototype.greet = function () {
    console.log(`Hey, ${this.firstName}`);
};

const mario = new PersonCl("Mario", 1974);
// console.log(mario.fullname);

// jessica.greet();
// console.log(jessica.age);

// EVERY OBJECT IN JAVASCRIPT CAN HAVE GETTERS AND SETTERS. we call this special properties ACCESSOR properties, while the normal properties are called data properties;
const account = {
    owner: "Jonas",
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(movement) {
        this.movements.push(movement);
    },
};
// we simply use this like a property; we don't call the method;
// console.log(account.latest);
// it is not mandatory to specify a setter when we have a getter; just the getter or just the setter would be enough;
// how to use setter, if it was a regular method then we would  have to do this:
// account.latest(and we call it with the movement); but setter is actually like a property and not a method, so we can simply set it just like we set any other property;
account.latest = 50;
// console.log(account.movements);
// Classes also have GETTERS AND SETTES and they work the exactly the same way;
