import { colorizeText, input } from "../index.js";

function chooseFramework() {
  const framework = input(
    colorizeText("Choose your js framework | default = React: "),
    "React"
  );

  return framework;
}

export default chooseFramework;
