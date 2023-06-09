import chalk from "chalk";
import { input } from "../index.js";

function shouldCreateConfigFile() {
  const shouldCreateFile = input(
    chalk.cyanBright(
      "Would you like to create a config file to quickly create components? (Y/n): "
    ),
    "yes"
  );

  return ["Y", "y", "yes", "Yes"].includes(shouldCreateFile);
}

export default shouldCreateConfigFile;
