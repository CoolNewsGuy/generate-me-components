import { colorizeText, input } from "../index.js";

function chooseComponentsNames() {
  const componentsNames = input(
    colorizeText(
      "Choose names for your components (put space between each one): "
    )
  ).split(" ");

  const capitalizedComponentsNames = componentsNames.map(capitalize);

  return capitalizedComponentsNames;
}

function capitalize(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1);

  return word;
}

export default chooseComponentsNames;
