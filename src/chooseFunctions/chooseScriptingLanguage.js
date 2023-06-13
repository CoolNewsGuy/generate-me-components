import { colorizeValues, colorizeText, input } from "../index.js";

function chooseScriptingLanguage() {
  const language = input(
    `${colorizeText(
      "* Scripting language (JSX and TSX only)"
    )} ${colorizeValues("(JSX) : ")}`,
    "JSX"
  ).trim();

  return language.toLowerCase();
}

export default chooseScriptingLanguage;
