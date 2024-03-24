function focused() {
  const inputs = Array.from(document.getElementsByTagName("input"));

  inputs.map((input) => {
    input.addEventListener("focus", focus);
    function focus() {
      const parentDiv = input.parentElement;
      if (parentDiv) {
        parentDiv.classList.add("focused");
      }
    }
    input.addEventListener("blur", blured);
    function blured() {
      const parentDiv = input.parentElement;
      if (parentDiv) {
        // parentDiv.parentElement.remove("focused");
        console.log(parentDiv.classList.remove("focused"));
      }
    }
  });
}
