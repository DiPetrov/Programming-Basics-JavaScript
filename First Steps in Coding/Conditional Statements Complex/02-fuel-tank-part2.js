function fuelTank2(fuel, fuelLiter, clubCard) {
  let finalPrice = 0;

  switch (fuel) {
    case 'Gas':
      if (clubCard === 'Yes') {
        finalPrice += fuelLiter * (0.93 - 0.08);
      } else {
        finalPrice += fuelLiter * 0.93;
      }
      break;

    case 'Diesel':
      if (clubCard === 'Yes') {
        finalPrice += fuelLiter * (2.33 - 0.12);
      } else {
        finalPrice += fuelLiter * 2.33;
      }
      break;

    case 'Gasoline':
      if (clubCard === 'Yes') {
        finalPrice += fuelLiter * (2.22 - 0.18);
      } else {
        finalPrice += fuelLiter * 2.22;
      }
      break;
    default:
      console.log(`Invalid`);
  }

  if (fuelLiter >= 20 && fuelLiter <= 25) {
    finalPrice *= 0.92;
  } else if (fuelLiter > 25) {
    finalPrice *= 0.9;
  }

  console.log(`${finalPrice.toFixed(2)} lv.`);
}

fuelTank2('Gas', 30, 'Yes');
fuelTank2('Gasoline', 25, 'No');
fuelTank2('Diesel', 19, 'No');
