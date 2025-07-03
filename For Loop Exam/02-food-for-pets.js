// function petFood(input) {
  // let days = Number(input.shift());
  // let foodTotal = Number(input.shift());
  // let dogFoodTotal = 0;
  // let catFoodTotal = 0;
  // let cookies = 0;
  // let dayCounter = 0;

  // for (let i = 1; i <= days; i++) {
  //   let currentDogFood = Number(input.shift());
  //   let currentCatFood = Number(input.shift());
  //   dogFoodTotal += currentDogFood;
  //   catFoodTotal += currentCatFood;

  //   dayCounter++;

  //    if (dayCounter % 3 === 0) {
  //      cookies += (currentCatFood + currentDogFood) * 0.1;
  //    }
  // }

  // console.log(`Total eaten biscuits: ${Math.round(cookies)}gr.`);
  // console.log(`${(((dogFoodTotal + catFoodTotal) / foodTotal) * 100).toFixed(2)}% of the food has been eaten.`);
  // console.log(`${((dogFoodTotal / (dogFoodTotal + catFoodTotal)) * 100).toFixed(2)}% eaten from the dog.`);
  // console.log(`${((catFoodTotal / (dogFoodTotal + catFoodTotal)) * 100).toFixed(2)}% eaten from the cat.`);

  function petFood(input) {
    let days = Number(input[0]);
    let totalFoot = Number(input[1]);
    let sumDogFoot = 0;
    let sumCatFoot = 0;
    let totalEatenFoot = 0;
    let totalPercent = 0;
    let sumBisscuits = 0;
    let totalDogPercents = 0;
    let totalCatPercents = 0;
    let counter = 2;

    for (let i = 1; i <= days; i++) {
      let dogFoot = Number(input[counter++]);
      let catFoot = Number(input[counter++]);

      sumDogFoot += dogFoot;
      sumCatFoot += catFoot;

      if (i % 3 == 0) {
        let currentSumBisscuits = (dogFoot + catFoot) * 0.1;
        sumBisscuits += currentSumBisscuits;
      }
    }

    totalEatenFoot = sumDogFoot + sumCatFoot;
    totalDogPercents = (sumDogFoot / totalEatenFoot) * 100;
    totalCatPercents = (sumCatFoot / totalEatenFoot) * 100;
    totalPercent = (totalEatenFoot / totalFoot) * 100;

    console.log(`Total eaten biscuits: ${Math.round(sumBisscuits)}gr.`);
    console.log(`${totalPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${totalDogPercents.toFixed(2)}% eaten from the dog.`);
    console.log(`${totalCatPercents.toFixed(2)}% eaten from the cat.`);
  }


petFood(['3', '1000', '300', '20', '100', '30', '110', '40']);

// petFood(['3', '500', '100', '30', '110', '25', '120', '35']);
