// how to acces key words and value in a array

const person = {
  name: "Peter",
  age: 27,
    "last name": "Jackson",  ///adding props
  position : 'junior developer'
};
//props
let { ...workingRecord } = person;
//

console.log(`${person.name}
${person.age}`);
console.log(person["last name"]);

person["last name"] = "Johnson";

console.log(person);

const key = "last name";

console.log(person[key]);

person.height = 183;

console.log(person);

console.log(person);

///destruction and renaming

let { age: myAge } = person;

console.log(myAge);


88725857