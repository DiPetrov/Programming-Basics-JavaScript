function easterTournament(input) {
  let cakes = Number(input[0]);
  let index = 0;
  let command = input[index];
  let bestBaker = '';
  let bakerPoints = 0;

  for (let i = 1; i <= cakes; i++) {
    let currentBakerPoints = 0;
    index++;
    let currentBaker = input[index];
    command = input[index];
    index++;
    while (command !== 'Stop') {
      let currentPoints = Number(input[index]);
      currentBakerPoints += currentPoints;

      index++;
      command = input[index];
    }

    console.log(`${currentBaker} has ${currentBakerPoints} points.`);

    if (bakerPoints === 0) {
      console.log(`${currentBaker} is the new number 1!`);
      bakerPoints += currentBakerPoints;
      bestBaker = currentBaker;
    }

    if (currentBakerPoints > bakerPoints) {
      console.log(`${currentBaker} is the new number 1!`);
      bestBaker = currentBaker;
      bakerPoints = currentBakerPoints;
    }
  }

  console.log(`${bestBaker} won competition with ${bakerPoints} points!`);
}

easterTournament([
  '3',
  'Chef Manchev',
  '10',
  '10',
  '10',
  '10',
  'Stop',
  'Natalie',
  '8',
  '2',
  '9',
  'Stop',
  'George',
  '9',
  '2',
  '4',
  '2',
  'Stop',
]);

// easterTournament([
//   '2',
//   'Chef Angelov',
//   '9',
//   '9',
//   '9',
//   'Stop',
//   'Chef Rowe',
//   '10',
//   '10',
//   '10',
//   '10',
//   'Stop',
// ]);
