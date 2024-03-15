//the reduce() executes a reducer function on each element of the array resulting in a single output value

const arr = [1, 2, 3, 4];
const reducer = (accumolator, currentValue) => accumolator + currentValue;
console.log(arr.reduce(reducer));
//adding bucket
console.log(arr.reduce(reducer, 10));

//The reducer function takes four arguments
//Accumolator, Current Value, Current Index (optional), Source Array(optional)
//Your reducer function's returned value is assigned to the accumolator, Accumolator's value = the final, single resulting value;

//finding an average with reduce

const numbersArr = [30, 50, 40, 10, 70];

const average = numbersArr.reduce((total, number, index, array) => {
  total += number;
  if (index === array.length - 1) {
    console.log(total / array.length, `avrg sum loop`);
    return total / array.length;
  } else {
    console.log(total, `total loop`);
    return total;
  }
});
console.log(average, `avrg result`);
