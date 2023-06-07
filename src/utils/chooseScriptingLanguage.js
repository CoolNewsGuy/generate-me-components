import { input } from "../../bin/index.js";

function chooseScriptingLanguage() {
  const language = input(
    "What Scripting Language you're using (JSX and TSX only): "
  );

  return language.toLowerCase();
}

export default chooseScriptingLanguage;
