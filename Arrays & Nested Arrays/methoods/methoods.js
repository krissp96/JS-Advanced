//POP  arr.pop() removes the last element from an array and returns that element // this method changes the length of the array
function popp() {
  let nums = [10, 20, 30, 40, 50, 60, 70];
  console.log(nums);
  console.log(nums.pop());
  console.log(nums.length);
  console.log(nums);
}
popp();
//The .push() method adds one or more elements to the end of an array and returns the new length of the array
function pu() {
  let nums = [10, 20, 30, 40, 50, 60, 70];
  console.log(nums.length);
  console.log(nums.push(80));
  console.log(nums);
}
pu();
//Shift .shift() method  removes the first element from an arr and returns that removed element // changes the length of the array

function shi() {
  let nums = [10, 20, 30, 40, 50, 60, 70];

  console.log(nums.length);
  console.log(nums.shift());
  console.log(nums.length);
}
shi();

// Unshift adds one or more elemnts to the beginning of an arr and returns the new length
function unshi() {
  let nums = [40, 50, 60];
  console.log(nums.length);
  console.log(nums.unshift(30));
  console.log(nums.unshift(10, 20));
  console.log(nums);
}
unshi();
