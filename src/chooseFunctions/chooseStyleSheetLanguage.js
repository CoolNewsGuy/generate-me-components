import { colorizeValues, colorizeText, input } from "../index.js";

function chooseStyleSheetLanguage() {
  const language = input(
    `${colorizeText(
      "* StyleSheet Language (e.g., css, sass, scss, module.css...)"
    )} ${colorizeValues("(none) : ")}`,
    "none"
  ).trim();

  return language.toLowerCase();
}

export default chooseStyleSheetLanguage;
