import { input } from "../index.js";
import chalk from "chalk";

function shouldCreateAdditionalFiles() {
  const shouldIncludeAdditionalFiles = input(
    chalk.cyanBright(
      "Would you like to include additional components files (y/n) | default = no:"
    ),
    "no"
  );

  return ["y", "yes"].includes(shouldIncludeAdditionalFiles.toLowerCase());
}

export default shouldCreateAdditionalFiles;
