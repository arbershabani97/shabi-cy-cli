const fs = require("fs").promises;
const checkFolder = require("../services/folder.service");

module.exports = async (name) => {
	checkFolder.components(name);
	let folder = name.split("/").slice(0, -1).join("/");
	if (folder) folder = `/${folder}`;

	const files = await fs.readdir(`cypress/integration${folder || ""}`);
	const existingFile = files.find((file) => Number(file.slice(2, 5)) === Number(name.split("/").pop()));
	await fs.unlink(`cypress/integration${folder}/${existingFile}`);

	console.log(`${folder}/${existingFile} deleted!`);
	process.exit();
};
