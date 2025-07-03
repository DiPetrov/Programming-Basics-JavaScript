function pcGameShop(input) {
  // Магазин за компютърни игри ви наема за да направите статистика на процента продажби на игрите от
  // последния месец, като изчислите по колко процента от общите продажби са за някоя от игрите.
  // Процентите трябва да бъдат разделени на четири части, три заглавия на игри и всички останали :

  let gamesSold = Number(input[0]);

  let hearstoneSold = 0;
  let fortniteSold = 0;
  let overwatchSold = 0;
  let othersSold = 0;

  for (let i = 1; i <= gamesSold; i++) {
    let currentGame = input[i];

    if (currentGame === 'Hearthstone') {
      hearstoneSold += 1;
    } else if (currentGame === 'Fornite') {
      fortniteSold += 1;
    } else if (currentGame === 'Overwatch') {
      overwatchSold += 1;
    } else {
      othersSold += 1;
    }
  }

  console.log(
    `Hearthstone - ${((hearstoneSold / gamesSold) * 100).toFixed(2)}%`
  );
  console.log(`Fornite - ${((fortniteSold / gamesSold) * 100).toFixed(2)}%`);
  console.log(`Overwatch - ${((overwatchSold / gamesSold) * 100).toFixed(2)}%`);
  console.log(`Others - ${((othersSold / gamesSold) * 100).toFixed(2)}%`);
}

// pcGameShop(['4', 'Hearthstone', 'Fornite', 'Overwatch', 'Counter-Strike']);
pcGameShop(['3', 'Hearthstone', 'Diablo 2', 'Star Craft 2']);
