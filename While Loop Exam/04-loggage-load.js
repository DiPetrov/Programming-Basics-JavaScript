function suitcase(input) {
  let truncSpace = Number(input[0]);
  let index = 1;
  let command = input[index];
  let suitcasesLoaded = 0;

  while (command !== 'End') {
    let currentSuitcaseSize = Number(input[index]);

    if (index % 3 === 0) {
      currentSuitcaseSize *= 1.1;
    }

    if (truncSpace <= currentSuitcaseSize) {
      console.log(`No more space!`);
      console.log(`Statistic: ${suitcasesLoaded} suitcases loaded.`);
      return;
    }

    suitcasesLoaded++;
    truncSpace -= currentSuitcaseSize;

    index++;
    command = input[index];
  }

  console.log(`Congratulations! All suitcases are loaded!`);
  console.log(`Statistic: ${suitcasesLoaded} suitcases loaded.`);
}

suitcase(['550', '100', '252', '72', 'End']);
suitcase(['700.5', '180', '340.6', '126', '220']);
suitcase(['1200.2', '260', '380.5', '125.6', '305', 'End']);
