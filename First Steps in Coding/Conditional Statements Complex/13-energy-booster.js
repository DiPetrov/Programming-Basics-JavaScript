function energyBooster(arg1, arg2, arg3) {
  let fruit = arg1;
  let setSize = arg2;
  let setPurchased = Number(arg3);

  let currentPrice = 0;

  if (setSize === 'small') {
    switch (fruit) {
      case 'Watermelon':
        currentPrice += 2 * setPurchased * 56;
        break;
      case 'Mango':
        currentPrice += 2 * setPurchased * 36.66;
        break;
      case 'Pineapple':
        currentPrice += 2 * setPurchased * 42.1;
        break;
      case 'Raspberry':
        currentPrice += 2 * setPurchased * 20;
        break;
      default:
        console.log(`Error`);
    }
  } else if (setSize === 'big') {
    switch (fruit) {
      case 'Watermelon':
        currentPrice += 5 * setPurchased * 28.7;
        break;
      case 'Mango':
        currentPrice += 5 * setPurchased * 19.6;
        break;
      case 'Pineapple':
        currentPrice += 5 * setPurchased * 24.8;
        break;
      case 'Raspberry':
        currentPrice += 5 * setPurchased * 15.2;
        break;
      default:
        console.log(`Error`);
    }
  }

  if (currentPrice >= 400 && currentPrice <= 1000 ) {
   currentPrice *= 0.85;
  } else if (currentPrice > 1000) {
   currentPrice *= 0.5;
  }

  console.log(`${currentPrice.toFixed(2)} lv.`);
}
energyBooster('Watermelon', 'big', 4);
