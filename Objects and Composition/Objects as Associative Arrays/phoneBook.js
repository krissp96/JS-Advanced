const phonebook = {
  John: "12030123",
  Bob: "12301240",
  Mary: "123-55341",
};
console.log(phonebook);

for (let name in phonebook) {
  console.log(name, phonebook[name]);
}
