function basketballTournaments(input) {
  let index = 0;
  let wins = 0;
  let loses = 0;
  let command = input[index];
  let matchesPlayed = 0;

  while (command !== 'End of tournaments') {
    let currentMatch = 0;

    index++;
    let matchesAmount = input[index];
    for (let i = 1; i <= matchesAmount; i++) {
      currentMatch++;
      index++;
      let homeTeamScore = Number(input[index]);
      index++;
      let awayTeamScore = Number(input[index]);

      matchesPlayed++;

      if (homeTeamScore > awayTeamScore) {
        wins++;
        console.log(
          `Game ${currentMatch} of tournament ${command}: win with ${
            homeTeamScore - awayTeamScore
          } points.`
        );
      } else {
        loses++;
        console.log(
          `Game ${currentMatch} of tournament ${command}: lost with ${
            awayTeamScore - homeTeamScore
          } points.`
        );
      }
    }

    index++;
    command = input[index];
  }

  console.log(`${((wins / matchesPlayed) * 100).toFixed(2)}% matches win`);
  console.log(`${((loses / matchesPlayed) * 100).toFixed(2)}% matches lost`);
}

// basketballTournaments([
//   'Dunkers',
//   '2',
//   '75',
//   '65',
//   '56',
//   '73',
//   'Fire Girls',
//   '3',
//   '67',
//   '34',
//   '83',
//   '98',
//   '66',
//   '45',
//   'End of tournaments',
// ]);

basketballTournaments([
  'Ballers',
  '3',
  '87',
  '63',
  '56',
  '65',
  '75',
  '64',
  'Sharks',
  '4',
  '64',
  '76',
  '65',
  '86',
  '68',
  '99',
  '45',
  '78',
  'End of tournaments',
]);
