function fitnessCenter(input) {

  let visitorsNumber = Number(input[0]);

  let back = 0;
  let chest = 0;
  let legs = 0;
  let abs = 0;
  let proteinShake = 0;
  let proteinBar = 0;

  for (let i = 1; i <= visitorsNumber; i++) {
    let currentVisitor = input[i];

    switch (currentVisitor) {
      case 'Back':
        back += 1;
        break;
      case 'Chest':
        chest += 1;
        break;
      case 'Legs':
        legs += 1;
        break;
      case 'Abs':
        abs += 1;
        break;
      case 'Protein shake':
        proteinShake += 1;
        break;
      case 'Protein bar':
        proteinBar += 1;
        break;
      default:
        console.log(`Error`);
    }
  }

  console.log(`${back} - back`);
  console.log(`${chest} - chest`);
  console.log(`${legs} - legs`);
  console.log(`${abs} - abs`);
  console.log(`${proteinShake} - protein shake`);
  console.log(`${proteinBar} - protein bar`);
  console.log(`${(((abs + chest + back + legs) / visitorsNumber) * 100).toFixed(2)}% - work out`);
  console.log(`${(((proteinBar + proteinShake) / visitorsNumber) * 100).toFixed(2)}% - protein`);
}

// fitnessCenter([
//   '10',
//   'Back',
//   'Chest',
//   'Legs',
//   'Abs',
//   'Protein shake',
//   'Protein bar',
//   'Protein shake',
//   'Protein bar',
//   'Legs',
//   'Abs',
// ]);

fitnessCenter([
  '7',
  'Chest',
  'Back',
  'Legs',
  'Legs',
  'Abs',
  'Protein shake',
  'Protein bar',
]);

