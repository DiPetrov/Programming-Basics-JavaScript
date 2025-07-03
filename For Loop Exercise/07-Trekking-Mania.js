function trekingMania(input) {
  // TO DO:
  // 1. Get Input
  // 2. Define new variables
  // 3. Write loop
  //  3.1 Calculate number of people for every group
  //  3.2 Turn this number into percent
  //  3.3 Define groups based on Number => Percent
  // 4. Print result

  let group1 = 0;
  let group2 = 0;
  let group3 = 0;
  let group4 = 0;
  let group5 = 0;

  let groupsAmount = Number(input[0]);

  for (let i = 0; i < groupsAmount; i++) {
    let peopleAmount = Number(input[i + 1]);

    if (peopleAmount <= 5) {
      group1 += peopleAmount;
    } else if (peopleAmount >= 6 && peopleAmount <= 12) {
      group2 += peopleAmount;
    } else if (peopleAmount >= 13 && peopleAmount <= 25) {
      group3 += peopleAmount;
    } else if (peopleAmount >= 26 && peopleAmount <= 40) {
      group4 += peopleAmount;
    } else if (peopleAmount >= 41) {
      group5 += peopleAmount;
    }
  }

  let totalClimbers = group1 + group2 + group3 + group4 + group5;

  let p1Percent = (group1 / totalClimbers) * 100;
  let p2Percent = (group2 / totalClimbers) * 100;
  let p3Percent = (group3 / totalClimbers) * 100;
  let p4Percent = (group4 / totalClimbers) * 100;
  let p5Percent = (group5 / totalClimbers) * 100;

  console.log(`${p1Percent.toFixed(2)}%`);
  console.log(`${p2Percent.toFixed(2)}%`);
  console.log(`${p3Percent.toFixed(2)}%`);
  console.log(`${p4Percent.toFixed(2)}%`);
  console.log(`${p5Percent.toFixed(2)}%`);
}

trekingMania(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']);
// trekingMania(['5', '25', '41', '31', '250', '6']);
