const fs = require("fs").promises;

module.exports = async (tests) => {
	let existingTests = [];

	const files = await fs.readdir("cypress/integration");

	tests.forEach((_test) => {
		const existingFile = files.find((file) => Number(file.slice(2, 5)) === Number(_test));
		if (existingFile) existingTests.push(existingFile);
	});

	await Promise.all(
		existingTests.map(async (existingFile, i) => {
			await fs.unlink(`cypress/integration/${existingFile}`);
			console.log(`${existingFile} deleted!`);
		}),
	);
	if (!existingTests.length) console.log("No tests found!");

	process.exit();
};
