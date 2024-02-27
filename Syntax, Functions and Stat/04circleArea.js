function solve(radius) {
  let radiusVal = typeof radius;
  //   console.log(radiusVal);

  if (radiusVal === "number") {
    let area = Math.pow(radius, 2) * Math.PI;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${radiusVal}.`
    );
  }
}
solve(5);
solve("Evan");
solve(25);
