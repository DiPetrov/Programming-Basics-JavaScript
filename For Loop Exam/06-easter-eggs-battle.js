function easterEggs(input) {
  let paintedEggsAmount = Number(input[0]);

  let redEggs = 0;
  let orangeEggs = 0;
  let blueEggs = 0;
  let greenEggs = 0;
  let maxEggs = 0;
  let redColor = 'red';
  let orangeColor = 'orange';
  let blueColor = 'blue';
  let greenColor = 'green';

  for (let i = 1; i <= paintedEggsAmount; i++) {
    let currentEgg = input[i];

    switch (currentEgg) {
      case 'red':
        redEggs += 1;
        break;
      case 'orange':
        orangeEggs += 1;
        break;
      case 'blue':
        blueEggs += 1;
        break;
      case 'green':
        greenEggs += 1;
        break;
    }
  }

  console.log(`Red eggs: ${redEggs}`);
  console.log(`Orange eggs: ${orangeEggs}`);
  console.log(`Blue eggs: ${blueEggs}`);
  console.log(`Green eggs: ${greenEggs}`);

  if (redEggs > orangeEggs && redEggs > blueEggs && redEggs > greenEggs) {
    maxEggs += redEggs;
    console.log(`Max eggs: ${maxEggs} -> ${redColor}`);
  } else if (
    orangeEggs > redEggs &&
    orangeEggs > blueEggs &&
    orangeEggs > greenEggs
  ) {
    maxEggs += orangeEggs;
    console.log(`Max eggs: ${maxEggs} -> ${orangeColor}`);
  } else if (
    blueEggs > redEggs &&
    blueEggs > orangeEggs &&
    blueEggs > greenEggs
  ) {
    maxEggs += blueEggs;
    console.log(`Max eggs: ${maxEggs} -> ${blueColor}`);
  } else if (
    greenEggs > redEggs &&
    greenEggs > orangeEggs &&
    greenEggs > blueEggs
  ) {
    maxEggs += greenEggs;
    console.log(`Max eggs: ${maxEggs} -> ${greenColor}`);
  }
}

// easterEggs(['7', 'orange', 'blue', 'green', 'green', 'blue', 'red', 'green']);
easterEggs(['4', 'blue', 'red', 'blue', 'orange']);
