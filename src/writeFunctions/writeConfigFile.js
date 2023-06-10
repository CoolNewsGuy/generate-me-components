import { writeFileSync } from "fs";
import {
  additionalFilesExtensions,
  chosenFramework,
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
  doesUserPreferArrowFunctionComponents,
  doesUserWantAdditionalFiles,
} from "../index.js";

function writeConfigFile() {
  const optionsObj = {
    componentsPath: componentsPath,
    framework: chosenFramework,
    styleSheetLanguage: chosenStyleSheetLanguage,
    scriptingLanguage: chosenScriptingLanguage,
    useArrowFunctionComponents: doesUserPreferArrowFunctionComponents,
    shouldCreateAdditionalFiles: doesUserWantAdditionalFiles,
    additionalFileExtensions: additionalFilesExtensions,
  };

  const optionsObjToJSON = JSON.stringify(optionsObj, null, 2);

  writeFileSync("gift-me-components.json", optionsObjToJSON);
}

export default writeConfigFile;
