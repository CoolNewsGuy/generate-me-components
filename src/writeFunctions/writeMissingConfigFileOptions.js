import { writeFileSync } from "fs";
import chooseAdditionalFilesExtensions from "../chooseFunctions/chooseAdditionalFilesExtensions.js";
import chooseGeneratedComponentsDir from "../chooseFunctions/chooseGeneratedComponentsDir.js";
import chooseScriptingLanguage from "../chooseFunctions/chooseScriptingLanguage.js";
import chooseStyleSheetLanguage from "../chooseFunctions/chooseStyleSheetLanguage.js";
import readConfigFile from "../readFunctions/readConfigFile.js";
import shouldCreateAdditionalFiles from "../shouldFunctions/shouldCreateAdditionalFiles.js";
import shouldUseArrowFunctions from "../shouldFunctions/shouldUseArrowFunctions.js";
import chooseFileExtensions from "../chooseFunctions/chooseFileExtensions.js";
import checkIfJsxFilesAreUsed from "../checkFunctions/checkIfJsxFilesAreUsed.js";

function writeMissingConfigFileOptions() {
  const configFileContentObj = readConfigFile();

  let requiredOptions;

  let doesUserUsesJsxFiles;

  if ("areJsxFilesUsed" in configFileContentObj) {
    doesUserUsesJsxFiles = configFileContentObj.areJsxFilesUsed;
  } else {
    doesUserUsesJsxFiles = checkIfJsxFilesAreUsed();
  }

  if (doesUserUsesJsxFiles) {
    requiredOptions = {
      componentsPath: chooseGeneratedComponentsDir,
      areJsxFilesUsed: doesUserUsesJsxFiles,
      styleSheetLanguage: chooseStyleSheetLanguage,
      scriptingLanguage: chooseScriptingLanguage,
      useArrowFunctionComponents: shouldUseArrowFunctions,
      shouldCreateAdditionalFiles: shouldCreateAdditionalFiles,
      additionalFileExtensions: chooseAdditionalFilesExtensions,
    };
  } else {
    requiredOptions = {
      componentsPath: chooseGeneratedComponentsDir,
      areJsxFilesUsed: doesUserUsesJsxFiles,
      fileExtensions: chooseFileExtensions,
    };
  }

  for (const option in requiredOptions) {
    if (!(option in configFileContentObj)) {
      if (option === "areJsxFilesUsed") {
        configFileContentObj[option] = requiredOptions[option];
      } else {
        configFileContentObj[option] = requiredOptions[option]();
      }
    }
  }

  writeFileSync(
    "generate-me-components.json",
    JSON.stringify(configFileContentObj, null, 2)
  );
}

export default writeMissingConfigFileOptions;
