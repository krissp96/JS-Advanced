const arr = [3, 7, 1, 5, 4, 12];
console.log(arr);

arr.sort(compareNums);

console.log(arr);

function compareNums(a, b) {
  console.log(a, b);
  return a - b; //to compare nums from lowest to highest
  //return b-a // to compare nums from highest to lowest
  // return -1 // reverses the array in the current situation and most similar casses will work the same
  //return 0 // will keep the arr the way it is
  // we can use logic operators we can compare them put them in if statements use Math.random etc.
}

//sorting strings uses localeCompare

const stringArr = ["Pesho", "georgi", "Anna", "John"];

stringArr.sort(compareStrings); //if we only try to sort stringArr without localeCompare it will not work properly as it sorts them by ascii
//localeCompare will be used in a function and then passed to the sort method and it will be sorted lexicographical
console.log(stringArr);

function compareStrings(a, b) {
  return a.localeCompare(b);
}

nums.sort((a, b) => a - b);
words.sort((a, b) => a.localeCompare(b));

//those two cases mostly cover 90 % of the existing problems when we want to sort an arr or str
