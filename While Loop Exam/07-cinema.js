function cinema(input) {
  let capacity = Number(input[0]);

  let index = 1;
  let command = input[index];
  let cinemaIncome = 0;
  let peopleTotal = 0;

  while (command !== 'Movie time!') {
    let currentPeople = Number(input[index]);
    let currentIncome = 0;
    peopleTotal += currentPeople;

    if (peopleTotal > capacity) {
      console.log(`The cinema is full.`);
      console.log(`Cinema income - ${cinemaIncome} lv.`);
      return;
    }

    if (currentPeople % 3 === 0) {
      currentIncome = currentPeople * 5;
      currentIncome -= 5;
    } else {
      currentIncome = currentPeople * 5;
    }

    cinemaIncome += currentIncome;

    index++;
    command = input[index];
  }

  console.log(`There are ${capacity - peopleTotal} seats left in the cinema.`);
  console.log(`Cinema income - ${cinemaIncome} lv.`);
}
cinema(['60', '10', '6', '3', '20', '15', 'Movie time!']);
cinema(['50', '15', '10', '10', '15', '5']);
cinema([
  '100',
  '10',
  '10',
  '10',
  '10',
  '10',
  '10',
  '10',
  '10',
  '10',
  '10',
  'Movie time!',
]);
