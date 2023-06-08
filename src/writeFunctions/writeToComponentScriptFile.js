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

export default writeToComponentScriptFile;
