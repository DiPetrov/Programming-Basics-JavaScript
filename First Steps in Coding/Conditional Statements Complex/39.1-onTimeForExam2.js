function onTimeForExam(arg1, arg2, arg3, arg4) {
  let examHour = Number(arg1);
  let exaMin = Number(arg2);
  let arrivalHour = Number(arg3);
  let arrivalMin = Number(arg4);

  let totalExamTime = examHour * 60 + exaMin;
  let totalArrivalTime = arrivalHour * 60 + arrivalMin;

  let totalDiffTime = Math.abs(totalExamTime - totalArrivalTime);
  let diffHour = Math.floor(totalDiffTime / 60);
  let diffMin = totalDiffTime % 60;

  if (totalExamTime === totalArrivalTime) {
    console.log('On time');
  } else if (totalExamTime < totalArrivalTime) {
    console.log('Late');

    if (totalDiffTime < 60) {
      console.log(`${totalDiffTime} minutes after the start`);
    } else {
      if (diffMin < 10) {
        console.log(`${diffHour}:0${diffMin} hours after the start`);
      } else {
        console.log(`${diffHour}:${diffMin} hours after the start`);
      }
    }
  } else {
    if (totalDiffTime <= 30) {
      console.log('On time');
      console.log(`${totalDiffTime} minutes before the start`);
    } else {
      console.log('Early');
      if (totalDiffTime < 60) {
        console.log(`${totalDiffTime} minutes before the start`);
      } else {
        if (diffMin < 10) {
          console.log(`${diffHour}:0${diffMin} hours before the start`);
        } else {
          console.log(`${diffHour}:${diffMin} hours before the start`);
        }
      }
    }
  }
}
// onTimeForExam(10, 0, 10, 0);
// onTimeForExam(9, 30, 9, 50);
// onTimeForExam(9, 0, 8, 30);
// onTimeForExam(16, 0, 15, 0);
// onTimeForExam(9, 0, 10, 30);
// onTimeForExam(14, 0, 13, 55);
// onTimeForExam(10, 0, 10, 0);
// onTimeForExam(11, 30, 10, 55);
onTimeForExam(11, 30, 12, 29);

