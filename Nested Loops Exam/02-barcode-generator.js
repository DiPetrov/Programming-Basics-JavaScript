function barcodeGenerator(arg1, arg2) {
  let startNum = Number(arg1);
  let endNum = Number(arg2);
  let allOddNumbers = '';
  let oddNumbers = 0;

  for (let i = startNum; i <= endNum; i++) {
    let currentNumber = Number(i);
    let currentNumberStr = String(currentNumber);

    for (let x = 0; x < currentNumberStr.length; x++) {
      let digit = Number(currentNumberStr[x]);

      if (digit % 2 !== 0) {
        oddNumbers += currentNumber;
        allOddNumbers += oddNumbers + ' ';
        console.log(allOddNumbers);
      }
    }
  }
}
barcodeGenerator(2345, 6789);
