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

export const input = create();
export const rootDir = process.cwd();

export const componentsPath = createComponentsDir();
export const chosenStyleSheetLanguage = chooseStyleSheetLanguage();
export const chosenScriptingLanguage = chooseScriptingLanguage();
export const isConfigFileAllowed = shouldCreateConfigFile();

createConfigFileIfPermitted();

let componentsFolders = createComponentsFolders();
componentsFolders.forEach(createComponentFiles);
