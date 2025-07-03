function quadratFrame(n) {
  let topRow = '+';
  for (let top = 0; top < n - 2; top++) {
    topRow += ' -';
  }

  topRow += ' +';
  console.log(topRow);

  for (let mid = 0; mid < n - 2; mid++) {
    let middleRow = '|';
    for (let j = 0; j < n - 2; j++) {
      middleRow += ' -';
    }

    middleRow += ' |';
    console.log(middleRow);
  }

  let bottomRow = '+';
  for (let bot = 0; bot < n - 2; bot++) {
    bottomRow += ' -';
  }
  bottomRow += ' +';
  console.log(bottomRow);
}
quadratFrame(4);
