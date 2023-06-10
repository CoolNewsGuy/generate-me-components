import { colorizeText, input } from "../index.js";

function shouldCreateAdditionalFiles() {
  const shouldIncludeAdditionalFiles = input(
    colorizeText(
      "Would you like to include additional component files (y/n) | default = no: "
    ),
    "no"
  ).trim();

  return ["y", "yes"].includes(shouldIncludeAdditionalFiles.toLowerCase());
}

export default shouldCreateAdditionalFiles;
