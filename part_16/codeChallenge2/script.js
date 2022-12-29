const container = document.querySelector(".container");
let img;

const createImage = function (path) {
    return new Promise(function (resolve, reject) {
        img = document.createElement("img");
        img.src = path;

        img.addEventListener("load", function () {
            container.append(img);
            resolve(img);
        });

        img.addEventListener("error", function () {
            reject(new Error("Not such an image"));
        });
    });
};

createImage("../img/img-1.jpg")
    .then((img) => {
        console.log("image 1 is loaded...");
        return wait(2000, img);
    })
    .then((el) => {
        container.removeChild(el);
        return createImage("../img/img-2.jpg");
    })
    .then((el) => {
        console.log("image 2 is loaded...");
        return wait(2000, el);
    })
    .then((el) => {
        container.removeChild(el);
        return createImage("../img/img-3.jpg");
    })
    .then((el) => {
        console.log("image 3 is loaded...");

        return createImage("../img/img-4.jpg");
    })
    .catch((err) => console.log(err.message));

function wait(delay, el) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(el);
        }, delay);
    });
}
