import { writeFileSync } from "fs";
import {
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
  input,
} from "../../bin/index.js";

function createConfigFile() {
  if (shouldCreateConfigFile()) {
    writeConfigFile();
  }
}

function shouldCreateConfigFile() {
  const shouldCreateFile = input(
    "Would you like to create a config file to quickly create components? (Y/n): "
  );

  return ["Y", "y", "yes", "Yes"].includes(shouldCreateFile);
}

function writeConfigFile() {
  const optionsObj = {
    componentsPath: componentsPath,
    styleSheetLanguage: chosenStyleSheetLanguage,
    scriptingLanguage: chosenScriptingLanguage,
  };

  const optionsObjToJSON = JSON.stringify(optionsObj, null, 2);

  writeFileSync("gift-me-components.json", optionsObjToJSON);
}

export default createConfigFile;
