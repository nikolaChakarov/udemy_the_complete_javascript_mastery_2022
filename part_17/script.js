// Importing module;
import {
	addToCart,
	totalPrice as price,
	totalQuantity,
} from "./shoppingCard.js";
console.log("Importing module");

addToCart("bread", 5);
console.log(price, totalQuantity);

// console.log("Start fetching...");
// AWAIT in top level code, blocks execution context!
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// fetch("https://jsonplaceholder.typicode.com/posts")
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));
// console.log("xxxxxxxxxx");

const getLastPost = async function () {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();
	console.log(data);
	return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
// not very lean
// lastPost.then((res) => console.log(res));

const lastPost2 = await getLastPost();
console.log(lastPost2);
console.log("xxxxxxxxxxx");

// 274 BEFORE MODULES;
// CLOSURES allow a function to have access to all the variables that were present at its birth place;
const ShoppingCard2 = (function () {
	const cart = [];
	const shippingCost = 10;
	const totalPrice = 237;
	const totalQuantity = 23;

	const addToCart = function (product, quantity) {
		cart.push({ product, quantity });
		console.log(
			`${quantity} ${product} is added to cart. Shipping cost is ${shippingCost}`
		);
	};

	const orederStock = function (product, quantity) {
		cart.push({ product, quantity });
		console.log(`${quantity} ${product} ordered from supplier`);
	};

	return {
		addToCart,
		cart,
		totalPrice,
		totalQuantity,
	};
})();

ShoppingCard2.addToCart("milk", 5);
console.log(ShoppingCard2);
