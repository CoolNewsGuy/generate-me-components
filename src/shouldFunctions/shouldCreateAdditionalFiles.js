import { colorizeValues, colorizeText, input } from "../index.js";

function shouldCreateAdditionalFiles() {
  const shouldIncludeAdditionalFiles = input(
    `${colorizeText("* Include additional component files")} ${colorizeValues(
      "(y/N) : "
    )}`,
    "no"
  ).trim();

  return ["y", "yes"].includes(shouldIncludeAdditionalFiles.toLowerCase());
}

export default shouldCreateAdditionalFiles;
