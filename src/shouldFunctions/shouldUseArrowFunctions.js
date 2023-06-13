import { colorizeValues, colorizeText, input } from "../index.js";

function shouldUseArrowFunctions() {
  const shouldUseArrowSyntax = input(
    `${colorizeText("* Use arrow function components")} ${colorizeValues(
      "(y/N) : "
    )}`,
    "no"
  ).trim();

  return ["y", "yes"].includes(shouldUseArrowSyntax.toLowerCase());
}

export default shouldUseArrowFunctions;
