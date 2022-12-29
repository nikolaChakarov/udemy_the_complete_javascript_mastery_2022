const geoAuth = "627476375995498468503x99850";
const container = document.querySelector(".container");

const whereAmI = async function () {
    try {
        // const position = await new Promise(function (resolve) {
        //     navigator.geolocation.getCurrentPosition(resolve);
        // });

        const position = await getPostion();

        const { longitude: long, latitude: lat } = position.coords;

        const res = await fetch(
            `https://geocode.xyz/${lat},${long}?geoit=json&auth=${geoAuth}`
        );

        if (!res.ok) throw new Error(`Too fast...status code: ${res.status}`);

        const data = await res.json();
        const str = `You are in ${data.city}, ${data.country}, at ${data.staddress}`;
        container.insertAdjacentHTML("beforeend", str);

        return str;
    } catch (err) {
        console.error(err.message);
        // Reject promise returned from async function
        throw err;
    }
};

function getPostion() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (err) => reject(err)
        );
    });
}

console.log("Will get the location");
// whereAmI()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("Finally..."));

(async function () {
    try {
        const res = await whereAmI();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
    // finally method;
    console.log("Finally...");
})();

console.log("Finish get the location");
////////////////////////////////////////////////////////////////////////////

const get3Countries = async function (c1, c2, c3) {
    try {
        // const position = await getPostion();
        // const { longitude: long, latitude: lat } = position.coords;

        // const data1 = await getJson(
        //     `https://geocode.xyz/${lat},${long}?geoit=json&auth=${geoAuth}`
        // );

        // const [data1] = await getJson(
        //     `https://restcountries.com/v2/name/${c1}`
        // );

        // const [data2] = await getJson(
        //     `https://restcountries.com/v2/name/${c2}`
        // );

        // const [data3] = await getJson(
        //     `https://restcountries.com/v2/name/${c3}`
        // );

        // in Promise.all if one promise rejects, all promises reject!
        const data = await Promise.all([
            getJson(`https://restcountries.com/v2/name/${c1}`),
            getJson(`https://restcountries.com/v2/name/${c2}`),
            getJson(`https://restcountries.com/v2/name/${c3}`),
        ]);

        // console.log([data1.capital, data2.capital, data3.capital]);
        console.log(data.map(([el]) => el.capital));
    } catch (err) {
        console.log(err);
    }
};

const getJson = async function (url, errorMsg = "Something went wrong!") {
    const data = await fetch(url);

    if (!data.ok) throw new Error(`${errorMsg}, status: ${data.status}`);

    return data.json();
};

get3Countries("France", "USA", "Italy");

////////////////////////////////////////////////////////////////////
// Promise.race; the first one wins;
(async function () {
    const res = await Promise.race([
        getJson(`https://restcountries.com/v2/name/${"Tanzania"}`),
        getJson(`https://restcountries.com/v2/name/${"Egypt"}`),
        getJson(`https://restcountries.com/v2/name/${"Mexico"}`),
    ]);

    console.log(res[0].name);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(() => {
            reject(new Error("Request took too long!"));
        }, sec * 1000);
    });
};

Promise.race([
    getJson(`https://restcountries.com/v2/name/${"usa"}`),
    timeout(0.4),
])
    .then((res) => console.log(res[0].name))
    .catch((err) => console.error(err.message));

// Promise.allSettled; returns an array of all the settled promises;
Promise.allSettled([
    Promise.resolve("success"),
    Promise.reject("...errror"),
    Promise.resolve("another success"),
])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

// Promise.any [ES2021] similar to Promise.race with the difference that the rejected promises are ignored; returns the first fullfiled promise;
