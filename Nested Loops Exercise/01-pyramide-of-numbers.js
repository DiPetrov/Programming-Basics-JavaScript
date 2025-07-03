function pyramideNumbers(num1) {
  // let current = 1;
  // let isBigger = false;
  // let printCurrentLine = '';

  // for (let rows = 1; rows <= num1; rows++) {
  //   for (let cols = 1; cols <= rows; cols++) {
  //     if (current > num1) {
  //       isBigger = true;
  //       break;
  //     }
  //     printCurrentLine += current + ' ';
  //     current++;
  //   }
  //   console.log(printCurrentLine);
  //   printCurrentLine = '';
  //   if (isBigger) {
  //     break;
  //   }
  // }

  let currentNum = 1;
  let currentRow = 1;
  let currentRowNums = 0;
  let result = '';

  while (currentNum <= num1) {
    if (currentRowNums < currentRow) {
      result += `${currentNum} `;
      currentRowNums++;
    } else {
      result += `\n${currentNum} `;
      currentRow++;
      currentRowNums = 1;
    }

    currentNum++;
  }

  console.log(result);
}
pyramideNumbers(7);

// 1
// 2 3
// 4 5 6
// 7
