function strLength(str1, str2, str3) {
  const len1 = str1.length;
  const len2 = str2.length;
  const len3 = str3.length;

  let sum = len1 + len2 + len3;
  let avgLngth = Math.floor(sum / 3);

  console.log(sum);
  console.log(avgLngth);
}

strLength("chocolate", "ice cream", "cake");

function solve(str1, str2, str3) {
  let len1 = str1.length;
  let len2 = str2.length;
  let len3 = str3.length;
  let sumLength = len1 + len2 + len3;
  let averageLength = Math.floor(sumLength / 3);
  console.log(sumLength);
  console.log(averageLength);
}
