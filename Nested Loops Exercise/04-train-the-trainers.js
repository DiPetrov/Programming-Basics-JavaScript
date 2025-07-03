function trainTheTrainers(input) {
  let judgeCount = Number(input[0]);
  let presentationCount = 0;
  let totalGradeSum = 0;

  let index = 1;
  let command = input[index];

  while (command !== 'Finish') {
    let presentationName = command;
    let presentationGradeSum = 0;

    for (let currentJudge = 1; currentJudge <= judgeCount; currentJudge++) {
      index++;
      let currentGrade = Number(input[index]);
      presentationGradeSum += currentGrade;
    }

    let avgPresentationGrade = presentationGradeSum / judgeCount;
    console.log(`${presentationName} - ${avgPresentationGrade.toFixed(2)}.`);

    presentationCount++;
    totalGradeSum += avgPresentationGrade;

    index++;
    command = input[index];
  }

  let totalAvgGrade = totalGradeSum / presentationCount;
  console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}

trainTheTrainers([
  '2',

  'While-Loop',

  '6.00',

  '5.50',

  'For-Loop',

  '5.84',

  '5.66',

  'Finish',
]);
