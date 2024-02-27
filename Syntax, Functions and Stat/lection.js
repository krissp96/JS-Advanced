//default func param

function printStars(count = 5) {
  console.log("*".repeat(count));
}
printStars();
printStars(2);
printStars(3, 5, 8);

// // Arithmeticoperators-take numerical values (either
// literals or variables) as their operands
//  Return a single numerical value
//  Addition (+)
//   Subtraction(-)
//  Multiplication(*)
//  Division(/)
//  Remainder (%)
//   Exponentiation (**)
//  Arithmetic Operators
//  let a = 15;
//  let b = 5;
//  let c;
//  c= a + b;//20
//  c= a-b;//10
//  c= a * b;//75
//  c= a / b;//3
//  c= a % b;//0
//  c= a ** b;//155 = 759375

// Assignnment Operators
//  x = y
//  x += y
//  x -= y
//  x *= y
//  x /= y
//  x %= y
//  x **= y
//  Basic usage
//  x = y
//  x = x + y
//  x = x -y
//  x = x * y
//  x = x / y
//  x = x % y
//  x = x ** y


//we can use the || logical operator as failsafe
//example

function start(url) {
    const data = getData(url) || [];
    data.map(...);
}