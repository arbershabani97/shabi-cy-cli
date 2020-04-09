const fs = require("fs");
const {importsString, beforeEachString, describeCasesString} = require("../helpers/test.helpers");
const generateString = (id) => String(id).padStart(3, "000");

const content = (classes, tests, runTests, describeCases, itCases) => {
	const it = `
    it("should do something", () => {

    });
    `;
	return `${importsString(classes, tests)}
    
describe("", () => {${beforeEachString(tests, runTests)}
    ${it.repeat(itCases ? itCases : 1)}
});${describeCasesString(describeCases, itCases)}`;
};
module.exports = (name, classes, tests, runTests, describeCases, itCases) => {
	const [id, Name] = name.split("-");

	let existingClasses = [];
	let existingTests = [];
	fs.readdir("cypress/helpers", function (err, files) {
		if (err) return console.log("Unable to scan directory: " + err);
		classes.map((_class) => {
			const existingFile = files.find((file) => file.toLowerCase().split(".")[0] === _class.toLowerCase());
			if (existingFile) existingClasses.push(existingFile.split(".js")[0]);
		});

		fs.readdir("cypress/integration", function (err, files) {
			if (err) return console.log("Unable to scan directory: " + err);
			tests.map((_test) => {
				const existingFile = files.find((file) => {
					return Number(file.slice(2, 5)) === Number(_test);
				});
				if (existingFile) existingTests.push(existingFile);
			});

			fs.writeFile(`cypress/integration/TC${generateString(id)}_${Name}.spec.js`, content(existingClasses, existingTests, runTests, describeCases, itCases), (err) => {
				if (err) return console.log(err);
				console.log("Component Created");
				process.exit();
			});
		});
	});
};
