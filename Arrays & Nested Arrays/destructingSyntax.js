let numbers = [10, 20, 30, 40, 50];
let [a, b, ...elems] = numbers;

console.log(a, b, ...elems);
console.log(elems[0], elems[1], elems[2]);
