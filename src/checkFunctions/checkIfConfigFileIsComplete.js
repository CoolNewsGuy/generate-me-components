import readConfigFile from "../readFunctions/readConfigFile.js";

function checkIfConfigFileIsComplete() {
  const fileContentObj = readConfigFile();
  const requiredProps = ["componentsPath", "framework"];

  if (fileContentObj.framework === "react") {
    requiredProps.push(
      "styleSheetLanguage",
      "scriptingLanguage",
      "useArrowFunctionComponents",
      "shouldCreateAdditionalFiles",
      "additionalFileExtensions"
    );
  } else {
    requiredProps.push("fileExtensions");
  }

  for (const requiredProp of requiredProps) {
    if (!(requiredProp in fileContentObj)) {
      return false;
    }
  }

  return true;
}

export default checkIfConfigFileIsComplete;
