import { colorizeValues, colorizeText, input } from "../index.js";

// this is for frameworks other than react
function chooseFileExtensions() {
  const filesExtensions = input(
    `${colorizeText(
      "* Specifiy files extensions (e.g., vue, test.js...)"
    )} ${colorizeValues("(none) : ")}`,
    "none"
  ).trim();

  if (filesExtensions === "none") {
    return "none";
  }

  return filesExtensions.toLowerCase().split(" ");
}

export default chooseFileExtensions;
