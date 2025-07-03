function equalSums(startNum, endNum) {
 let result = '';

for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
     let evenPositionSum = 0;
     let oddPositionSum = 0;

     let currentNumStr = currentNum + '';

     for (let i = 0; i < currentNumStr.length; i++) {
      let digit = Number(currentNumStr[i]);

      if (i % 2 === 0) {
       evenPositionSum += digit;
      } else {
       oddPositionSum += digit;
      }
     }

     if (evenPositionSum === oddPositionSum) {
        result += currentNum + ' ';
    }
}
        console.log(result);

}
equalSums(100000, 100050);