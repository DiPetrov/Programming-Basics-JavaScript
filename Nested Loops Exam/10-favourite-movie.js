function favoriteMovie(input) {
  let index = 0;
  let command = input[index];
  let highestScore = 0;
  let mostPowerfulWord = '';

  while (command !== 'STOP') {
    if (index >= 6) {
      console.log(`The limit is reached.`);
      break;
    }

    let currentPoints = 0;

    for (let i = 0; i < command.length; i++) {
      let currentLetter = String(command[i]);
      let currentASCInumber = Number(command.charCodeAt(i));
      let wordLength = Number(command.length);

      if (currentLetter === ' ') {
      } else if (/\d/.test(currentLetter)) {
       currentLetter = currentLetter.replace(/\d+/g, '');
      } else if (currentLetter === currentLetter.toUpperCase()) {
        currentASCInumber -= wordLength;
      } else if (currentLetter === currentLetter.toLowerCase()) {
        currentASCInumber -= wordLength * 2;
      }

      currentPoints += currentASCInumber;
    }

    if (highestScore === 0) {
      highestScore = currentPoints;
      mostPowerfulWord = command;
    }

    if (currentPoints > highestScore) {
      highestScore = currentPoints;
      mostPowerfulWord = command;
    }

    index++;
    command = input[index];
  }

  console.log(
    `The best movie for you is ${mostPowerfulWord} with ${highestScore} ASCII sum.`
  );
}

favoriteMovie(['Matrix', 'Breaking bad', 'Legend', 'STOP']);
favoriteMovie([
  'Wrong turn',
  'The maze',
  'Area 51',
  'Night Club',
  'Ice age',
  'Harry Potter',
  'Wizards',
  ,
]);
favoriteMovie(["The maze",
"School story 2",
"Shrek 2",
"Ice age",
"STOP"])
