import { colorizeText, input } from "../index.js";

function chooseStyleSheetLanguage() {
  const language = input(
    colorizeText(
      "What StyleSheet Language you're using (e.g., css, sass, scss, module.css...) | default = none: "
    ),
    "none"
  );

  return language.toLowerCase();
}

export default chooseStyleSheetLanguage;
