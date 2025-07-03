function dishwasher(input) {
  let detergent = Number(input[0]) * 750;
  let index = 1;
  let pots = 0;
  let dishes = 0;
  let command = input[index];

  while (command !== 'End') {
    let currentStuff = Number(input[index]);

    if (index % 3 === 0) {
      pots += currentStuff;
      currentStuff *= 15;
    } else {
      dishes += currentStuff;
      currentStuff *= 5;
    }

    if (currentStuff > detergent) {
      console.log(`Not enough detergent, ${currentStuff - detergent} ml. more necessary!`);
      return;
    }

    detergent -= currentStuff;

    index++;
    command = input[index];
    
  }

  console.log(`Detergent was enough!`);
  console.log(`${dishes} dishes and ${pots} pots were washed.`);
  console.log(`Leftover detergent ${detergent} ml.`);

}

dishwasher(['2 ', '53', '65', '55', 'End']);
dishwasher(['1', '10', '15', '10', '12', '13', '30']);
