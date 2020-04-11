const ask = require("./helpers/ask");
const deleteTests = require("../components/deleteTests");

module.exports = async () => {
    console.log("\n---------------");
    
	const addTests = await ask("\nWhich tests would you like to delete? (ex. 1, 4, 7)\n");
	const tests = addTests.split(",").map((test) => test.trim());
	console.log("\n---------------");

	deleteTests(tests);
};
