import { chosenStyleSheetLanguage } from "../index.js";

function writeToComponentScriptFile(componentFiles, componentFolderName) {
  // don't ask how that works but it just works ^^
  const boilerplate = `${
    chosenStyleSheetLanguage !== "none"
      ? `import "./${componentFiles[0]}" \n \n`
      : ""
  }function ${componentFolderName}() {
  return (
    <></>
  )
}
      
export default ${componentFolderName};
`;

  return boilerplate;
}

export default writeToComponentScriptFile;
