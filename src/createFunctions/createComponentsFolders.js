import { existsSync, mkdirSync } from "fs";
import createComponentsDir from "./createComponentsDir.js";
import { componentsFolders, componentsPath } from "../index.js";

function createComponentsFolders() {
  if (!existsSync(componentsPath)) {
    createComponentsDir();
  }

  componentsFolders.forEach((componentsFolder) => {
    mkdirSync(`${componentsPath}/${componentsFolder}`);
  });
}

export default createComponentsFolders;
