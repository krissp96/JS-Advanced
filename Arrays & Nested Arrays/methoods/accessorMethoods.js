//join creates and returns a new string by concatenating all of the elements in an arr or an arr like obj separated by commas or a specified separator string

// examples;

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join("-"), `\n`);

//concat() method is used to merge two or more arrays this method doesn't change the existing arrays,but instead returns a new arr

//example

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num2);
console.log(numbers);

// we can do it with spread

const total = [...num1, ...num2];
console.log(total, `\n`);

//slice() returns a shallow copy of portion of an array into a new array, object sellected from begin to end (end not included)
// if we use negative number it will start counting from right to left

const fruits = ["banana", "orange", "lemon", "apple", "mango"];

const citrusNegative = fruits.slice(1, -2);
const citrus = fruits.slice(1, 3);

const fruitsCopy = fruits.slice();

console.log(citrus);
console.log(citrusNegative, `\n`);

//Includes determines whether an array contains a certain element, returning true or false as appropriate

// example

const arr = [100, 200, 300, 400];

console.log(arr.includes(1010));
console.log(arr.includes(100), `\n`);

//The indexOf() method returns the first index at which a given element of an arr can be found
// -1 is an output if element is not present in the arr

const beasts = ["Ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
