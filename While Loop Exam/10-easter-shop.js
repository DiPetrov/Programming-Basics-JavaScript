function easter(input) {
  let eggsAmount = Number(input[0]);
  let index = 1;

  let eggsSold = 0;
  let command = input[index];
  let eggSold = 0;

  index++;

  while (command !== 'Close') {
    let action = command;
    let currentEggs = Number(input[index]);

    if (action === 'Buy') {
      if (currentEggs > eggsAmount) {
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${eggsAmount}.`);
        return;
      }
      eggsAmount -= currentEggs;
      eggSold += currentEggs;
    } else if (action === 'Fill') {
      eggsAmount += currentEggs;
    }

    index++;
    command = input[index];
    index++;
  }

  console.log(`Store is closed!`);
  console.log(`${eggSold} eggs sold.`);
}
easter(['20', 'Fill', '30', 'Buy', '15', 'Buy', '20', 'Close']);
