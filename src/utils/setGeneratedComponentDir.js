function setGeneratedComponentsDir() {
  const currentDir = process.cwd();
  const componentsFolder = input(
    "Where to put the generated components (MUST start without ./ nor /): "
  );

  return `${currentDir}/${componentsFolder}`;
}

export default setGeneratedComponentsDir;
