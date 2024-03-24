function editElement(element, match, replacer) {
  let content = element.textContent;
  if (element) {
    content = content.split(match).join(replacer);

    element.textContent = content;
  } else {
    console.log("Error");
  }
}
