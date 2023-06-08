import { mkdirSync } from "fs";
import { componentsPath } from "../index.js";

function createComponentsDir() {
  mkdirSync(componentsPath, { recursive: true });
}

export default createComponentsDir;
