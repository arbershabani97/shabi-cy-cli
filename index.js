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

// Components w/ Extras - Classes
// const createReactClassWithExtras = require("./questions/classes/class");

let extras = process.argv.find((arg) => arg === "--extra" || arg === "-E");
if (extras) {
	// if (type === "new") createReactClassWithExtras(name);
} else {
	if (type === "new") createNewCypressTest(name);
}
