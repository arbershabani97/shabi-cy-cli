const fs = require("fs");
const generateString = (id) => String(id).padStart(3, "000");
const content = () => {
	return `describe("", () => {
    it("should do something", () => {

    });
});`;
};
module.exports = (name) => {
	if (!fs.existsSync("./cypress")) fs.mkdirSync("./cypress");
	if (!fs.existsSync("./cypress/integration")) fs.mkdirSync("./cypress/integration");

	const [id, Name] = name.split("-");

	fs.writeFile(`cypress/integration/TC${generateString(id)}_${Name}.spec.js`, content(), (err) => {
		if (err) return console.log(err);
		console.log("TestCase Created");
		process.exit();
	});
};
