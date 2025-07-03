function bikeRace(arg1, arg2, arg3) {
  let juniorRiders = Number(arg1);
  let seniorRiders = Number(arg2);
  let roadType = arg3;

  let tax = 0;
  let donatedSum = 0;

  switch (roadType) {
    case 'trail':
      tax += juniorRiders * 5.5 + seniorRiders * 7;
      break;
    case 'cross-country':
      if (juniorRiders + seniorRiders >= 50) {
        tax += juniorRiders * (8 * 0.75) + seniorRiders * (9.5 * 0.75);
      } else {
        tax += juniorRiders * 8 + seniorRiders * 9.5;
      }
      break;
    case 'downhill':
      tax += juniorRiders * 12.25 + seniorRiders * 13.75;
      break;
    case 'road':
      tax += juniorRiders * 20 + seniorRiders * 21.5;
  }

  tax *= 0.95;

  console.log(`${tax.toFixed(2)}`);
}
// bikeRace(10, 20, 'trail');
bikeRace(30, 25, 'cross-country');
