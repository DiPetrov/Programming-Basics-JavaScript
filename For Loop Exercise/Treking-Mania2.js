function trekingMania(input) {
  let n = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 0; i < n; i++) {
    let climbers = Number(input[i + 1]);

    if (climbers <= 5) {
      p1 += climbers;
    } else if (climbers <= 12) {
      p2 += climbers;
    } else if (climbers <= 25) {
      p3 += climbers;
    } else if (climbers <= 40) {
      p4 += climbers;
    } else {
      p5 += climbers;
    }
  }

  let totalClimbers = p1 + p2 + p3 + p4 + p5;
  
  let p1Percent = (p1 / totalClimbers) * 100;
  let p2Percent = (p2 / totalClimbers) * 100;
  let p3Percent = (p3 / totalClimbers) * 100;
  let p4Percent = (p4 / totalClimbers) * 100;
  let p5Percent = (p5 / totalClimbers) * 100;

  console.log(`${p1Percent.toFixed(2)}%`);
  console.log(`${p2Percent.toFixed(2)}%`);
  console.log(`${p3Percent.toFixed(2)}%`);
  console.log(`${p4Percent.toFixed(2)}%`);
  console.log(`${p5Percent.toFixed(2)}%`);
}

trekingMania(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']);
trekingMania(['5', '25', '41', '31', '250', '6']);
