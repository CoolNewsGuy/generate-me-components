import { writeFileSync } from "fs";
import {
  additionalFilesExtensions,
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
  doesUserPreferArrowFunctionComponents,
  doesUserUsesJsxFiles,
  doesUserWantAdditionalFiles,
  fileExtensions,
} from "../index.js";

function writeConfigFile() {
  let optionsObj;

  if (doesUserUsesJsxFiles) {
    optionsObj = {
      componentsPath: componentsPath,
      areJsxFilesUsed: doesUserUsesJsxFiles,
      styleSheetLanguage: chosenStyleSheetLanguage,
      scriptingLanguage: chosenScriptingLanguage,
      useArrowFunctionComponents: doesUserPreferArrowFunctionComponents,
      shouldCreateAdditionalFiles: doesUserWantAdditionalFiles,
      additionalFileExtensions: additionalFilesExtensions,
    };
  } else {
    optionsObj = {
      componentsPath: componentsPath,
      areJsxFilesUsed: doesUserUsesJsxFiles,
      fileExtensions: fileExtensions,
    };
  }

  const optionsObjToJSON = JSON.stringify(optionsObj, null, 2);

  writeFileSync("generate-me-components.json", optionsObjToJSON);
}

export default writeConfigFile;
