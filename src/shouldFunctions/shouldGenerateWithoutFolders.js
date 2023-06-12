import { colorizeText, input } from "../index.js";

function shouldGenerateWithoutFolders() {
  const shouldCreateFolders = input(
    colorizeText(
      "Genrate components files directly without folders (y/n) | default = yes: "
    ),
    "yes"
  ).trim();

  return ["y", "yes"].includes(shouldCreateFolders.toLowerCase());
}

export default shouldGenerateWithoutFolders;
