import { mkdirSync } from "fs";
import { input } from "../../bin/index.js";

function createComponentsDir() {
  const chosenDir = setGeneratedComponentsDir();

  mkdirSync(chosenDir, { recursive: true });

  return chosenDir;
}

function setGeneratedComponentsDir() {
  const currentDir = process.cwd();
  let componentsFolder = input("Where to put the generated components: ");

  if (componentsFolder.startsWith("/")) {
    componentsFolder = componentsFolder.slice(1);
  }
  if (componentsFolder.startsWith("./")) {
    componentsFolder = componentsFolder.slice(2);
  }

  return `${currentDir}/${componentsFolder}`;
}

export default createComponentsDir;
