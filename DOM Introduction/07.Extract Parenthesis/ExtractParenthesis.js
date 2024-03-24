function extract(content) {
  let regEx = /(?<=\()[^)]+(?=\))/g;
  let replace = [];
  let text = [];
  let maikaTiJudge = document.getElementById("content").textContent;
  maikaTiJudge.toString;

  const match = maikaTiJudge.match(regEx);

  match.map((e) => {
    replace.push(e);
    // return replace;
  });

  text = replace.join("; ");
  return replace;
}
