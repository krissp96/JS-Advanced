//The forEach() executes a provided function once for each array element

//converting a for loop to forEach

const items = ["item1", "item2", "item3"];

const copy = [];

for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}

items.forEach((item) => {
  copy.push(item);
});

console.log(`forEach`, copy, `\n`);

// MAP creates a new arr with the results of calling a provided function on every element in the calling arr

const numbers = [1, 4, 9];

const roots = numbers.map((num, i, arr) => {
  return Math.sqrt(num);
});

//The some() method tests weather at least one element in the arr passes the test inplemented by the provided func

const someArr = [10, 20, 30, 40, 50];

const someN = someArr.some((f) => f % 5 == 0);

console.log(someN, `Some Methood`, `\n`);

console.log(`MAP`, roots, `\n`);

//every will return if every element is true

//find returns the first found value in the array, if an element in the arr satisfies the provided testing function or undefined if not found

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((e) => e % 10 == 0);

console.log(found, `Find`, `\n`);

//findIndex works in the same way but returns the index

const found2 = array1.findIndex((e) => e % 2 == 0);
console.log(found2, `findIndex`);

//filter creates a new arr with filtered elements only, calls a provided callback function once or each element in an array and does not mutate
//the array on which it is called

const numsArr = [3, 7, 1, 4, 5, 12];
console.log(
  numsArr.filter((e) => e % 2 == 0),
  `filter func`,
  `\n`
);
