//hoisting means that the functions and variables are accessible in the scope they are defined, but their position stays where they were put

f1();

function f1() {
  console.log("f1");
}
function f2() {
  console.log("f2");
}
