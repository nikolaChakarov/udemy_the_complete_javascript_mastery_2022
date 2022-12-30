export const data = (async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    return res.json();
})();
