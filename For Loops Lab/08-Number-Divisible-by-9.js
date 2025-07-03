function numbersDivisibleBy9(num1, num2) {
  let sum = 0;
  let buff = '';

  for (let i = num1; i <= num2; i++) {
    if (i % 9 === 0) {
      sum += i;
      buff += i + "\n"; // Advanced Technique!
    }
  }

  console.log(`The sum: ${sum}`);
  console.log(buff);
}

numbersDivisibleBy9(100, 200);
