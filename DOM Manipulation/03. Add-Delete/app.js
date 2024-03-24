function addItem() {
  //   console.log("TODO:...");
  //select input
  //get input value
  // create new <li> element
  //set element text to input value
  //select list
  //apend new li to list

  const input = document.getElementById("newItemText");
  if (input.value.length == 0) {
    return;
  }
  const liElement = document.createElement("li");
  liElement.textContent = input.value;

  //Begin 03.Add-Delete
  const deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  deleteBtn.addEventListener("click", onDelete);
  liElement.appendChild(deleteBtn);

  const list = document.getElementById("items");
  list.appendChild(liElement);
  input.value = "";
  function onDelete(event) {
    const deleteBtn = event.target;
    const liElement = deleteBtn.parentElement;
    liElement.remove();
  }
}
