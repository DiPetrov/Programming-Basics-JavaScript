function footballLeague(input) {
  let stadiumCapacity = Number(input[0]);
  let fansAmount = Number(input[1]);

  let sectorA = 0;
  let sectorB = 0;
  let sectorV = 0;
  let sectorG = 0;
  let sumFans = 0;

  for (let i = 2; i <= input.length; i++) {
    let currentFan = input[i];

    if (currentFan === 'A') {
      sectorA++;
    } else if (currentFan === 'B') {
      sectorB++;
    } else if (currentFan === 'V') {
      sectorV++;
    } else if (currentFan === 'G') {
      sectorG++;
    }
  }

  sumFans = sectorA + sectorB + sectorV + sectorG;
  console.log(`${((sectorA / fansAmount) * 100).toFixed(2)}%`);
  console.log(`${((sectorB / fansAmount) * 100).toFixed(2)}%`);
  console.log(`${((sectorV / fansAmount) * 100).toFixed(2)}%`);
  console.log(`${((sectorG / fansAmount) * 100).toFixed(2)}%`);
  console.log(`${((sumFans / stadiumCapacity) * 100).toFixed(2)}%`);
}

// footballLeague(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B']);

footballLeague([
  '93',
  '16',
  'A',
  'V',
  'G',
  'G',
  'B',
  'B',
  'G',
  'B',
  'A',
  'B',
  'B',
  'B',
  'A',
  'B',
  'B',
  'A',
]);
