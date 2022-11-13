// function always has access to the variable environment of the execution context in which it was created even after that ececution context is gone. The closure is then basically this variable environment attached to the function.

// A closure gives a function access to all the variables of its parent function, even after that paren function has returned. The function keeps refernce to its outer scope, which preserves the scope chain throughout time;
// A closure never lose connection to variables that existed at the function birth place;

const secureBooking = function () {
	let passengersCount = 0;

	return function () {
		passengersCount++;
		console.log(`${passengersCount} passengers`);
	};
};

const booker = secureBooking();

// we don't have to return the function to create a closure. we can assign it from outside of the parent scope
let f;

const g = function () {
	let a = 23;

	f = function () {
		return (a += 1);
	};
};

g();
console.log(f());
console.log(f());

//-----------
const boardPassengers = function (n, wait) {
	const perGroup = n / 3;

	setTimeout(function () {
		console.log(`We are now boarding all ${n} passengers`);
		console.log(`There are 3 groups, each with ${perGroup} passengers`);
	}, wait * 1000);

	console.log(`Will start bouarding in ${wait} seconds`);
};

boardPassengers(180, 3);
