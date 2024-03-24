function extractText() {
  //todo
  //find the list in the page
  let result = [];
  const list = document.getElementById("items");
  //loop all children
  const items = Array.from(list.children);
  // for (let item of items) {
  //   console.log(item.textContent);
  //   result.push(item.textContent);
  // }
  items.map((e, i) => {
    if (e) {
      result.push(e.textContent);
    }
  });
  //read their textContent
  //Create resulting string
  // console.log(result.join(`\n`));
  //find on the page the output textarea
  const textArea = document.getElementById("result");
  // console.log(textArea);
  //change its content to equal the resulting str
  textArea.value = result.join(`\n`);
  // console.log(textArea);
}
