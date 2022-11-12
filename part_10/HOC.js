const oneWord = function (str) {
    return str.replace(/ /g, (el) => "*".repeat(el.length)).toLowerCase();
};

const upperFirstWord = function (str) {
    const arr = str.split(" ");
    const [firstWord, ...other] = arr;
    return [firstWord.toUpperCase(), ...other].join(" ");
};

// Higher-order function;
const transformer = function (str, fn) {
    return `Transform by: ${fn.name}; result -> ${fn(str)}`;
};

console.log(transformer("JavaScript is the best!", upperFirstWord));
console.log(transformer("JavaScript     is  the          best!", oneWord));

//-------------
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Kika");

const greetArrow = (greeting) => (name) => console.log(`${greeting}, ${name}`);
greetArrow("Hello from an Arrow")("Sissa");

const closure = (function () {
    let counter = 0;

    function inner() {
        return (counter += 1);
    }
    return inner;
})();

console.log(closure());
console.log(closure());
console.log(closure());
