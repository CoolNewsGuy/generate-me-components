import { writeFileSync } from "fs";
import { input } from "../../bin/index.js";

function createConfigFile() {
  if (shouldCreateConfigFile()) {
    const fileName = "gift-me-components.json";

    writeFileSync(fileName, "");

    return fileName;
  }
}

function shouldCreateConfigFile() {
  const shouldCreateFile = input(
    "Would you like to create a config file to quickly create components? (Y/n): "
  );

  return ["Y", "y", "yes", "Yes"].includes(shouldCreateFile);
}

export default createConfigFile;
