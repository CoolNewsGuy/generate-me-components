#! /usr/bin/env node

import create from "prompt-sync";
import createComponentsDir from "../src/createFunctions/createComponentsDir.js";
import createComponentsFolders from "../src/createFunctions/createComponentsFolders.js";
import chooseStyleSheetLanguage from "../src/chooseFunctions/chooseStyleSheetLanguage.js";
import chooseScriptingLanguage from "../src/chooseFunctions/chooseScriptingLanguage.js";
import createComponentFiles from "../src/createFunctions/createComponentFiles.js";
import createConfigFileIfPermitted, {
  shouldCreateConfigFile,
} from "../src/createFunctions/createConfigFileIfPermitted.js";
import { existsSync } from "fs";
import checkIfConfigFileIsValid from "../src/checkFunctions/checkIfConfigFileIsValid.js";
import readConfigFile from "../src/readFunctions/readConfigFile.js";

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
  componentsPath = createComponentsDir();
  chosenStyleSheetLanguage = chooseStyleSheetLanguage();
  chosenScriptingLanguage = chooseScriptingLanguage();
  isConfigFileAllowed = shouldCreateConfigFile();

  createConfigFileIfPermitted();
}

let componentsFolders = createComponentsFolders();
componentsFolders.forEach(createComponentFiles);
