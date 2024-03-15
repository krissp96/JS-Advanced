//For in - iterates over all enumerable properties

const key = "position";

const person = {
  name: "Kristiyan",
  age: "27",
  [key]: "Junior dev",
};

for (let prop in person) {
  //   console.log(prop);
  console.log(prop, person[prop]);
}
