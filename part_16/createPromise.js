// The Promises are just a spetial kind of object in JavaScript. The Promise Constructor, takes exactly one argument, and that is so-called executor function; As soon as the promise constructor runs, it will automatically execute this executor function, and it will do so by passing it two other arguments - the resolve and the reject functions;

const lotteryPromise = new Promise(function (resolve, reject) {
    console.log("Lottery draw is happening...");
    setTimeout(() => {
        if (Math.random() >= 0.5) {
            // the value that we pass into the RESOLVE funstion, will be passed into the THEN method
            resolve("You WIN 😛");
        } else {
            // the value that we pass into the REJECT funstion, will be passed into the CATCH method
            reject(new Error("You lost your money 😪"));
        }
    }, 2000);
});

lotteryPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));

// Promisifying setTimeout;
const wait = function (seconds) {
    // inside this function we create, and return a promise;
    return new Promise(function (resolve) {
        setTimeout(() => resolve(seconds), seconds * 1000);
    });
};

wait(4)
    .then((sec) => {
        console.log(`I waited for ${sec} seconds`);
        return wait(1);
    })
    .then((res) => {
        console.log(`I waited for ${res} seconds`);
    });

// create immediately FULFILLED or REJECTED Promise;
Promise.resolve("Promise resolved").then((x) => console.log(x));
Promise.reject(new Error("Promise rejected")).catch((x) =>
    console.log(x.message)
);
