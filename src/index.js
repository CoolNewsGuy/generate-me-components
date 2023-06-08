#! /usr/bin/env node

import create from "prompt-sync";
import createComponentsFolders from "./createFunctions/createComponentsFolders.js";
import chooseStyleSheetLanguage from "./chooseFunctions/chooseStyleSheetLanguage.js";
import chooseScriptingLanguage from "./chooseFunctions/chooseScriptingLanguage.js";
import createComponentFiles from "./createFunctions/createComponentFiles.js";
import createConfigFileIfPermitted, {
  shouldCreateConfigFile,
} from "./createFunctions/createConfigFileIfPermitted.js";
import { existsSync } from "fs";
import checkIfConfigFileIsValid from "./checkFunctions/checkIfConfigFileIsValid.js";
import readConfigFile from "./readFunctions/readConfigFile.js";
import figlet from "figlet";
import chalk from "chalk";
import chooseGeneratedComponentsDir from "./chooseFunctions/chooseGeneratedComponentsDir.js";

console.log(
  chalk.yellow(
    figlet.textSync("Gift Me Components", {
      horizontalLayout: "full",
      verticalLayout: "default",
    })
  )
);

export const input = create();
export const rootDir = process.cwd();

export let componentsPath = null;
export let chosenStyleSheetLanguage = null;
export let chosenScriptingLanguage = null;
export let isConfigFileAllowed = null;

if (existsSync("gift-me-components.json") && checkIfConfigFileIsValid()) {
  const configFile = readConfigFile();
  componentsPath = configFile.componentsPath;
  chosenStyleSheetLanguage = configFile.styleSheetLanguage;
  chosenScriptingLanguage = configFile.scriptingLanguage;
} else {
  componentsPath = chooseGeneratedComponentsDir();
  chosenStyleSheetLanguage = chooseStyleSheetLanguage();
  chosenScriptingLanguage = chooseScriptingLanguage();
  isConfigFileAllowed = shouldCreateConfigFile();

  createConfigFileIfPermitted();
}

let componentsFolders = createComponentsFolders();
componentsFolders.forEach(createComponentFiles);
