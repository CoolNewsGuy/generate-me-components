import readConfigFile from "../readFunctions/readConfigFile.js";

function checkIfConfigFileIsValid() {
  const fileContentObj = readConfigFile();
  const requiredProps = [
    "componentsPath",
    "styleSheetLanguage",
    "scriptingLanguage",
  ];

  for (const requiredProp of requiredProps) {
    if (!(requiredProp in fileContentObj)) {
      return false;
    }
  }

  return true;
}

export default checkIfConfigFileIsValid;
