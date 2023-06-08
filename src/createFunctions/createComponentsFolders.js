import { existsSync, mkdirSync } from "fs";
import chooseComponentsNames from "../setFunctions/setComponentsNames.js";
import { componentsPath } from "../index.js";

function createComponentsFolders() {
  const componentsNames = chooseComponentsNames();

  if (!existsSync(componentsPath)) {
    mkdirSync(componentsPath, { recursive: true });
  }

  componentsNames.forEach((componentName) => {
    mkdirSync(`${componentsPath}/${componentName}`);
  });

  return componentsNames;
}

export default createComponentsFolders;
