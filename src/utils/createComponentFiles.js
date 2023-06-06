import { writeFileSync } from "fs";
import {
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
} from "../index.js";

function createComponentFiles(componentFolderName) {
  const componentFolderPath = `${componentsPath}/${componentFolderName}`;
  const componentFiles = [
    `${componentFolderName}.${chosenStyleSheetLanguage}`,
    `${componentFolderName}.${chosenScriptingLanguage}`,
  ];

  process.chdir(componentFolderPath);

  componentFiles.forEach((file) => writeFileSync(file, ""));
}

function writeToComponentScriptFile(componentFiles, componentFolderName) {
  const boilerplate = `import './${componentFiles[0]}'

function ${componentFolderName}() {
  return (
    <></>
  )
}
      
export default ${componentFolderName};
`;

  return boilerplate;
}

export default createComponentFiles;
