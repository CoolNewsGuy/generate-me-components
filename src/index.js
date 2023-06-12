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
import chooseFileExtensions from "./chooseFunctions/chooseFileExtensions.js";
import checkIfJsxFilesAreUsed from "./checkFunctions/checkIfJsxFilesAreUsed.js";
import capitalize from "./utils/capitalize.js";
import shouldGenerateWithoutFolders from "./shouldFunctions/shouldGenerateWithoutFolders.js";

console.log(
  chalk.yellow(
    figlet.textSync("Generate Me Components", {
      horizontalLayout: "full",
      verticalLayout: "default",
    })
  )
);

export const input = create();
export const rootDir = process.cwd();
export const colorizeText = chalk.rgb(0, 255, 0);

export let componentsPath = null;
export let doesUserUsesJsxFiles = null;
export let chosenStyleSheetLanguage = null;
export let chosenScriptingLanguage = null;
export let doesUserPreferArrowFunctionComponents = null;
export let doesUserWantAdditionalFiles = null;
export let additionalFilesExtensions = "none";
export let fileExtensions = null; // for frameworks other than React
export let isConfigFileAllowed = null;
export let shouldGenrateComponentsFolders = null;
export let componentsFolders = null;

function setOptionsFromConfigFile() {
  const configFile = readConfigFile();
  componentsPath = configFile.componentsPath;
  doesUserUsesJsxFiles = configFile.areJsxFilesUsed;

  if (doesUserUsesJsxFiles) {
    chosenStyleSheetLanguage = configFile.styleSheetLanguage;
    chosenScriptingLanguage = configFile.scriptingLanguage;
    doesUserPreferArrowFunctionComponents =
      configFile.useArrowFunctionComponents;
    doesUserWantAdditionalFiles = configFile.shouldCreateAdditionalFiles;
    additionalFilesExtensions = configFile.additionalFileExtensions;
  } else {
    fileExtensions = configFile.fileExtensions;
  }
}

function askQuestionsForJsxUsers() {
  chosenStyleSheetLanguage = chooseStyleSheetLanguage();
  chosenScriptingLanguage = chooseScriptingLanguage();
  doesUserPreferArrowFunctionComponents = shouldUseArrowFunctions();
  doesUserWantAdditionalFiles = shouldCreateAdditionalFiles();

  if (doesUserWantAdditionalFiles) {
    additionalFilesExtensions = chooseAdditionalFilesExtensions();
  }
}

if (
  existsSync("generate-me-components.json") &&
  checkIfConfigFileIsComplete()
) {
  setOptionsFromConfigFile();
} else if (
  existsSync("generate-me-components.json") &&
  !checkIfConfigFileIsComplete()
) {
  writeMissingConfigFileOptions();
  setOptionsFromConfigFile();
} else {
  componentsPath = chooseGeneratedComponentsDir();
  doesUserUsesJsxFiles = checkIfJsxFilesAreUsed();

  if (doesUserUsesJsxFiles) {
    askQuestionsForJsxUsers();
  } else {
    fileExtensions = chooseFileExtensions();
  }

  shouldGenrateComponentsFolders = shouldGenerateWithoutFolders();

  isConfigFileAllowed = shouldCreateConfigFile();

  createConfigFileIfPermitted();
}

if (process.argv.length > 2) {
  componentsFolders = process.argv.slice(2).map(capitalize);
} else {
  componentsFolders = chooseComponentsNames();
}

createComponentsFolders();
componentsFolders.forEach(createComponentFiles);
