import { readFileSync } from "fs";

function readConfigFile() {
  try {
    const content = readFileSync("generate-me-components.json");

    const contentToObj = JSON.parse(content);

    return contentToObj;
  } catch {
    throw new Error(
      "generate-me-components.json is not a valid json file. Make sure to add {} to it if it's empty or delete it."
    );
  }
}

export default readConfigFile;
