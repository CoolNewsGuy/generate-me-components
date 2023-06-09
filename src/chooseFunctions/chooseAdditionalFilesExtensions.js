import { input } from "../index.js";
import chalk from "chalk";

function chooseAdditionalFilesExtensions() {
  const additionalFilesExtensions = input(
    chalk.cyanBright(
      "Specifiy additional files extensions (e.g., test.js...) | default = none: "
    ),
    "none"
  );

  if (additionalFilesExtensions === "none") {
    return "none";
  }

  return additionalFilesExtensions.toLowerCase().split(" ");
}

export default chooseAdditionalFilesExtensions;
