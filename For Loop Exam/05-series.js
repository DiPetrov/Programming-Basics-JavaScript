function series(input) {
  let budget = Number(input[0]);
  let seriesAmount = Number(input[1]);

  let seriesPriceTotal = 0;

  for (let i = 2; i < input.length; i += 2) {
    let seriesName = input[i];
    let seriesPrice = Number(input[i + 1]);

    // console.log(seriesName);
    // console.log(seriesPrice);
    if (seriesName === 'Thrones') {
      seriesPrice *= 0.5;
      seriesPriceTotal += seriesPrice;
    } else if (seriesName === 'Lucifer') {
      seriesPrice *= 0.6;
      seriesPriceTotal += seriesPrice;
    } else if (seriesName === 'Protector') {
      seriesPrice *= 0.7;
      seriesPriceTotal += seriesPrice;
    } else if (seriesName === 'TotalDrama') {
      seriesPrice *= 0.8;
      seriesPriceTotal += seriesPrice;
    } else if (seriesName === 'Area') {
      seriesPrice *= 0.9;
      seriesPriceTotal += seriesPrice;
    } else {
      seriesPriceTotal += seriesPrice;
    }
  }

  if (budget >= seriesPriceTotal) {
   console.log(`You bought all the series and left with ${(budget - seriesPriceTotal).toFixed(2)} lv.`);
   
  } else {
console.log(`You need ${(seriesPriceTotal - budget).toFixed(2)} lv. more to buy the series!`);
  }
}

// series(['10', '3', 'Thrones', '5', 'Riverdale', '5', 'Gotham', '2']);
series([
  '25',
  '6',
  'Teen Wolf',
  '8',
  'Protector',
  '5',
  'TotalDrama',
  '5',
  'Area',
  '4',
  'Thrones',
  '5',
  'Lucifer',
  '9',
]);
