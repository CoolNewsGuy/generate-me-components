const fs = require("fs");
const prompt = require("prompt-sync")();

function setGeneratedComponentsDir() {
  const currentDir = process.cwd();
  const componentsFolder = prompt(
    "Where to put the generated components (MUST start without ./ nor /): "
  );

  return `${currentDir}/${componentsFolder}`;
}

function setComponentsNames() {
  const componentsNames = prompt(
    "Choose names for your components (put space between each one): "
  ).split(" ");
}
