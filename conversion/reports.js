const fs = require("fs");
const checkFolder = require("../services/folder.service");
module.exports = () => {
	fs.readdir("cypress/results", function (err, files) {
		if (err) return console.log("Unable to scan directory: " + err);
		files.forEach((file, i) => {
			if (file.endsWith(".json")) {
				const obj = JSON.parse(fs.readFileSync(`cypress/results/${file}`, "utf8"));
				const fileName = obj.results[0].file.split("\\").slice(2).join("/").split(".json")[0] + ".html";

				checkFolder.reports(fileName);
				fs.rename(`cypress/results/${file.split(".json")[0] + ".html"}`, `cypress/results/${fileName}`, function (err) {
					if (err) throw err;
					console.log("File Renamed.");
					fs.unlink(`cypress/results/${file}`, function (err) {
						if (err) console.log(err);
						if (i === files.length - 1) {
							fs.readdir("cypress/results", function (err, files) {
								if (err) console.log(err);
								if (!files.find((a) => a.includes("."))) {
									checkFolder.removeAssets("./cypress/results/assets");
								}
							});
						}
					});
				});
			}
		});
	});
};
