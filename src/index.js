#! /usr/bin/env node

import create from "prompt-sync";
import chooseComponentsNames from "./chooseFunctions/chooseComponentsNames.js";
import chooseStyleSheetLanguage from "./chooseFunctions/chooseStyleSheetLanguage.js";
import chooseScriptingLanguage from "./chooseFunctions/chooseScriptingLanguage.js";
import createComponentFiles from "./createFunctions/createComponentFiles.js";
import createConfigFileIfPermitted from "./createFunctions/createConfigFileIfPermitted.js";
import { existsSync } from "fs";
import checkIfConfigFileIsComplete from "./checkFunctions/checkIfConfigFileIsComplete.js";
import readConfigFile from "./readFunctions/readConfigFile.js";
import figlet from "figlet";
import chalk from "chalk";
import chooseGeneratedComponentsDir from "./chooseFunctions/chooseGeneratedComponentsDir.js";
import createComponentsFolders from "./createFunctions/createComponentsFolders.js";
import shouldCreateConfigFile from "./shouldFunctions/shouldCreateConfigFile.js";
import shouldUseArrowFunctions from "./shouldFunctions/shouldUseArrowFunctions.js";
import shouldCreateAdditionalFiles from "./shouldFunctions/shouldCreateAdditionalFiles.js";
import chooseAdditionalFilesExtensions from "./chooseFunctions/chooseAdditionalFilesExtensions.js";
import writeMissingConfigFileOptions from "./writeFunctions/writeMissingConfigFileOptions.js";
import chooseFramework from "./chooseFunctions/chooseFramework.js";
import chooseFileExtensions from "./chooseFunctions/chooseFileExtensions.js";

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
export const colorizeText = chalk.green;

export let componentsPath = null;
export let chosenFramework = null;
export let chosenStyleSheetLanguage = null;
export let chosenScriptingLanguage = null;
export let doesUserPreferArrowFunctionComponents = null;
export let doesUserWantAdditionalFiles = null;
export let additionalFilesExtensions = "none";
export let fileExtensions = null; // for frameworks other than React
export let isConfigFileAllowed = null;

function setOptionsFromConfigFile() {
  const configFile = readConfigFile();
  componentsPath = configFile.componentsPath;
  chosenStyleSheetLanguage = configFile.styleSheetLanguage;
  chosenScriptingLanguage = configFile.scriptingLanguage;
  doesUserPreferArrowFunctionComponents = configFile.useArrowFunctionComponents;
  doesUserWantAdditionalFiles = configFile.shouldCreateAdditionalFiles;
  additionalFilesExtensions = configFile.additionalFileExtensions;
}

function askQuestionsForReactDevelopers() {
  chosenStyleSheetLanguage = chooseStyleSheetLanguage();
  chosenScriptingLanguage = chooseScriptingLanguage();
  doesUserPreferArrowFunctionComponents = shouldUseArrowFunctions();
  doesUserWantAdditionalFiles = shouldCreateAdditionalFiles();

  if (doesUserWantAdditionalFiles) {
    additionalFilesExtensions = chooseAdditionalFilesExtensions();
  }
}

if (existsSync("gift-me-components.json") && checkIfConfigFileIsComplete()) {
  setOptionsFromConfigFile();
} else if (
  existsSync("gift-me-components.json") &&
  !checkIfConfigFileIsComplete()
) {
  writeMissingConfigFileOptions();
  setOptionsFromConfigFile();
} else {
  componentsPath = chooseGeneratedComponentsDir();
  chosenFramework = chooseFramework();

  if (chosenFramework === "react") {
    askQuestionsForReactDevelopers();
  } else {
    fileExtensions = chooseFileExtensions();
  }

  isConfigFileAllowed = shouldCreateConfigFile();

  createConfigFileIfPermitted();
}

export let componentsFolders = chooseComponentsNames();

createComponentsFolders();
componentsFolders.forEach(createComponentFiles);
