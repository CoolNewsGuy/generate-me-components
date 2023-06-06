import { input } from "../index.js";

function chooseScriptingLanguage() {
  const language = input("What Scripting Language you're using (JSX or TSX): ");

  return language.toLowerCase();
}

export default chooseScriptingLanguage;
