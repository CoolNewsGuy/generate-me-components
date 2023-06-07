#! /usr/bin/env node

import create from "prompt-sync";
import createComponentsDir from "../src/createComoponentsFunctions/createComponentsDir.js";
import createComponentsFolders from "../src/createComoponentsFunctions/createComponentsFolders.js";
import chooseStyleSheetLanguage from "../src/chooseFunctions/chooseStyleSheetLanguage.js";
import chooseScriptingLanguage from "../src/chooseFunctions/chooseScriptingLanguage.js";
import createComponentFiles from "../src/createComoponentsFunctions/createComponentFiles.js";

export const input = create();

export const componentsPath = createComponentsDir();
export const componentsFolders = createComponentsFolders();
export const chosenStyleSheetLanguage = chooseStyleSheetLanguage();
export const chosenScriptingLanguage = chooseScriptingLanguage();

componentsFolders.forEach(createComponentFiles);
