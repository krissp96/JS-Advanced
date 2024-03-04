function solve(...rest) {
  //rest operator takes the list of elements and converts to an array// almost in every declaration of the function it is a rest operator
  const myObj = { a: 5, name: "Peter" };

  const { ...copy } = myObj;

  // let [...copy] = params; // makes copy of the array
  const largest = Math.max(...rest); //spread operator takes the array /rest/ and converts to list of elements both are declared with /.../
  console.log(largest);
}
solve(7, 10, 12);
solve(120, 1204, 3);
