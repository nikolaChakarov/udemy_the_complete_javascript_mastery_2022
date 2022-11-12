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

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);

    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge = this.charge * 0.99;
    console.log(
        `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
};

const tesla = new EV("Tesla", 100, 100);

tesla.accelerate();
tesla.break();
tesla.accelerate();
tesla.accelerate();
tesla.break();
