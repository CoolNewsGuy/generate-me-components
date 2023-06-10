import { writeFileSync } from "fs";
import chooseAdditionalFilesExtensions from "../chooseFunctions/chooseAdditionalFilesExtensions.js";
import chooseGeneratedComponentsDir from "../chooseFunctions/chooseGeneratedComponentsDir.js";
import chooseScriptingLanguage from "../chooseFunctions/chooseScriptingLanguage.js";
import chooseStyleSheetLanguage from "../chooseFunctions/chooseStyleSheetLanguage.js";
import readConfigFile from "../readFunctions/readConfigFile.js";
import shouldCreateAdditionalFiles from "../shouldFunctions/shouldCreateAdditionalFiles.js";
import shouldUseArrowFunctions from "../shouldFunctions/shouldUseArrowFunctions.js";
import chooseFramework from "../chooseFunctions/chooseFramework.js";
import { chosenFramework } from "../index.js";
import chooseFileExtensions from "../chooseFunctions/chooseFileExtensions.js";

function writeMissingConfigFileOptions() {
  const configFileContentObj = readConfigFile();

  let requiredOptions;

  if (chosenFramework === "react") {
    requiredOptions = {
      componentsPath: chooseGeneratedComponentsDir,
      framework: chooseFramework,
      styleSheetLanguage: chooseStyleSheetLanguage,
      scriptingLanguage: chooseScriptingLanguage,
      useArrowFunctionComponents: shouldUseArrowFunctions,
      shouldCreateAdditionalFiles: shouldCreateAdditionalFiles,
      additionalFileExtensions: chooseAdditionalFilesExtensions,
    };
  } else {
    requiredOptions = {
      componentsPath: chooseGeneratedComponentsDir,
      framework: chooseFramework,
      fileExtensions: chooseFileExtensions,
    };
  }

  for (const option in requiredOptions) {
    if (!(option in configFileContentObj)) {
      configFileContentObj[option] = requiredOptions[option]();
    }
  }

  writeFileSync(
    "generate-me-components.json",
    JSON.stringify(configFileContentObj, null, 2)
  );
}

export default writeMissingConfigFileOptions;
