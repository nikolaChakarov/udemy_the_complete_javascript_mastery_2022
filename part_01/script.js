// if we declare variable without let, const or var, JS ataches this variable to the global window object!
test = "some text for testing...";

let x = "...another text for testing...";

let multipleLines = "test\ntest\ntest";
multipleLines = `test
test
test`;

// 7 primitive types: string; number; boolean; null, undefined; symbol; bigInt;

// type conversion vs type coercion

// 5 falsy values: 0; ''; undefined; null; NaN; -> all this will be converted to false when we attempt to convert them to boolean;

// const errors = [{ one: 1 }, { two: 2 }, { three: 3 }];

// let res = errors.reduce((acc, curr) => {
//     return { ...acc, ...curr };
// }, {});

// console.log(res);

// const errors = {
//     email: {
//         dirty: false,
//         error: false,
//         message: "",
//     },
//     password: {
//         dirty: false,
//         error: false,
//         message: "",
//     },
//     confirmPassword: {
//         dirty: false,
//         error: false,
//         message: "",
//     },
// };

// const res = Object.entries(errors).reduce((acc, [field, fieldError]) => {
//     acc[field] = { ...fieldError, dirty: true };

//     return acc;
// }, {});

// console.log(res);

// expression is a piece of code that produces a value
// statement translate our actions
