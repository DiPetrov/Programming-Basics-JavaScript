function numberWars(input) {
  let playerOne = input[0];
  let playerTwo = input[1];

  let index = 2;
  let command = input[index];
  let playerOnePoints = 0;
  let playerTwoPoints = 0;

  index++;

  while (command !== 'End of game') {
    let playerOneCard = Number(command);
    let playerTwoCard = Number(input[index]);

    if (playerOneCard > playerTwoCard) {
      playerOnePoints += playerOneCard - playerTwoCard;
    } else if (playerTwoCard > playerOneCard) {
      playerTwoPoints += playerTwoCard - playerOneCard;
    } else if (playerOneCard === playerTwoCard) {
      index++;
      playerOneCard = Number(input[index]);
      index++;
      playerTwoCard = Number(input[index]);
      if (playerOneCard > playerTwoCard) {
        console.log(`Number wars!`);
        console.log(`${playerOne} is winner with ${playerOnePoints} points`);
        return;
      } else {
        console.log(`Number wars!`);
        console.log(`${playerTwo} is winner with ${playerTwoPoints} points`);
        return;
      }
    }

    index++;
    command = input[index];
    index++;
  }

  console.log(`${playerOne} has ${playerOnePoints} points`);
  console.log(`${playerTwo} has ${playerTwoPoints} points`);
}

// numberWars(['Desi', 'Niki', '7', '5', '3', '4', '3', '3', '5', '3']);
// numberWars(['Elena', 'Simeon', '6', '3', '2', '5', '8', '9', 'End of game']);
numberWars([
  'Aleks',
  'Georgi',
  '4',
  '5',
  '3',
  '2',
  '4',
  '3',
  '4',
  '4',
  '5',
  '2',
]);
