import { colorizeText, input } from "../index.js";

function chooseFramework() {
  const framework = input(
    colorizeText("Choose your js framework | default = React: "),
    "React"
  ).trim();

  return framework.toLowerCase();
}

export default chooseFramework;
