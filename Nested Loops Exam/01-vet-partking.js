function vetParking(arg1, arg2) {
  let days = Number(arg1);
  let hours = Number(arg2);
  let pricePerHour = 0;
  let totalCost = 0;

  for (let i = 1; i <= days; i++) {
    let currentDay = Number(i);
    let costPerDay = 0;
    for (let x = 1; x <= hours; x++) {
      let currentHour = Number(x);

      if (currentDay % 2 === 0) {
        if (currentHour % 2 !== 0) {
          pricePerHour = 2.5;
        } else {
          pricePerHour = 1;
        }
      } else if (currentDay % 2 !== 0) {
        if (currentHour % 2 === 0) {
          pricePerHour = 1.25;
        } else {
          pricePerHour = 1;
        }
      } else {
        pricePerHour = 1;
      }
      costPerDay += pricePerHour;
    }
    totalCost += costPerDay;
    console.log(`Day: ${currentDay} - ${costPerDay.toFixed(2)} leva`);
  }
  console.log(`Total: ${totalCost.toFixed(2)} leva`);
}
vetParking(2, 5);
vetParking(5, 2);
