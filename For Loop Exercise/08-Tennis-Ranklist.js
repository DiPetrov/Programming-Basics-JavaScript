function rankList(input) {
  let competition = Number(input[0]);
  let initialPoints = Number(input[1]);
  let seasonPoints = 0;
  let winCount = 0;

  for (let i = 2; i < input.length; i++) {
    let result = input[i];
    if (result === 'F') {
      seasonPoints += 1200;
    } else if (result === 'SF') {
      seasonPoints += 720;
    } else if (result === 'W') {
      seasonPoints += 2000;
      winCount++;
    }
  }

  console.log(`Final points: ${initialPoints + seasonPoints}`);
  console.log(`Average points: ${Math.floor(seasonPoints / competition)}`);
  console.log(`${((winCount / competition) * 100).toFixed(2)}%`);
}
