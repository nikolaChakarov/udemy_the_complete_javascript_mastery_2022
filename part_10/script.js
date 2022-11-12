// JavaScript treats functions as first-class citizens;
// This means, the functions are simply values
// Functions are just another 'type' of object;
// Higher-order function is a function that receives another function as an argument, that returns a new function or both. this is only possibe because of first-class functions (fist-class function simply means that javascript treats functions as a value);

const bookings = [];

const createBooking = function (flightNumber, numPassengers = 1, price = 199) {
    const booking = { flightNumber, numPassengers, price };
    // console.log(booking);

    bookings.push(booking);
};

createBooking("HL123");

let flight = "HL234";
const kika = {
    name: "Kika Andersson",
    passport: 3423423534,
};

const checkIn = function (flightNum, passenger) {
    flightNum = "LHxxx";
    passenger.name = "Mrs. " + passenger.name;
};

checkIn(flight, kika);
console.log(flight);
console.log(kika);
