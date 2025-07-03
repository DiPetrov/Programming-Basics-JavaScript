function multiplyBy2(input) {
  let index = 0;
  let command = Number(input[index]);

  while (command >= 0) {
    let currentNumber = Number(input[index]);

    console.log(`Result: ${(currentNumber * 2).toFixed(2)}`);

    index++;
    command = Number(input[index]);
  }

  console.log(`Negative number!`);
}
multiplyBy2(['12', '43.2144', '12.3', '543.23', '-20']);
