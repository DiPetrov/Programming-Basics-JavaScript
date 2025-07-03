function easterBake(input) {
  let bakesAmount = Number(input.shift());
  let usedFlour = 0;
  let usedSugar = 0;
  let maxUsedSugar = 0;
  let maxUsedFlour = 0;

  for (let i = 1; i <= bakesAmount; i++) {
    let currentSugar = Number(input.shift());
    let currentFlour = Number(input.shift());

    usedSugar += currentSugar;
    usedFlour += currentFlour;

    if (maxUsedSugar <= currentSugar) {
      maxUsedSugar = currentSugar;
    }

    if (maxUsedFlour <= currentFlour) {
      maxUsedFlour = currentFlour;
    }
  }

  console.log(`Sugar: ${Math.ceil(usedSugar / 950)}`);
  console.log(`Flour: ${Math.ceil(usedFlour / 750)}`);
  console.log(
    `Max used flour is ${maxUsedFlour} grams, max used sugar is ${maxUsedSugar} grams.`
  );
}

// easterBake(['3', '400', '350', '250', '300', '450', '380']);
easterBake(['4', '500', '350', '560', '430', '600', '345', '578', '543']);
