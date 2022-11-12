// "use strict";

// const test = [{ name: "Kika" }, { age: "35" }, { country: "Swidden" }];

// const res = test.reduce((acc, curr) => {
//     return { ...acc, ...curr };
// }, {});

// console.log(res);

// let x = [1, 2, 3, 4];

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birtYear: 1991,
    job: "teacher",
    friends: ["Michel", "Peter", "Steven"],
    hasDriverLicense: true,

    // calcAge: function (year) {
    //     console.log(year - this.birtYear);
    // },

    calcAge: function (year) {
        this.age = year - this.birtYear;
        return this.age;
    },

    profile: function (year, color) {
        this.calcAge(year);
        // console.log(
        //     `${this.firstName} is ${this.age} - years old ${this.job}, and has a ${color} eyes..`
        // );
    },
};

// jonas.calcAge(2022);

// 'this' keyword is equal to the object on which the method is called; in other words is equal to the object calling the method!;

const kika = {
    firstName: "kika",
    birtYear: 1980,
    job: "programmer",
    calcAge: function (year) {
        this.age = year - this.birtYear;
        return this.age;
    },
};

jonas.profile(2022, "red");

jonas.profile.call(kika, 2030, "green");
jonas.profile.apply(kika, [2030, "green"]);
const kikaProfile = jonas.profile.bind(kika);
kikaProfile(2030, "green");

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`Your dice is ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if (dice === 6) {
//         console.log("...finaly, you throw a 6. the game is over!");
//     }
// }
