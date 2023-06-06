import { mkdirSync } from "fs";
import { input } from "../index.js";

function createComponentsDir() {
  const chosenDir = setGeneratedComponentsDir();

  mkdirSync(chosenDir, { recursive: true });
}

function setGeneratedComponentsDir() {
  const currentDir = process.cwd();
  const componentsFolder = input(
    "Where to put the generated components (MUST start without ./ nor /): "
  );

  return `${currentDir}/${componentsFolder}`;
}

export default setGeneratedComponentsDir;
