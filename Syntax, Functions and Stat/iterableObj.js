const iterableObj = {
  value: 0,
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: ++iterableObj.value,
          done: iterableObj.value >= 5,
        };
      },
    };
  },
};
for (let val of iterableObj) {
  console.log(val);
}
