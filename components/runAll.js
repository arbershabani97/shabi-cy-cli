const {spawn} = require("child_process");

module.exports = () => {
	let spawnedProcess = spawn("npm", ["run", "test"], {stdio: "inherit", shell: true});
	spawnedProcess.on("close", () => {
		process.exit();
	});
};
