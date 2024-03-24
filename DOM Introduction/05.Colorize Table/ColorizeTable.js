// function colorize() {
//   // TODO
//   const rows = Array.from(document.getElementsByTagName("tr"));
//   for (let i = 1; i < rows.length; i += 2) {
//     rows[i].style.backgroundColor = "teal";
//   }
// }

// function colorize() {
//   // TODO
//   const rows = Array.from(document.getElementsByTagName("tr"));
//   rows.map((row, index) => {
//     if (index % 2 == 1) {
//       row.style.backgroundColor = "teal";
//     }
//   });
// }

function colorize() {
  const rows = Array.from(document.getElementsByTagName("tr"));
  rows.map((e, i) => {
    if (i % 2 == 1) {
      e.style.background = "teal";
    }
  });
  console.log(rows);
}
