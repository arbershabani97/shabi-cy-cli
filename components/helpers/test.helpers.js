const importsString = (classes, tests) => {
	const renderedClasses = classes.map((_class) => `const ${_class.capitalize()} = require("../helpers/${_class}");\n`);
	const renderedClassesInit = classes.map((_class) => `\nconst ${_class} = new ${_class.capitalize()}();`);
	const renderedTests = tests.map((_test) => {
		const name = `run${_test.split("_")[0]}Tests`;
		return `const {${name}} = require("./${_test}");\n`;
	});
	return `${renderedClasses.join("")}${renderedTests.join("")}${renderedClassesInit.join("")}`;
};

const beforeEachString = (tests, runTests) => {
	if (!runTests) return "";
	const runningTests = tests.map(
		(_test) => `
        run${_test.split("_")[0]}Tests();`,
	);

	return `
    beforeEach(() => {${runningTests.join("")}
    });  
`;
};
const describeCasesString = (describeCases, itCases) => {
	if (describeCases < 2) return "";
	const it = `it("should do something", () => {

    });`;
	const describe = `describe("", () => {
    ${it.repeat(itCases ? itCases : 1)}
});
`;
	return `
${describe.repeat(describeCases - 1)}
`;
};

module.exports = {importsString, beforeEachString, describeCasesString};
