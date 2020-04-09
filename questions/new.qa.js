const checkAnswer = require("./helpers/answer");
const ask = require("./helpers/ask");
const createNewCypressTestWithExtras = require("../components/extras/new.extras");

module.exports = async (name) => {
	console.log("\n---------------");

	const addClasses = await ask("\nWhat classes would you like to import? (ex. login, register)\n");
	const classes = addClasses.split(",").map((_class) => _class.trim());
	console.log("\n---------------");

	const addTests = await ask("\nWould you like to import tests? (ex. 7, 8, 13)\n");
	const tests = addTests.split(",").map((test) => test.trim());
	console.log("\n---------------");

	const addRunTests = await ask("\nWould you like to run the imported tests in beforeEach? (yes, no)\n");
	const runTests = checkAnswer(addRunTests);
	if (!addRunTests) console.log("yes");
	console.log("\n---------------");

	const addDescribeCases = await ask("\nHow many describe cases would you like to add? (ex. 4) [default=1] \n");
	const describeCases = Number(addDescribeCases);
	console.log("\n---------------");

	const addItCases = await ask("\nHow many describe cases would you like to add? (ex. 7) [default=1] \n");
	const itCases = Number(addItCases);
	console.log("\n---------------");

	createNewCypressTestWithExtras(name, classes, tests, runTests, describeCases, itCases);
};
