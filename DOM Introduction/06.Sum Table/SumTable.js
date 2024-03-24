function sumTable() {
  let result = 0;
  let arr = Array.from(document.getElementsByTagName("td"));
  arr.map((e, index) => {
    if (index % 2 == 1) {
      // console.log(element.innerText);
      result += Number(e.innerText);
    }
  });
  console.log(result);

  document.getElementById("sum").innerText = result;
  console.log(document.getElementById("sum"));

  //   console.log(arr);
}
