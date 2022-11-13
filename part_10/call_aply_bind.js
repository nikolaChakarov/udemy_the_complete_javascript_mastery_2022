const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],
	book(flightNum, passenger) {
		console.log(
			`${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({
			flight: `${this.iataCode}${flightNum}`,
			passenger,
		});
	},
};

lufthansa.book(239, "Kika Andersson");
lufthansa.book(365, "Sisa");

const eurowings = {
	name: "Eurowings",
	iataCode: "EW",
	bookings: [],
};

const book = lufthansa.book;
// CALL METHOD
book.call(eurowings, 777, "Dessa");
console.log(eurowings);

book.call(lufthansa, 747, "Mario");
console.log(lufthansa);

// APPLY METHOD
const swiss = {
	name: "Swiss Air Lines",
	iataCode: "LX",
	bookings: [],
};

const flightData = [777, "Sandra"];
book.apply(swiss, flightData);

// better to use:
book.call(swiss, ...flightData);
console.log(swiss);

// BIND METHOD:  just like the call and apply methods, bind also alows us to manually set the 'THIS' keyword for any unction call. Now the difference is that bind does not immediately call the function. Instead it returns a new function where THIS keyword is bound. So it's set to whatever value we pass into bind.

const bookEw = book.bind(eurowings);
bookEw(...flightData);
console.log(eurowings);
// more specific -> first argument always the same; PARTIAL APPLICATION - it means that the part of the arguments are already applied;
const bookEw23 = book.bind(eurowings, 23);
/// the rest of the arguments we pass here.
bookEw23("Manuel");
bookEw23("Bazil");
console.log(eurowings);

// BIND METHOD WITH EVENT LISTENERS
lufthansa.planes = 300;
lufthansa.byPlane = function () {
	console.log(this);
	this.planes++;
	console.log(`This company ${this.name} has ${this.planes} planes!`);
};

document
	.querySelector(".buy")
	.addEventListener("click", lufthansa.byPlane.bind(lufthansa));

// BIND METHOD WITH PARTIAL APPLICATION (preset parameters);
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123

// challenge
const challenge = (rate) => {
	return (value) => {
		console.log(value + value * rate);
	};
};

const addVAT2 = challenge(0.23);
addVAT2(200);
