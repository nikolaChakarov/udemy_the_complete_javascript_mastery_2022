class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going with ${this.speed}`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going with ${this.speed}`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class Ev extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(charge) {
        this.#charge += charge;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} is going with ${this.speed} with a charge of ${
                this.#charge
            }`
        );
        return this;
    }
}

const toyota = new Ev("Toyota", 120, 95);

console.log(toyota);
console.log(toyota.accelerate().accelerate().brake().chargeBattery(5));
console.log(toyota.speedUS);
