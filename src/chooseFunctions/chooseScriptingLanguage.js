import { input } from "../index.js";
import chalk from "chalk";

function chooseScriptingLanguage() {
  const language = input(
    chalk.cyanBright(
      "What Scripting Language you're using (JSX and TSX only): "
    )
  );

  return language.toLowerCase();
}

export default chooseScriptingLanguage;
