const container = document.querySelector(".container");
const imagesEl = document.querySelector(".images");

// Part one
const loadNPause = async function () {
    try {
        let elToRemove;

        const img1 = await createImage("../img/img-1.jpg");
        container.appendChild(img1);
        elToRemove = await wait(2000, img1);
        container.removeChild(elToRemove);

        const img2 = await createImage("../img/img-2.jpg");
        container.appendChild(img2);
        elToRemove = await wait(2000, img2);
        container.removeChild(elToRemove);

        const img3 = await createImage("../img/img-3.jpg");
        container.appendChild(img3);
        elToRemove = await wait(2000, img3);
        container.removeChild(elToRemove);

        // test error handling
        // const img4 = await createImage("../img/img-4.jpg");
    } catch (err) {
        console.error(err.message);
    }
};

const createImage = function (path, className) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement("img");
        img.src = path;

        className && img.classList.add(className);

        img.addEventListener("load", function () {
            resolve(img);
        });

        img.addEventListener("error", function () {
            reject(new Error(`Not an image with this name: ${path}`));
        });
    });
};

const wait = function (time, el) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(el);
        }, time);
    });
};

// loadNPause();

// End Part One;
////////////////////////////////
// Part Two;
const paths = ["../img/img-1.jpg", "../img/img-2.jpg", "../img/img-3.jpg"];

const loadAll = async function (imgPaths) {
    const images = await Promise.all([
        ...imgPaths.map((path) => createImage(path, "parallel")),
    ]);

    images.forEach((img) => imagesEl.appendChild(img));
};

loadAll(paths);
