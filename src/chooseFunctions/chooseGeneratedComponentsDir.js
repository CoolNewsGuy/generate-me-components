import { colorizeValues, colorizeText, input } from "../index.js";

function chooseGeneratedComponentsDir() {
  const currentDir = process.cwd();
  let componentsFolder = input(
    `${colorizeText("* Generated components's path")} ${colorizeValues(
      "(src/components) : "
    )}`,
    "src/components"
  ).trim();

  if (componentsFolder.startsWith("/")) {
    componentsFolder = componentsFolder.slice(1);
  }
  if (componentsFolder.startsWith("./")) {
    componentsFolder = componentsFolder.slice(2);
  }

  return `${currentDir}/${componentsFolder}`;
}

export default chooseGeneratedComponentsDir;
