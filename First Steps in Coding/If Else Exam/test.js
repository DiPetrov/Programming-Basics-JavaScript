function test(n) {
  let result = '';

  for (let currentNum = 1111; currentNum <= 9999; currentNum++) {
    let isSpecial = true;

    let currentNumAsStr = currentNum + '';

    for (let index = 0; index < currentNumAsStr.length; index++) {
      let digit = Number(currentNumAsStr[index]);

      if (n % digit !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial) {
      result += currentNum + ' ';
    }
  }

  console.log(`${result}`);
}
test(3);
