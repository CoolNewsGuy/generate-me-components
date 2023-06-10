import { readFileSync } from "fs";

function readConfigFile() {
  try {
    const content = readFileSync("gift-me-components.json");

    const contentToObj = JSON.parse(content);

    return contentToObj;
  } catch {
    throw new Error(
      "gift-me-components.json is not a valid json file. Make sure to add {} to it if it's empty or delete it."
    );
  }
}

export default readConfigFile;
