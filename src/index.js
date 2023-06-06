import create from "prompt-sync";
import createComponentsDir from "./utils/createComponentsDir.js";
import createComponentsFolders from "./utils/createComponentsFolders.js";
import chooseStyleSheetLanguage from "./utils/chooseStyleSheetLanguage.js";
import chooseScriptingLanguage from "./utils/chooseScriptingLanguage.js";
import createComponentFiles from "./utils/createComponentFiles.js";

export const input = create();

export const componentsPath = createComponentsDir();
export const componentsFolders = createComponentsFolders();
export const chosenStyleSheetLanguage = chooseStyleSheetLanguage();
export const chosenScriptingLanguage = chooseScriptingLanguage();

componentsFolders.forEach(createComponentFiles);
