import { input, isConfigFileAllowed } from "../index.js";
import writeConfigFile from "../writeFunctions/writeConfigFile.js";
import chalk from "chalk";

function createConfigFileIfPermitted() {
  if (isConfigFileAllowed) {
    writeConfigFile();
  }
}

function shouldCreateConfigFile() {
  const shouldCreateFile = input(
    chalk.cyanBright(
      "Would you like to create a config file to quickly create components? (Y/n): "
    )
  );

  return ["Y", "y", "yes", "Yes"].includes(shouldCreateFile);
}

export { shouldCreateConfigFile };
export default createConfigFileIfPermitted;