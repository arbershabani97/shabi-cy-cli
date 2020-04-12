const fs = require("fs");
const path = require("path");

var copyRecursiveSync = function (src, dest) {
	var exists = fs.existsSync(src);
	var stats = exists && fs.statSync(src);
	var isDirectory = exists && stats.isDirectory();
	if (isDirectory) {
		if (!fs.existsSync(dest)) fs.mkdirSync(dest);
		fs.readdirSync(src).forEach(function (childItemName) {
			copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
		});
	} else {
		fs.copyFile(src, dest, (err) => {
			if (err) console.log(err);
		});
	}
};

module.exports = {
	reports: (name) => {
		if (!fs.existsSync("./cypress")) fs.mkdirSync("./cypress");
		if (!fs.existsSync("./cypress/results")) fs.mkdirSync("./cypress/results");

		if (name.includes("/")) {
			let defaultFolder = "./cypress/results";
			const folderNames = name.split("/");
			folderNames.map((folder, i) => {
				if (folderNames.length - 1 === i) {
					if (!fs.existsSync(defaultFolder + "/assets")) fs.mkdirSync(defaultFolder + "/assets");
					copyRecursiveSync("./cypress/results/assets", defaultFolder + "/assets");
				} else {
					defaultFolder = defaultFolder + "/" + folder;
					if (!fs.existsSync(defaultFolder)) fs.mkdirSync(defaultFolder);
				}
			});
		}
	},
};
