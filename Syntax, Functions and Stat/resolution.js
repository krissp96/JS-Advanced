const resolutionList = ["4x BJJ Competitions", "Dance More Salsa"];

function isResolution(resolution) {
  for (let i = 0; i < resolution.length; i++) {
    if (resolutionList[i] === resolution) {
      return true;
    } else {
      return false;
    }
  }
}
const result = isResolution("4x BJJ Competitions");

console.log(result);
