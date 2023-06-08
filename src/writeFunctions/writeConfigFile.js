import { writeFileSync } from "fs";
import {
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
} from "../../bin/index.js";

function writeConfigFile() {
  const optionsObj = {
    componentsPath: componentsPath,
    styleSheetLanguage: chosenStyleSheetLanguage,
    scriptingLanguage: chosenScriptingLanguage,
  };

  const optionsObjToJSON = JSON.stringify(optionsObj, null, 2);

  writeFileSync("gift-me-components.json", optionsObjToJSON);
}

export default writeConfigFile;
