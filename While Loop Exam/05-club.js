function club(input) {
  let targetRevenue = Number(input[0]);
  let index = 1;
  let command = input[index];
  let clubIncome = 0;

  index++;

  while (command !== 'Party!') {
    let currentCocktail = command;
    let cocktailsAmount = Number(input[index]);
    let currentPrice = currentCocktail.length * cocktailsAmount;

    if (currentPrice % 2 !== 0) {
      currentPrice *= 0.75;
    }

    clubIncome += currentPrice;

    if (clubIncome >= targetRevenue) {
      console.log(`Target acquired.`);
      console.log(`Club income - ${clubIncome.toFixed(2)} leva.`);
      return;
    }

    index++;
    command = input[index];
    index++;
  }

  console.log(`We need ${(targetRevenue - clubIncome).toFixed(2)} leva more.`);
  console.log(`Club income - ${clubIncome.toFixed(2)} leva.`);
}
// club(['500', 'Bellini', '6', 'Bamboo', '7', 'Party!']);
club(['100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10']);
