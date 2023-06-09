import { isConfigFileAllowed } from "../index.js";
import writeConfigFile from "../writeFunctions/writeConfigFile.js";

function createConfigFileIfPermitted() {
  if (isConfigFileAllowed) {
    writeConfigFile();
  }
}

export default createConfigFileIfPermitted;
