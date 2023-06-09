import { input } from "../index.js";
import chalk from "chalk";

function shouldUseArrowFunctions() {
  const shouldUseArrowSyntax = input(
    chalk.cyanBright(
      "Would you like to use arrow function components (y/n) default = no: "
    ),
    "no"
  );

  return ["y", "yes"].includes(shouldUseArrowSyntax.toLowerCase());
}

export default shouldUseArrowFunctions;
