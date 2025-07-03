function easterDecoration(input) {
  let clients = Number(input[0]);
  let index = 0;

  let totalMoneySpent = 0;

  for (let i = 1; i <= clients; i++) {
    let currentSpending = 0;
    let itemsCount = 0;
    index++;
    let command = input[index];
    while (command !== 'Finish') {
      let currentItem = input[index];

      if (currentItem === 'basket') {
        currentSpending += 1.5;
      } else if (currentItem === 'wreath') {
        currentSpending += 3.8;
      } else if (currentItem === 'chocolate bunny') {
        currentSpending += 7;
      }

      itemsCount++;

      index++;
      command = input[index];
    }

    if (itemsCount % 2 === 0) {
      currentSpending *= 0.8;
    }

    totalMoneySpent += currentSpending;
    console.log(
      `You purchased ${itemsCount} items for ${currentSpending.toFixed(
        2
      )} leva.`
    );
  }

  console.log(
    `Average bill per client is: ${(totalMoneySpent / clients).toFixed(
      2
    )} leva.`
  );
}
// easterDecoration([
//   '2',
//   'basket',
//   'wreath',
//   'chocolate bunny',
//   'Finish',
//   'wreath',
//   'chocolate bunny',
//   'Finish',
// ]);

easterDecoration([
  '1',
  'basket',
  'wreath',
  'chocolate bunny',
  'wreath',
  'basket',
  'chocolate bunny',
  'Finish',
]);
