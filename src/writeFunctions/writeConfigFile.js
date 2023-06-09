import { writeFileSync } from "fs";
import {
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
  doesUserPreferArrowFunctionComponents,
  doesUserWantAdditionalFiles,
} from "../index.js";

function writeConfigFile() {
  const optionsObj = {
    componentsPath: componentsPath,
    styleSheetLanguage: chosenStyleSheetLanguage,
    scriptingLanguage: chosenScriptingLanguage,
    useArrowFunctionComponents: doesUserPreferArrowFunctionComponents,
    shouldCreateAdditionalFiles: doesUserWantAdditionalFiles,
  };

  const optionsObjToJSON = JSON.stringify(optionsObj, null, 2);

  writeFileSync("gift-me-components.json", optionsObjToJSON);
}

export default writeConfigFile;
