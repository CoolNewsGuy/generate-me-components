import { writeFileSync } from "fs";
import {
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
} from "../index.js";

function createComponentFiles(componentFolderName) {
  const componentFolderPath = `${componentsPath}/${componentFolderName}`;
  const componentFiles = [
    `${componentFolderName}.${chosenStyleSheetLanguage}`,
    `${componentFolderName}.${chosenScriptingLanguage}`,
  ];

  process.chdir(componentFolderPath);

  componentFiles.forEach((file) => writeFileSync(file, ""));
}

export default createComponentFiles;
