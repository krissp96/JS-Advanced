//the reduce() executes a reducer function on each element of the array resulting in a single output value

const arr = [1, 2, 3, 4];
const reducer = (accumolator, currentValue) => accumolator + currentValue;
console.log(arr.reduce(reducer));
