function solve(arr) {
  const filtered = arr.filter((c, i) => i % 2);
  console.log(filtered);
  const doubled = filtered.map((e) => e * 2);
  console.log(doubled);
  doubled.reverse();
  const result = doubled.join(" ");
  console.log(result);
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
