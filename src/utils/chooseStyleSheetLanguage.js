import { input } from "../../bin/index.js";

function chooseStyleSheetLanguage() {
  const language = input(
    "What StyleSheet Language you're using (e.g., css, sass, scss, module.css...): "
  );

  return language.toLowerCase();
}

export default chooseStyleSheetLanguage;
