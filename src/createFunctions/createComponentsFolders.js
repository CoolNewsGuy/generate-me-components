import { mkdirSync } from "fs";
import { componentsFolders, componentsPath } from "../index.js";

function createComponentsFolders() {
  componentsFolders.forEach((componentsFolder) => {
    mkdirSync(`${componentsPath}/${componentsFolder}`, { recursive: true });
  });
}

export default createComponentsFolders;
