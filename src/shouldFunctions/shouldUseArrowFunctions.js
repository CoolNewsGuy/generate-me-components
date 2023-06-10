import { colorizeText, input } from "../index.js";

function shouldUseArrowFunctions() {
  const shouldUseArrowSyntax = input(
    colorizeText(
      "Would you like to use arrow function components (y/n) default = no: "
    ),
    "no"
  ).trim();

  return ["y", "yes"].includes(shouldUseArrowSyntax.toLowerCase());
}

export default shouldUseArrowFunctions;
