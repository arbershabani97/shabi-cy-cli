const fs = require("fs");
const checkFolder = require("../services/folder.service");
const generateString = (id) => String(id).padStart(3, "000");
const content = () => {
	return `describe("", () => {
    it("should do something", () => {

    });
});`;
};
module.exports = (name) => {
	checkFolder.components(name);
	const folder = name.split("/").slice(0, -1).join("/");
	name = name.split("/").pop();
	const [id, Name] = name.split("-");

	fs.writeFile(`cypress/integration/${folder}/TC${generateString(id)}_${Name}.spec.js`, content(), (err) => {
		if (err) return console.log(err);
		console.log("TestCase Created");
		process.exit();
	});
};
