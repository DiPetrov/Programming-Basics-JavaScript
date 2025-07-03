function rounding(num, rnd) {
  if (rnd > 15) {
    rnd = 15;
  }

  let result = parseFloat(num.toFixed(rnd));
  console.log(result);
}
rounding(5.43534567567575753, 70);
