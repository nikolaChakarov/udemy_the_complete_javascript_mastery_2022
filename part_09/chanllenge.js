document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const area = document.querySelector("textarea");
const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick() {
    const input = area.value;

    const data = input
        .split("\n")
        .map((el) => el.trim())
        .reduce((acc, curr) => {
            const [first, second] = curr.toLowerCase().split("_");
            const startUpper = second.replace(
                second[0],
                second[0].toUpperCase()
            );
            const final = first.concat(startUpper);
            acc.push(final);
            return acc;
        }, []);

    const emoji = "👍";

    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i].padEnd(20, " ") + emoji.repeat(i + 1));
    // }

    for (const [idx, el] of data.entries()) {
        console.log(el.padEnd(20) + emoji.repeat(idx + 1));
    }
}
