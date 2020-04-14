const fs = require("fs");
const {exec} = require("child_process");

module.exports = (name) => {
	let folder = name.split("/").slice(0, -1).join("/");
	if (folder) folder = `/${folder}/`;
	name = name.split("/").pop();

	fs.readdir(`cypress/integration${folder}`, function (err, files) {
		if (err) return console.log("Unable to scan directory: " + err);
		const existingFile = files.find((file) => Number(file.slice(2, 5)) === Number(name));
		let spawnedProcess = spawn("npm", ["run", "file", `cypress/**/${existingFile}`], {stdio: "inherit", shell: true});
		spawnedProcess.on("close", () => {
			process.exit();
		});
	});
};
