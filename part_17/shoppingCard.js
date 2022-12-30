// Exporting module;
console.log("Exporting module");

// Blocking code
// top level AWAIT block code execution in the imported modules as well
console.log("Start fetching users");
await fetch("https://jsonplaceholder.typicode.com/users");
console.log("Finish fetching users...");
// end blocking code...
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
	cart.push({ product, quantity });

	console.log(`${quantity} ${product} is added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
