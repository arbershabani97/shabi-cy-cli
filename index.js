#! /usr/bin/env node
const fs = require("fs");
// console.log(process.argv);

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

// Args
const type = process.argv[2];
const name = process.argv[3] || "";

// Test Components
const createNewCypressTest = require("./components/new");
const runAllCypressTests = require("./components/runAll");
const runCypressTest = require("./components/runTest");
const openCypressTest = require("./components/openTest");
const deleteCypressTest = require("./components/deleteTest");
const deleteCypressTests = require("./questions/delete.qa");

// Components w/ Extras - Classes
const createNewCypressTestWithExtras = require("./questions/new.qa");

let extras = process.argv.find((arg) => arg === "--extra" || arg === "-E");
if (extras) {
	if (type === "new") createNewCypressTestWithExtras(name);
} else {
	if (type === "new") createNewCypressTest(name);
}

if (type === "run") runAllCypressTests();
if (type === "run-test") runCypressTest(name);
if (type === "open-test") openCypressTest(name);
if (type === "delete-test") deleteCypressTest(name);
if (type === "delete-tests") deleteCypressTests();
