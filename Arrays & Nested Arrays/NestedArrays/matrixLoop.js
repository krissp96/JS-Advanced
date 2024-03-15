//looping through a nested arr

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [-1, -2, -3],
  [-4, -5, -6],
];

console.log(arr[0], arr[2]);

for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
  // console.log(arr[rowIndex]);
  for (let colIndex = 0; colIndex < 3; colIndex++) {
    console.log(arr[rowIndex][colIndex]);
  }
}
//we can loop the nested array column by column or row by row
