//SPLICE changes the contents of an arr by removing or replacing existing elements and/or adding new elements

const nums = [1, 3, 4, 5, 6];
nums.splice(1, 0, 200); // inserts at index 1

console.log(nums);

nums.splice(1, 1); //deletes from 1st index

console.log(nums);
