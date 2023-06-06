import { input } from "../index.js";

function chooseStyleSheetLanguage() {
  const language = input(
    "What StyleSheet Language you're using (e.g., CSS, SCSS, SASS...): "
  );

  return language.toLowerCase();
}

export default chooseStyleSheetLanguage;
