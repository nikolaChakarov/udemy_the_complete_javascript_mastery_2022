// call stack; execution context; variable environment; scope;
"use strict";

// execution context!!!

const myName = "nikk";

function first() {
    const age = 30;

    // let and const are block-scoped
    // var is function-scoped
    if (age >= 30) {
        const decade = 3;
        var millenial = true;
    }

    function second() {
        const job = "teacher";
        // console.log(`${myName} is ${age} old ${job}`);
    }

    second();
}

first();

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// var x = 5;
// function test() {
//     console.log(x);
// }

// test();

let obj1 = {
    name: "obj 1",
    m1: function () {
        // console.log(this);
    },
};

obj1.m1();

function test02() {
    // console.log(this);
}

test02();

// const test03 = () => console.log(this);
// test03();

// const obj2 = {
//     firstName: "obj 2",
//     gtreet: () => console.log(this.firstName),
// };

// obj2.gtreet();

const obj3 = {
    name: "obj3",
    greet: function () {
        setTimeout(function () {
            console.log(this);
        }, 1000);

        setTimeout(() => {
            console.log(this);
        }, 1000);

        function f() {
            console.log(this);
        }
        f();
    },
};

obj3.greet();
