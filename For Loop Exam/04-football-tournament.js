function footballTournament(input) {
  let team = input.shift();
  let gamesPlayed = Number(input.shift());

  let totalPoints = 0;
  let wins = 0;
  let draws = 0;
  let loses = 0;

  if (gamesPlayed === 0) {
    console.log(`${team} hasn't played any games during this season.`);
  }

  for (let i = 1; i <= gamesPlayed; i++) {
    let currentGame = input.shift();

    switch (currentGame) {
      case 'W':
        wins += 1;
        totalPoints += 3;
        break;

      case 'D':
        draws += 1;
        totalPoints += 1;
        break;

      case 'L':
        loses += 1;
        break;
      default:
        console.log(`Error`);
    }
  }

  if (gamesPlayed >= 1) {
    console.log(`${team} has won ${totalPoints} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${wins}`);
    console.log(`## D: ${draws}`);
    console.log(`## L: ${loses}`);
    console.log(`Win rate: ${((wins / gamesPlayed) * 100).toFixed(2)}%`);
  }
}

footballTournament([
  'Liverpool',
  '10',
  'W',
  'D',
  'D',
  'W',
  'L',
  'W',
  'D',
  'D',
  'W',
  'W',
]);

// footballTournament(['Barcelona', '7', 'W', 'D', 'L', 'L', 'W', 'W', 'D']);
// footballTournament(['Chelsea', '0']);
