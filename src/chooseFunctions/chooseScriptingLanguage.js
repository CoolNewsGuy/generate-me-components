import { colorizeText, input } from "../index.js";

function chooseScriptingLanguage() {
  const language = input(
    colorizeText(
      "What Scripting Language you're using (JSX and TSX only) | default = JSX: "
    ),
    "JSX"
  ).trim();

  return language.toLowerCase();
}

export default chooseScriptingLanguage;
