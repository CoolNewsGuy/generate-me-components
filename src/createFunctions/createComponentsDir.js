import { mkdirSync } from "fs";
import chooseGeneratedComponentsDir from "../setFunctions/chooseGeneratedComponentsDir.js";

function createComponentsDir() {
  const chosenDir = chooseGeneratedComponentsDir();

  mkdirSync(chosenDir, { recursive: true });

  return chosenDir;
}

export default createComponentsDir;
