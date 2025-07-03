function darts(input) {
  let name = input[0];
  let index = 1;
  let command = input[index];

  let successfulShots = 0;
  let unsuccessfulShots = 0;
  let startPoints = 301;

  index++;

  while (command !== 'Retire') {
    let currentShot = command;
    let currentPoints = Number(input[index]);

    if (currentShot === 'Double') {
      currentPoints *= 2;
    } else if (currentShot === 'Triple') {
      currentPoints *= 3;
    }

    if (currentPoints > startPoints) {
      unsuccessfulShots++;
    } else {
      startPoints -= currentPoints;
      successfulShots++;
    }

    if (startPoints === 0) {
      console.log(`${name} won the leg with ${successfulShots} shots.`);
      return;
    }

    index++;
    command = input[index];
    index++;
  }

  console.log(`${name} retired after ${unsuccessfulShots} unsuccessful shots.`);
}

darts([
  'Stephen Bunting',
  'Triple',
  '20',
  'Triple',
  '20',
  'Triple',
  '20',
  'Triple',
  '20',
  'Triple',
  '20',
  'Triple',
  '20',
  'Double',
  '7',
  'Single',
  '12',
  'Double',
  '1',
  'Single',
  '1',
]);

darts([
  'Rob Cross',
  'Triple',
  '20',
  'Triple',
  '20',
  'Triple',
  '20',
  'Triple',
  '20',
  'Double',
  '20',
  'Triple',
  '20',
  'Double',
  '5',
  'Triple',
  '10',
  'Double',
  '6',
  'Retire',
]);

darts([
  'Michael van Gerwen',
  'Triple',
  '20',
  'Triple',
  '19',
  'Double',
  '10',
  'Single',
  '3',
  'Single',
  '1',
  'Triple',
  '20',
  'Triple',
  '20',
  'Double',
  '20',
]);
