import {
  chosenStyleSheetLanguage,
  doesUserPreferArrowFunctionComponents,
} from "../index.js";

function createScriptFileBoilerplate(componentFiles, componentFolderName) {
  // don't ask how that works but it just works ^^
  let boilerplate;

  // this is in case user wants arrow functions components
  if (doesUserPreferArrowFunctionComponents) {
    boilerplate = `${
      chosenStyleSheetLanguage !== "none"
        ? `import "./${componentFiles[0]}" \n \n`
        : ""
    }const ${componentFolderName} = () => {
  return (
    <></>
  )
}
        
export default ${componentFolderName};
  `;
  } else {
    boilerplate = `${
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
  }

  return boilerplate;
}

export default createScriptFileBoilerplate;
