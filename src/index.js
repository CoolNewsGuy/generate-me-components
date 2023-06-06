import fs from "fs";
import create from "prompt-sync";

const prompt = create();

function setComponentsNames() {
  const componentsNames = prompt(
    "Choose names for your components (put space between each one): "
  ).split(" ");

  const capitalizedComponentsNames = componentsNames.map(capitalize);

  return capitalizedComponentsNames;
}

function capitalize(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1);

  return word;
}
