const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

function decode(input) {
    const rows = input.split("+");
    const records = [];

    for (const row of rows) {
        records.push(row.split(";"));
    }

    const messages = [];
    for (const [idx, record] of records.entries()) {
        let str = "";
        let [title, from, to, hours] = record;

        title = generateTitle(title);
        from = generateDestinations(from);
        to = generateDestinations(to);
        hours = generateHours(hours);

        str = `${title} from ${from} to ${to} ${hours}`;
        messages.push(str);
    }

    for (const [ind, el] of messages.entries()) {
        console.log(el.padStart(49, "-"));
    }
}

function generateHours(str) {
    const data = "(" + str.replace(":", "h") + ")";
    return data;
}

function generateDestinations(str) {
    const data = new RegExp(/[a-zA-z]+/);
    return str.match(data)[0].trim().toUpperCase();
}

function generateTitle(str) {
    const emodji = "🐢";
    const title = str.replace(/_/g, " ").trim() + " from ";
    return title.startsWith("Delayed") ? `${emodji} ${title}` : title;
}

decode(flights);
