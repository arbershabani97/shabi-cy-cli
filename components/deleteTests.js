const fs = require("fs");

module.exports = (tests) => {
    let existingTests = []
	fs.readdir("cypress/integration", function (err, files) {
        if (err) return console.log("Unable to scan directory: " + err);

        tests.forEach((_test) => {
            const existingFile = files.find((file) => Number(file.slice(2, 5)) === Number(_test));
            if (existingFile) existingTests.push(existingFile);
        });

        existingTests.forEach((existingFile,i)=>{
            fs.unlink(`cypress/integration/${existingFile}`, function (err) {
                if (err) {
                    console.log(`${existingFile} failed to delete!`);
                } else {
                    console.log(`${existingFile} deleted!`);
                }
                if(i === existingTests.length - 1) process.exit();
            });
        });
        if(!existingTests.length) {
            console.log("No tests found!");
            process.exit();
        }
	});
};