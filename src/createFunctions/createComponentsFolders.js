import { existsSync, mkdirSync } from "fs";
import chooseComponentsNames from "../chooseFunctions/chooseComponentsNames.js";
import createComponentsDir from "./createComponentsDir.js";
import { componentsPath } from "../index.js";

function createComponentsFolders() {
  const componentsNames = chooseComponentsNames();

  if (!existsSync(componentsPath)) {
    createComponentsDir();
  }

  componentsNames.forEach((componentName) => {
    mkdirSync(`${componentsPath}/${componentName}`);
  });

  return componentsNames;
}

export default createComponentsFolders;
