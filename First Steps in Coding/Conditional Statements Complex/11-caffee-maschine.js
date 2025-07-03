function coffeeMashine(arg1, arg2, arg3) {
  let drink = arg1;
  let sugar = arg2;
  let drinkAmount = Number(arg3);

  let currentPrice = 0;

  switch (drink) {
    case 'Espresso':
      switch (sugar) {
        case 'Without':
          currentPrice += drinkAmount * 0.9;
          break;
        case 'Normal':
          currentPrice += drinkAmount * 1;
          break;
        case 'Extra':
          currentPrice += drinkAmount * 1.2;
          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Cappuccino':
      switch (sugar) {
        case 'Without':
          currentPrice += drinkAmount * 1;
          break;

        case 'Normal':
          currentPrice += drinkAmount * 1.2;
          break;

        case 'Extra':
          currentPrice += drinkAmount * 1.6;

          break;
        default:
          console.log(`Error`);
      }
      break;

    case 'Tea':
      switch (sugar) {
        case 'Without':
          currentPrice += drinkAmount * 0.5;
          break;
        case 'Normal':
          currentPrice += drinkAmount * 0.6;
          break;

        case 'Extra':
          currentPrice += drinkAmount * 0.7;
          break;
        default:
          console.log(`Error`);
      }
      break;
    default:
      console.log(`Error`);
  }

  if (sugar === 'Without') {
    currentPrice = currentPrice - currentPrice * 0.35;
  }

  if (drink === 'Espresso' && drinkAmount >= 5) {
    currentPrice = currentPrice - currentPrice * 0.25;
  }

  if (currentPrice > 15) {
    currentPrice = currentPrice - currentPrice * 0.2;
  }
  console.log(
    `You bought ${drinkAmount} cups of ${drink} for ${currentPrice.toFixed(
      2
    )} lv.`
  );
}
coffeeMashine('Espresso', 'Without', 10);
coffeeMashine('Cappuccino', 'Normal', 13);
coffeeMashine('Tea', 'Extra', 3);
