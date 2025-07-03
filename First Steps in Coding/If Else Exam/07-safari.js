function safari(budget, fuelNeeded, dayOfWeek) {
  let fuelCosts = fuelNeeded * 2.1;
  let totalCosts = fuelCosts + 100;

  if (dayOfWeek === 'Sunday') {
    totalCosts *= 0.8;
  } else if (dayOfWeek === 'Saturday') {
    totalCosts *= 0.9;
  }

  if (budget >= totalCosts) {
    console.log(
      `Safari time! Money left: ${(budget - totalCosts).toFixed(2)} lv.`
    );
  } else {
    console.log(
      `Not enough money! Money needed: ${(totalCosts - budget).toFixed(2)} lv.`
    );
  }
}

safari(1000, 10, 'Sunday');
