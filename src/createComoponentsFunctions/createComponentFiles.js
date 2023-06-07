import { writeFileSync } from "fs";
import {
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
} from "../../bin/index.js";

function createComponentFiles(componentFolderName) {
  const componentFolderPath = `${componentsPath}/${componentFolderName}`;
  const componentFiles = [
    `${componentFolderName}.${chosenStyleSheetLanguage}`,
    `${componentFolderName}.${chosenScriptingLanguage}`,
  ];

  process.chdir(componentFolderPath);

  componentFiles.forEach((file, index) => {
    // fill the jsx or tsx file with some boilerplate
    if (index === 1) {
      writeFileSync(
        file,
        writeToComponentScriptFile(componentFiles, componentFolderName)
      );
    }
    // No boilerplate for styles file
    else {
      writeFileSync(file, "");
    }
  });
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
