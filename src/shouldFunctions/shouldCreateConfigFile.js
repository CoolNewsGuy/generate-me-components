import { colorizeText, input } from "../index.js";

function shouldCreateConfigFile() {
  const shouldCreateFile = input(
    colorizeText(
      "Would you like to create a config file to quickly create components? (y/n) | default = yes: "
    ),
    "yes"
  ).trim();

  return ["y", "yes"].includes(shouldCreateFile.toLowerCase());
}

export default shouldCreateConfigFile;
