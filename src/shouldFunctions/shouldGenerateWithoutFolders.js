import { colorizeValues, colorizeText, input } from "../index.js";

function shouldGenerateWithoutFolders() {
  const shouldCreateFolders = input(
    `${colorizeText(
      "* Generate components files directly without folders"
    )} ${colorizeValues("(y/N) : ")}`,
    "no"
  ).trim();

  return ["n", "no"].includes(shouldCreateFolders.toLowerCase());
}

export default shouldGenerateWithoutFolders;
