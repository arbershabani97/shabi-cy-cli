const fs = require("fs").promises;

const deleteTest = async (test, folder) => {
	const files = await fs.readdir(folder);
	const existingFile = files.find((file) => Number(file.slice(2, 5)) === Number(test.split("/").pop()));

	if (existingFile) {
		await fs.unlink(`${folder}/${existingFile}`);
		console.log(`${folder.split("integration")[1]}/${existingFile} deleted!`);
	} else {
		console.log(`${test} - test not found!`);
	}
};

module.exports = async (tests) => {
	await Promise.all(
		tests.map(async (test) => {
			if (test.includes("/")) {
				const folder = test.split("/").slice(0, -1).join("/");
				await deleteTest(test, `cypress/integration/${folder}`);
			} else {
				await deleteTest(test, `cypress/integration`);
			}
		}),
	);

	process.exit();
};
