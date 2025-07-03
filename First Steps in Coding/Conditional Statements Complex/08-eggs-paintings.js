function eggsPainting(arg1, arg2, arg3) {
  let eggSize = arg1;
  let eggColor = arg2;
  let eggPacks = Number(arg3);

  let totalIncome = 0;
  let currentPrice = 0;

  switch (eggSize) {
    case 'Large':
      if (eggColor === 'Red') {
        currentPrice += 16;
      } else if (eggColor === 'Green') {
        currentPrice += 12;
      } else if (eggColor === 'Yellow') {
        currentPrice += 9;
      }
      break;

    case 'Medium':
      if (eggColor === 'Red') {
        currentPrice += 13;
      } else if (eggColor === 'Green') {
        currentPrice += 9;
      } else if (eggColor === 'Yellow') {
        currentPrice += 7;
      }
      break;

    case 'Small':
      if (eggColor === 'Red') {
        currentPrice += 9;
      } else if (eggColor === 'Green') {
        currentPrice += 8;
      } else if (eggColor === 'Yellow') {
        currentPrice += 5;
      }
      break;
    default:
      console.log(`Error`);
  }

  currentPrice *= eggPacks;
  currentPrice = currentPrice - currentPrice * 0.35;

  console.log(`${currentPrice.toFixed(2)} leva.`);
}

eggsPainting('Large', 'Red', 7);
eggsPainting('Medium', 'Green', 5);
eggsPainting('Small', 'Yellow', 3);
