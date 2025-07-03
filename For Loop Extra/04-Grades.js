function grades(input) {
  let studentsAmount = Number(input[0]);

  let topStudent = 0;
  let fail = 0;
  let average = 0;
  let good = 0;
  let veryGood = 0;

  let tsTotal = 0;
  let vgTotal = 0;
  let gTotal = 0;
  let fTotal = 0;
  let averageGrade = 0;

  for (let i = 1; i <= studentsAmount; i++) {
    let currentGrade = Number(input[i]);

    if (currentGrade >= 5) {
      topStudent++;
      tsTotal += currentGrade;
    } else if (currentGrade >= 4 && currentGrade <= 4.99) {
      veryGood++;
      vgTotal += currentGrade;
    } else if (currentGrade >= 3 && currentGrade <= 3.99) {
      good++;
      gTotal += currentGrade;
    } else if (currentGrade < 3) {
      fail++;
      fTotal += currentGrade;
    }
  }

  average = topStudent + veryGood + good + fail;
  averageGrade = tsTotal + vgTotal + gTotal + fTotal;
 
  console.log(`Top students: ${((topStudent / average) * 100).toFixed(2)}%`);

  console.log( `Between 4.00 and 4.99: ${((veryGood / average) * 100).toFixed(2)}%`);

  console.log(`Between 3.00 and 3.99: ${((good / average) * 100).toFixed(2)}%`);

  console.log(`Fail: ${((fail / average) * 100).toFixed(2)}%`);

  console.log(`Average: ${(averageGrade / studentsAmount).toFixed(2)}`);


}

// grades([
//   '10',
//   '3.00',
//   '2.99',
//   '5.68',
//   '3.01',
//   '4',
//   '4',
//   '6.00',
//   '4.50',
//   '2.44',
//   '5',
// ]);

grades(['6', '2', '3', '4', '5', '6', '2.2']);
