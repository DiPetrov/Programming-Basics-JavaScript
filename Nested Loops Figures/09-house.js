function house(n) {
  let stars = 1;
  if (n % 2 === 0) {
    stars++;
  }

  let roofLength = Math.ceil(parseInt(n) / 2);
  let padding = (n - stars) / 2;
  let line = '-'.repeat(padding);
  line += '*'.repeat(stars);
  line += '-'.repeat(padding);
  console.log(line);
  stars += 2;

  for (let i = 0; i < n / 2; i++) {
    let line = '|' + '*'.repeat(n - 2) + '|';
    console.log(line);
  }
}
house(5);
