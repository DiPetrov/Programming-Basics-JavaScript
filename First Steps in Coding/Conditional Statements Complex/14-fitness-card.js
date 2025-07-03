function fitnessCard(arg1, arg2, arg3, arg4) {
  let money = Number(arg1);
  let sex = arg2;
  let age = arg3;
  let sportArt = arg4;

  let cardCost = 0;

  if (sex === 'm') {
    switch (sportArt) {
      case 'Gym':
        cardCost += 42;
        break;
      case 'Boxing':
        cardCost += 41;
        break;
      case 'Yoga':
        cardCost += 45;
        break;
      case 'Zumba':
        cardCost += 34;
        break;
      case 'Dances':
        cardCost += 51;
        break;
      case 'Pilates':
        cardCost += 39;
        break;
      default:
        console.log(`Error`);
    }
  } else if (sex === 'f') {
    switch (sportArt) {
      case 'Gym':
        cardCost += 35;
        break;
      case 'Boxing':
        cardCost += 37;
        break;
      case 'Yoga':
        cardCost += 42;
        break;
      case 'Zumba':
        cardCost += 31;
        break;
      case 'Dances':
        cardCost += 53;

        break;
      case 'Pilates':
        cardCost += 37;
        break;
      default:
        console.log(`Error`);
    }
  }

  if (age <= 19) {
    cardCost *= 0.8;
  }

  if (money >= cardCost) {
    console.log(`You purchased a 1 month pass for ${sportArt}.`);
  } else {
    console.log(
      `You don't have enough money! You need $${(cardCost - money).toFixed(
        2
      )} more.`
    );
  }
}
fitnessCard(50, 'm', 23, 'Gym');
fitnessCard(20, 'f', 15, 'Yoga');
fitnessCard(10, 'm', 50, 'Pilates');
