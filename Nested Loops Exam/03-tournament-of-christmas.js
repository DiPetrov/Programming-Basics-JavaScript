function tournamentChristmas(input) {
  let days = Number(input[0]);

  let index = 1;
  let totalRaisedMoney = 0;
  let totalWins = 0;
  let totalLoses = 0;

  for (i = 1; i <= days; i++) {
    let wins = 0;
    let loses = 0;
    let currentMoney = 0;
    let command = input[index];
    index++;
    while (command !== 'Finish') {
      let currentGame = command;
      let currentResult = input[index];

      if (currentResult === 'win') {
        wins++;
        currentMoney += 20;
      } else {
        loses++;
      }

      index++;
      command = input[index];
      index++;
    }
    if (wins > loses) {
      currentMoney *= 1.1;
    }

    totalWins += wins;
    totalLoses += loses;
    totalRaisedMoney += currentMoney;
  }

  if (totalWins > totalLoses) {
    totalRaisedMoney *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${totalRaisedMoney.toFixed(
        2
      )}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalRaisedMoney.toFixed(
        2
      )}`
    );
  }
}
tournamentChristmas([
  '2',
  'volleyball',
  'win',
  'football',
  'lose',
  'basketball',
  'win',
  'Finish',
  'golf',
  'win',
  'tennis',
  'win',
  'badminton',
  'win',
  'Finish',
]);
tournamentChristmas([
  '3',
  'darts',
  'lose',
  'handball',
  'lose',
  'judo',
  'win',
  'Finish',
  'snooker',
  'lose',
  'swimming',
  'lose',
  'squash',
  'lose',
  'table tennis',
  'win',
  'Finish',
  'volleyball',
  'win',
  'basketball',
  'win',
  'Finish',
]);
