"use strict";
let test = "xxx";

// Node.js is the way to runnig JavaScript outside of the Browser

// const arr = [1, 2, 4, -3, 100, 0, 7];

// const max = Math.max.apply(null, arr);

// console.log(max, "xxx");

const count = (function closure() {
    let count = 0;

    function inner() {
        count = count + 1;
        return count;
    }

    return inner;
})();

console.log(count());
console.log(count());
console.log(count());
