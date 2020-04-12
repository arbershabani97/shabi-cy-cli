const fs = require("fs");

module.exports = (name) => {
	fs.readdir("cypress/integration", function (err, files) {
		if (err) return console.log("Unable to scan directory: " + err);
		const existingFile = files.find((file) => Number(file.slice(2, 5)) === Number(name));
        fs.unlink(`cypress/integration/${existingFile}`, function (err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            console.log('File deleted!');
            process.exit();
        }); 
	});
};