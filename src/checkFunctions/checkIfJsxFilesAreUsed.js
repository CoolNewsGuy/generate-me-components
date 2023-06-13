import { colorizeText, input } from "../index.js";

function checkIfJsxFilesAreUsed() {
  const areJsxFilesUsed = input(
    colorizeText("* Using JSX/TSX file extension (Y/n): "),
    "yes"
  ).trim();

  return ["y", "yes"].includes(areJsxFilesUsed.toLowerCase());
}

export default checkIfJsxFilesAreUsed;
