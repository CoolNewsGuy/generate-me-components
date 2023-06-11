import { colorizeText, input } from "../index.js";

function checkIfJsxFilesAreUsed() {
  const areJsxFilesUsed = input(
    colorizeText(
      "Are you using a library/framework that uses JSX/TSX file extension? (y/n) | default = yes: "
    ),
    "yes"
  ).trim();

  return ["y", "yes"].includes(areJsxFilesUsed.toLowerCase());
}

export default checkIfJsxFilesAreUsed;
