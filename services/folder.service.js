const fs = require("fs");

module.exports = {
	reports: (name) => {
		if (!fs.existsSync("./cypress")) fs.mkdirSync("./cypress");
		if (!fs.existsSync("./cypress/results")) fs.mkdirSync("./cypress/results");

		if (name.includes("/")) {
			let defaultFolder = "./cypress/results";
			const folderNames = name.split("/");
			folderNames.map((folder, i) => {
				if (folderNames.length - 1 !== i) {
					defaultFolder = defaultFolder + "/" + folder;
					if (!fs.existsSync(defaultFolder)) fs.mkdirSync(defaultFolder);
				}
			});
		}
	},
};
