const fs = require("fs");
const prompt = require("prompt-sync")();

const currentDir = process.cwd();
const componentsFolder = prompt("Where to put the generated components: ");
