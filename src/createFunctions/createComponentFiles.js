import { writeFileSync } from "fs";
import {
  additionalFilesExtensions,
  chosenScriptingLanguage,
  chosenStyleSheetLanguage,
  componentsPath,
  doesUserWantAdditionalFiles,
  rootDir,
} from "../index.js";
import createScriptFileBoilerplate from "../writeFunctions/writeToComponentScriptFile.js";

function createComponentFiles(componentFolderName) {
  const componentFolderPath = `${componentsPath}/${componentFolderName}`;
  const componentFiles = [`${componentFolderName}.${chosenScriptingLanguage}`];

  if (chosenStyleSheetLanguage !== "none") {
    componentFiles.push(`${componentFolderName}.${chosenStyleSheetLanguage}`);
  }

  if (additionalFilesExtensions !== "none" && doesUserWantAdditionalFiles) {
    for (const fileExtension of additionalFilesExtensions) {
      componentFiles.push(`${componentFolderName}.${fileExtension}`);
    }
  }

  process.chdir(componentFolderPath);

  componentFiles.forEach((file, index) => {
    // fill the jsx or tsx file with some boilerplate
    if (index === 0) {
      writeFileSync(
        file,
        createScriptFileBoilerplate(componentFiles, componentFolderName)
      );
    }
    // No boilerplate for other files
    else {
      writeFileSync(file, "");
    }
  });

  process.chdir(rootDir);
}

export default createComponentFiles;
