function deleteByEmail() {
  //selct input
  const input = document.querySelector('[name="email"]');
  //select all tb rows
  const rows = Array.from(document.querySelectorAll("#customers tbody tr"));
  console.log(rows);
  let success = false;
  //iterate all rows and select last column
  rows.map((e) => {
    //compare column text with input value

    if (
      e.children[0].textContent == input.value ||
      e.children[1].textContent == input.value
    ) {
      //if there is a match -> remove current row
      e.remove();
      success = true;
      input.value = "";
    }
  });
  //if a row was deleted, output 'Deleted.'
  const output = document.getElementById("result");
  if (success) {
    output.textContent = "Deleted.";
    //otherwise, output "Not found."
  } else {
    output.textContent = "Not found.";
  }
}

//my version deletes by Name and email or by index 0 && 1
