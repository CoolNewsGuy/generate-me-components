import { colorizeText, input } from "../index.js";

function shouldCreateConfigFile() {
  const shouldCreateFile = input(
    colorizeText("* Create a config file to quickly create components (Y/n): "),
    "yes"
  ).trim();

  return ["y", "yes"].includes(shouldCreateFile.toLowerCase());
}

export default shouldCreateConfigFile;
