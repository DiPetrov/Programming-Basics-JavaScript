function simpleCheck(resultOne, resultTwo, resultThree) {

  let wins = 0;
  let draws = 0;
  let loses = 0;

  let score1 = resultOne.substring(0, 1);
  let score2 = resultOne.substring(2, 3);

  if (score1 > score2) {
    wins++;
  } else if (score1 < score2) {
    loses++;
  } else if (score1 === score2) {
    draws++;
  }

  score1 = resultTwo.substring(0, 1);
  score2 = resultTwo.substring(2, 3);

  if (score1 > score2) {
    wins++;
  } else if (score1 < score2) {
    loses++;
  } else if (score1 === score2) {
    draws++;
  }

  score1 = resultThree.substring(0, 1);
  score2 = resultThree.substring(2, 3);

  if (score1 > score2) {
    wins++;
  } else if (score1 < score2) {
    loses++;
  } else if (score1 === score2) {
    draws++;
  }

  console.log(`Team won ${wins} games.`);
  console.log(`Team lost ${loses} games.`);
  console.log(`Drawn games: ${draws}`);
}

simpleCheck("3:1", "0:2", "0:0");
simpleCheck("4:2", "0:3", "1:0");
simpleCheck("0:2", "0:1", "3:3");
