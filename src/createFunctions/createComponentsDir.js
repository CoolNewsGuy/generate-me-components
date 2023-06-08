import { mkdirSync } from "fs";
import setGeneratedComponentsDir from "../setFunctions/setGeneratedComponentsDir.js";

function createComponentsDir() {
  const chosenDir = setGeneratedComponentsDir();

  mkdirSync(chosenDir, { recursive: true });

  return chosenDir;
}

export default createComponentsDir;
