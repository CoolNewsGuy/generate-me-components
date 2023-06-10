import { writeFileSync } from "fs";
import {
  additionalFilesExtensions,
  chosenFramework,
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
  doesUserPreferArrowFunctionComponents,
  doesUserWantAdditionalFiles,
  fileExtensions,
} from "../index.js";

function writeConfigFile() {
  let optionsObj;

  if (chosenFramework === "react") {
    optionsObj = {
      componentsPath: componentsPath,
      framework: chosenFramework,
      styleSheetLanguage: chosenStyleSheetLanguage,
      scriptingLanguage: chosenScriptingLanguage,
      useArrowFunctionComponents: doesUserPreferArrowFunctionComponents,
      shouldCreateAdditionalFiles: doesUserWantAdditionalFiles,
      additionalFileExtensions: additionalFilesExtensions,
    };
  } else {
    optionsObj = {
      componentsPath: componentsPath,
      framework: chosenFramework,
      fileExtensions: fileExtensions,
    };
  }

  const optionsObjToJSON = JSON.stringify(optionsObj, null, 2);

  writeFileSync("gift-me-components.json", optionsObjToJSON);
}

export default writeConfigFile;
