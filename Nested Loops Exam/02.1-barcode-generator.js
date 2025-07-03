function barcodeGenerator(startNum, endNum) {
  let validNums = '';
  let startNumStr = startNum + '';
  let endNumStr = endNum + '';

  for (
    let digit1 = Number(startNumStr[0]);
    digit1 <= Number(endNumStr[0]);
    digit1++
  ) {
    for (
      let digit2 = Number(startNumStr[1]);
      digit2 <= Number(endNumStr[1]);
      digit2++
    ) {
      for (
        let digit3 = Number(startNumStr[2]);
        digit3 <= Number(endNumStr[2]);
        digit3++
      ) {
        for (
          let digit4 = Number(startNumStr[3]);
          digit4 <= Number(endNumStr[3]);
          digit4++
        ) {
          if (
            digit1 % 2 !== 0 &&
            digit2 % 2 !== 0 &&
            digit3 % 2 !== 0 &&
            digit4 % 2 !== 0
          ) {
            validNums += `${digit1}${digit2}${digit3}${digit4} `;
          }
        }
      }
    }
  }

  console.log(validNums);
}

barcodeGenerator(2345, 6789);
