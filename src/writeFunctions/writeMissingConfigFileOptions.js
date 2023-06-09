import { writeFileSync } from "fs";
import chooseAdditionalFilesExtensions from "../chooseFunctions/chooseAdditionalFilesExtensions.js";
import chooseGeneratedComponentsDir from "../chooseFunctions/chooseGeneratedComponentsDir.js";
import chooseScriptingLanguage from "../chooseFunctions/chooseScriptingLanguage.js";
import chooseStyleSheetLanguage from "../chooseFunctions/chooseStyleSheetLanguage.js";
import readConfigFile from "../readFunctions/readConfigFile.js";
import shouldCreateAdditionalFiles from "../shouldFunctions/shouldCreateAdditionalFiles.js";
import shouldUseArrowFunctions from "../shouldFunctions/shouldUseArrowFunctions.js";

function writeMissingConfigFileOptions() {
  const configFileContentObj = readConfigFile();

  const requiredOptions = {
    componentsPath: chooseGeneratedComponentsDir,
    styleSheetLanguage: chooseStyleSheetLanguage,
    scriptingLanguage: chooseScriptingLanguage,
    useArrowFunctionComponents: shouldUseArrowFunctions,
    shouldCreateAdditionalFiles: shouldCreateAdditionalFiles,
    additionalFileExtensions: chooseAdditionalFilesExtensions,
  };

  for (const option in requiredOptions) {
    if (!(option in configFileContentObj)) {
      configFileContentObj[option] = requiredOptions[option]();
    }
  }

  writeFileSync("gift-me-components.json", configFileContentObj);
}

export default writeMissingConfigFileOptions;
