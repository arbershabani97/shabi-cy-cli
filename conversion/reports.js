const fs = require("fs").promises;
const checkFolder = require("../services/folder.service");
module.exports = async () => {
	const files = await fs.readdir("cypress/results");
	await Promise.all(
		files.map(async (file, i) => {
			if (file.endsWith(".json")) {
				const obj = JSON.parse(await fs.readFile(`cypress/results/${file}`, "utf8"));
				const fileName = obj.results[0].file.split("\\").slice(2).join("/").split(".json")[0] + ".html";

				checkFolder.reports(fileName);
				await fs.rename(`cypress/results/${file.split(".json")[0] + ".html"}`, `cypress/results/${fileName}`);
				console.log("File Renamed.");
				await fs.unlink(`cypress/results/${file}`);
			}
		}),
	);

	const _files = await fs.readdir("cypress/results");
	if (!_files.find((a) => a.includes("."))) {
		checkFolder.removeAssets("./cypress/results/assets");
	}
};
