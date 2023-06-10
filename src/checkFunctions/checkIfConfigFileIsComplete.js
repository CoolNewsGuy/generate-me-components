import readConfigFile from "../readFunctions/readConfigFile.js";

function checkIfConfigFileIsComplete() {
  const fileContentObj = readConfigFile();
  const requiredOptions = ["componentsPath", "framework"];

  if (fileContentObj.framework === "react") {
    requiredOptions.push(
      "styleSheetLanguage",
      "scriptingLanguage",
      "useArrowFunctionComponents",
      "shouldCreateAdditionalFiles",
      "additionalFileExtensions"
    );
  } else {
    requiredOptions.push("fileExtensions");
  }

  for (const option of requiredOptions) {
    if (!(option in fileContentObj)) {
      return false;
    }
  }

  return true;
}

export default checkIfConfigFileIsComplete;
