import {
  additionalFilesExtensions,
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
  doesUserPreferArrowFunctionComponents,
  doesUserWantAdditionalFiles,
} from "../index.js";
import readConfigFile from "../readFunctions/readConfigFile.js";

function setOptionsFromConfigFile() {
  const configFile = readConfigFile();
  componentsPath = configFile.componentsPath;
  chosenStyleSheetLanguage = configFile.styleSheetLanguage;
  chosenScriptingLanguage = configFile.scriptingLanguage;
  doesUserPreferArrowFunctionComponents = configFile.useArrowFunctionComponents;
  doesUserWantAdditionalFiles = configFile.shouldCreateAdditionalFiles;
  additionalFilesExtensions = configFile.additionalFileExtensions;
}

export default setOptionsFromConfigFile;
