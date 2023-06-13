import { colorizeText, input } from "../index.js";
import capitalize from "../utils/capitalize.js";

function chooseComponentsNames() {
  const componentsNames = input(
    colorizeText(
      "* Choose names for your components (put space between each one): "
    )
  )
    .trim()
    .split(" ");
  const capitalizedComponentsNames = componentsNames.map(capitalize);

  return capitalizedComponentsNames;
}

export default chooseComponentsNames;
