import create from "prompt-sync";
import createComponentsDir from "./utils/createComponentsDir.js";

export const input = create();

export let componentsPath = createComponentsDir();
