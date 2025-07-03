function specialNumbers(magicNum) {
  let allSpecialNumbs = '';

  for (let currentNum = 1111; currentNum <= 9999; currentNum++) {
    let isMagic = true;
    let currentNumStr = String(currentNum);

    for (let i = 0; i < currentNumStr.length; i++) {
      let digit = currentNumStr[i];

      if (magicNum % digit !== 0) {
        isMagic = false;
        break;
      }
    }

    if (isMagic) {
      allSpecialNumbs += currentNum + ' ';
    }
  }

  console.log(allSpecialNumbs);
}

specialNumbers(3);
