import { mkdirSync } from "fs";
import setComponentsNames from "./setComponentsNames.js";
import { componentsPath } from "../index.js";

function createComponentsFolders() {
  const componentsNames = setComponentsNames();

  componentsNames.forEach((componentName) => {
    mkdirSync(`${componentsPath}/${componentName}`);
  });
}

export default createComponentsFolders;
