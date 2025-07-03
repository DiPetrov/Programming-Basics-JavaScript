function logistics(input) {
  let cargoAmount = Number(input[0]);

  let cargoSum = 0;
  let cargoPrice = 0;
  let microbus = 0;
  let truck = 0;
  let train = 0;
  let microbusPrice = 0;
  let truckPrice = 0;
  let trainPrice = 0;

  for (i = 1; i <= cargoAmount; i++) {
    let currentCargo = Number(input[i]);

    if (currentCargo <= 3) {
      microbus += currentCargo;
    } else if (currentCargo >= 4 && currentCargo <= 11) {
      truck += currentCargo;
    } else if (currentCargo >= 12) {
      train += currentCargo;
    }
  }

  microbusPrice = microbus * 200;
  truckPrice = truck * 175;
  trainPrice = train * 120;
  
  cargoSum = microbus + truck + train;
  cargoPrice = (microbusPrice + truckPrice + trainPrice) / cargoSum;

  console.log(cargoPrice.toFixed(2));
  console.log(`${((microbus / cargoSum) * 100).toFixed(2)}%`);
  console.log(`${((truck / cargoSum) * 100).toFixed(2)}%`);
  console.log(`${((train / cargoSum) * 100).toFixed(2)}%`);

}

// logistics(['4', '1', '5', '16', '3']);
logistics(['5', '2', '10', '20', '1', '7']);
