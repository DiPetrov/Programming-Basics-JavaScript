function bills(input) {
  let monthsAmount = Number(input[0]);
  let water = 20 * monthsAmount;
  let internet = 15 * monthsAmount;
  let electricity = 0;
  let others = 0;
  let sum = 0;
  let sumTotal = 0;

  for (let i = 1; i <= monthsAmount; i++) {
    let currentElectricity = Number(input[i]);
    electricity += currentElectricity;
  }

  sum = water + internet + electricity;
  others += sum * 0.2;
  sumTotal = sum + others;
  let sumFinal = (sumTotal + water + internet + electricity) / monthsAmount;

  console.log(`Electricity: ${electricity.toFixed(2)} lv`);
  console.log(`Water: ${water.toFixed(2)} lv`);
  console.log(`Internet: ${internet.toFixed(2)} lv`);
  console.log(`Other: ${sumTotal.toFixed(2)} lv`);
  console.log(`Average: ${sumFinal.toFixed(2)} lv`);
 
  
}
// bills(['5', '68.63', '89.25', '132.53', '93.53', '63.22']);
bills([
  '8',
  '123.54',
  '231.54',
  '140.23',
  '100',
  '122.4',
  '430',
  '178.52',
  '64.2',
]);
