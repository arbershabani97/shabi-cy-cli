const fs = require("fs");
const {spawn} = require("child_process");

module.exports = (name) => {
	fs.readdir("cypress/integration", function (err, files) {
		if (err) return console.log("Unable to scan directory: " + err);
		const existingFile = files.find((file) => Number(file.slice(2, 5)) === Number(name));
		let spawnedProcess = spawn("npm", ["run", "file", `cypress/**/${existingFile}`], {stdio: "inherit", shell: true});
		spawnedProcess.on("close", () => {
			process.exit();
		});
	});
};
