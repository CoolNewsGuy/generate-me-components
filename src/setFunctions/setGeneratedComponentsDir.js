import { input } from "../index.js";

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

export default setGeneratedComponentsDir;
