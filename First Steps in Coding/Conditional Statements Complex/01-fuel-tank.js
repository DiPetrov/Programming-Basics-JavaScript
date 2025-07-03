function test(fuel, fuelLitre) {
  switch (fuel) {
    case 'Diesel':
      if (fuelLitre >= 25) {
        console.log(`You have enough ${'diesel'}.`);
      } else if (fuelLitre < 25) {
        console.log(`Fill your tank with ${'diesel'}!`);
      }
      break;

    case 'Gasoline':
      if (fuelLitre >= 25) {
        console.log(`You have enough ${'gasoline'}.`);
      } else if (fuelLitre < 25) {
        console.log(`Fill your tank with ${'gasoline'}!`);
      }
      break;

    case 'Gas':
      if (fuelLitre >= 25) {
        console.log(`You have enough ${'gas'}.`);
      } else if (fuelLitre < 25) {
        console.log(`Fill your tank with ${'gas'}!`);
      }
      break;
    default:
      console.log(`Invalid fuel!`);
  }
}

test('Diesel', 10);
test('Gasoline', 40);
test('Gas', 25);
test('Kerosene', 200);
