// with Object.create there is still the idea of prototype inheritance. However there are no prototype properties involved and also no Constructor funtions and 'NEW' operator. Instead we can use Object.create to essentially manually set the prototype of an object to any other object that we want;

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

// steven is new object and is going to be linked to PersonProto object which will be its prototype;
const steven = Object.create(PersonProto);
steven.init("Steven", 1990);
steven.calcAge();

// challenge #2

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        return console.log(`${this.make} is going with ${this.speed}`);
    }

    brake() {
        this.speed -= 5;
        return console.log(`${this.make} is going with ${this.speed}`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new Car("Ford", 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
