function balls(input) {
  let ballsNumber = Number(input[0]);

  let currentPoints = 0;
  let redBalls = 0;
  let orangeBalls = 0;
  let yellowBalls = 0;
  let whiteBalls = 0;
  let otherBalls = 0;
  let dividesFromBlackBalls = 0;

  for (i = 1; i <= ballsNumber; i++) {
    let currentColor = input[i];

    if (currentColor === 'red') {
      redBalls++;
      currentPoints += 5;
    } else if (currentColor === 'orange') {
      orangeBalls++;
      currentPoints += 10;
    } else if (currentColor === 'yellow') {
      yellowBalls++;
      currentPoints += 15;
    } else if (currentColor === 'white') {
      whiteBalls++;
      currentPoints += 20;
    } else if (currentColor === 'black') {
      dividesFromBlackBalls++;
      currentPoints = Math.floor((currentPoints /= 2));
    } else {
      otherBalls++;
    }
  }

  console.log(`Total points: ${currentPoints}`);
  console.log(`Red balls: ${redBalls}`);
  console.log(`Orange balls: ${orangeBalls}`);
  console.log(`Yellow balls: ${yellowBalls}`);
  console.log(`White balls: ${whiteBalls}`);
  console.log(`Other colors picked: ${otherBalls}`);
  console.log(`Divides from black balls: ${dividesFromBlackBalls}`);
}

// balls(['3', 'white', 'black', 'pink']);
balls(['5', 'red', 'red', 'ddd', 'ddd', 'ddd']);
