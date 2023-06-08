import { input } from "../index.js";
import chalk from "chalk";

function chooseGeneratedComponentsDir() {
  const currentDir = process.cwd();
  let componentsFolder = input(
    chalk.cyanBright("Where to put the generated components: ")
  );

  if (componentsFolder.startsWith("/")) {
    componentsFolder = componentsFolder.slice(1);
  }
  if (componentsFolder.startsWith("./")) {
    componentsFolder = componentsFolder.slice(2);
  }

  return `${currentDir}/${componentsFolder}`;
}

export default chooseGeneratedComponentsDir;
