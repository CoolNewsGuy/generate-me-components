import { colorizeValues, colorizeText, input } from "../index.js";

function chooseAdditionalFilesExtensions() {
  const additionalFilesExtensions = input(
    `${colorizeText(
      "* Specifiy additional files extensions (e.g., test.js...)"
    )} ${colorizeValues("(none) : ")}`,
    "none"
  ).trim();

  if (additionalFilesExtensions === "none") {
    return "none";
  }

  return additionalFilesExtensions.toLowerCase().split(" ");
}

export default chooseAdditionalFilesExtensions;
