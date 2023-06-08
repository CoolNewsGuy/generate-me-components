import { input } from "../index.js";
import chalk from "chalk";

function chooseStyleSheetLanguage() {
  const language = input(
    chalk.cyanBright(
      "What StyleSheet Language you're using (e.g., css, sass, scss, module.css...): "
    )
  );

  return language.toLowerCase();
}

export default chooseStyleSheetLanguage;
