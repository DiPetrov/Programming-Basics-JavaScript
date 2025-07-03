function nameChange(input) {
  let index = 0;
  let command = input[index];
  let playerOneName = '';
  let playerTwoName = '';
  let playerOnePoints = 0;
  let playerTwoPoints = 0;
  let winnerName = '';
  let winnerPoints = 0;

  while (command !== 'Stop') {
    let currentName = command;
    let currentPoints = 0;

    for (let i = 0; i < currentName.length; i++) {
      let currentLetter = currentName.charCodeAt(i);
      index++;
      let currentNumber = Number(input[index]);
      if (currentLetter === currentNumber) {
        currentPoints += 10;
      } else {
        currentPoints += 2;
      }
    }

    if (currentPoints > playerOnePoints) {
      playerOnePoints = currentPoints;
      winnerName = currentName;
    } else if (currentPoints === playerOnePoints) {
      winnerName = currentName;
      winnerPoints = currentPoints;
    }

    index++;
    command = input[index];
  }

  console.log(`The winner is ${winnerName} with ${playerOnePoints} points!`);
}
nameChange(['Ivan', '73', '20', '98', '110', 'Ivo', '80', '65', '87', 'Stop']);
nameChange([
  'Pesho',
  '124',
  '34',
  '111',
  '97',
  '99',
  'Gosho',
  '98',
  '124',
  '88',
  '76',
  '18',
  'Stop',
]);
