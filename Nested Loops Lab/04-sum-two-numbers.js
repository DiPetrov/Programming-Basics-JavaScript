function sumTwoNumbers(startNum, endNum, magicNum) {

 let combinationCount = 0;
 let validCombinationFound = false;

for (let num1 = startNum; num1 <= endNum; num1++) {

 for (let num2 = startNum; num2 <= endNum; num2++) {
  combinationCount++;

  if (num1 + num2 === magicNum) {
     console.log(`Combination N:${combinationCount} (${num1} + ${num2} = ${magicNum})`);
     validCombinationFound = true;
     break;
  }
 }

 if (validCombinationFound) {
  break;

 }
}

if (!validCombinationFound) {
 console.log(`${combinationCount} combinations - neither equals ${magicNum}`);
 
}
}
sumTwoNumbers(1, 10 ,5);