const fs = require("fs");
const prompt = require("prompt-sync")();

function setGeneratedComponentsDir() {
  const currentDir = process.cwd();
  const componentsFolder = prompt(
    "Where to put the generated components (MUST start without ./ nor /): "
  );

  return `${currentDir}/${componentsFolder}`;
}
