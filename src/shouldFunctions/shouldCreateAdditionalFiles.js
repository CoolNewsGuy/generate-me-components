import { colorizeText, input } from "../index.js";

function shouldCreateAdditionalFiles() {
  const shouldIncludeAdditionalFiles = input(
    colorizeText("* Include additional component files (y/N): "),
    "no"
  ).trim();

  return ["y", "yes"].includes(shouldIncludeAdditionalFiles.toLowerCase());
}

export default shouldCreateAdditionalFiles;
