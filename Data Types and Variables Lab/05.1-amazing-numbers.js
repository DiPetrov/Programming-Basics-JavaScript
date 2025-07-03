function amazingNumbers(number) {
  let numberAsString = String(number);

  let sum = 0;

  for (let i = 0; i < numberAsString.length; i++) {
    let currentSymbol = numberAsString[i];

    sum += Number(currentSymbol);
  }

  let sumAsString = String(sum);

  let isAmazing = sumAsString.includes('9');

  if (isAmazing) {
    console.log(`${number} Amazing? True`);
  } else {
    console.log(`${number} Amazing? False`);
  }
}
amazingNumbers(27);
