//Simple dot-notation

const person = { name: "Peter" };
console.log(person.name); // peter

//bracket-notation (indexing operator);
//required if the key contains special character

person["job-title"] = "Trainer";
console.log(person["job-title"]); //trainer

console.log(person.job - title); // referenceError

//Brackets can be used with keys as string variables ..

//Properties can be added during run-time

person.age = 21;

console.log(person.age);

//Unassigned properties of an object are undefined

console.log(person.lastName); //undefined
