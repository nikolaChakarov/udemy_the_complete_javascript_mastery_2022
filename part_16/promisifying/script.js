// getCrurrentPosition takes two functions as arguments; first - for success; second - for error;

// navigator.geolocation.getCurrentPosition(
//     (position) => {
//         console.log(position);
//     },
//     (err) => {
//         console.log(err);
//     }
// );

// promisifying the code from above;
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            // (position) => {
            //     resolve({ ok: true, position });
            // },
            // (err) => {
            //     reject(err);
            // }
            resolve,
            reject
        );
    });
};

const geoAuth = "627476375995498468503x99850";

getPosition()
    .then((res) => {
        const { latitude, longitude } = res.coords;

        const data = fetch(
            `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=${geoAuth}`
        );
        return data;
    })
    .then((data) => data.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
