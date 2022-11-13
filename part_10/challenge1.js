const poll = {
	question: "What is your favourite programming language?",
	options: ["0: JavaScript", "1: Pyton", "2: Rust", "3: C++"],
	answers: new Array(4).fill(0),

	displayResults(type = "array") {
		type === "array"
			? console.log(this.answers)
			: console.log(`Poll results are ${this.answers.join(" ")}`);
	},
};

poll.registerNewAnswer = function () {
	const answer = prompt(
		`${this.question}\n${this.options.join("\n")}\n(Write option number)`
	);

	if (answer === null) return;

	const options = [0, 1, 2, 3];
	if (!options.includes(Number(answer))) {
		alert("Only numbers between 0 and 3, please.");
		return;
	}
	this.answers[answer]++;
	this.displayResults("string");
};

const btn = document.querySelector(".poll");
btn.addEventListener("click", poll.registerNewAnswer.bind(poll));

const testData = { answers: [4, 1, 2, 5] };
poll.displayResults.call(testData, "string");
poll.displayResults.call(testData, "array");
