function intervaleGames(input) {
  let movesAmount = Number(input[0]);

  let intOne = 0;
  let intTwo = 0;
  let intThree = 0;
  let intFour = 0;
  let intFive = 0;
  let invalidNumber = 0;
  let result = 0;
  let sumNumbers = 0;

  for (let i = 1; i <= movesAmount; i++) {
    let currenNumber = Number(input[i]);

    if (currenNumber >= 0 && currenNumber <= 9) {
      result += currenNumber * 0.2;
      intOne++;
    } else if (currenNumber >= 10 && currenNumber <= 19) {
      result += currenNumber * 0.3;
      intTwo++;
    } else if (currenNumber >= 20 && currenNumber <= 29) {
      result += currenNumber * 0.4;
      intThree++;
    } else if (currenNumber >= 30 && currenNumber <= 39) {
      result += 50;
      intFour++;
    } else if (currenNumber >= 40 && currenNumber <= 50) {
      result += 100;
      intFive++;
    } else if (currenNumber > 50 || currenNumber < 0) {
      result /= 2;
      invalidNumber++;
    }
  }

  console.log(result.toFixed(2));
  console.log(`From 0 to 9: ${((intOne / movesAmount) * 100).toFixed(2)}%`);
  console.log(`From 10 to 19: ${((intTwo / movesAmount) * 100).toFixed(2)}%`);
  console.log(`From 20 to 29: ${((intThree / movesAmount) * 100).toFixed(2)}%`);
  console.log(`From 30 to 39: ${((intFour / movesAmount) * 100).toFixed(2)}%`);
  console.log(`From 40 to 50: ${((intFive / movesAmount) * 100).toFixed(2)}%`);
  console.log(
    `Invalid numbers: ${((invalidNumber / movesAmount) * 100).toFixed(2)}%`
  );


}

intervaleGames([
  '10',
  '43',
  '57',
  '-12',
  '23',
  '12',
  '0',
  '50',
  '40',
  '30',
  '20',
]);
