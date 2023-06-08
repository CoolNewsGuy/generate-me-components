import { input } from "../index.js";
import chalk from "chalk";

function chooseScriptingLanguage() {
  const language = input(
    chalk.cyanBright(
      "What Scripting Language you're using (JSX and TSX only) | default = JSX: "
    ),
    "JSX"
  );

  return language.toLowerCase();
}

export default chooseScriptingLanguage;
