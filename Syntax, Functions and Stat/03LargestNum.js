function firstSolution(x, y, z) {
  let result;
  if (x >= y && x >= z) {
    result = x;
  } else if (y >= x && y >= z) {
    result = y;
  } else {
    result = z;
  }
  console.log(`The largest number is ${result}.`);
}

function solve(...params) {
  console.log(`The largest number is ${Math.max(...params)}.`);
}
solve(7, 11, 2, 1010);
