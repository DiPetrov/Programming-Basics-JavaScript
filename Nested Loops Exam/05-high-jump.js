function highJump(input) {
  let neededHeight = Number(input[0]);

  let index = 1;

  let startingHeight = neededHeight - 30;
  let attempts = 0;
  let jumps = 0;

  while (startingHeight <= neededHeight) {
    let tempResult = Number(input[index]);

    if (tempResult > startingHeight) {
      startingHeight += 5;
      attempts = 0;
    } else {
      attempts++;
    }

    jumps++;

    if (attempts === 3) {
      break;
    }

    index++;
  }

  if (attempts === 3) {
    console.log(`Tihomir failed at ${startingHeight}cm after ${jumps} jumps.`);
  } else {
    console.log(
      `Tihomir succeeded, he jumped over ${neededHeight}cm after ${jumps} jumps.`
    );
  }
}
highJump(['231', '205', '212', '213', '228', '229', '230', '235']);
highJump(['250', '225', '224', '225', '228', '231', '235', '234', '235']);
