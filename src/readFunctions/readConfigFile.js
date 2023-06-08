import { readFileSync } from "fs";

function readConfigFile() {
  const content = readFileSync("gift-me-components.json");

  const contentToObj = JSON.parse(content);

  return contentToObj;
}

export default readConfigFile;
