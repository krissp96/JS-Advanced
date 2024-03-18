// obtain an arr of all keys or values in an object

const phonebook = {
  John: "12030123",
  Bob: "12301240",
  Mary: "123-55341",
};

const keys = Object.keys(phonebook);
console.log(keys);

//obtain values

const values = Object.values(phonebook);
console.log(values);

//entries it is good for sorting objects

const entries = Object.entries(phonebook);
console.log(entries, `entries`);
