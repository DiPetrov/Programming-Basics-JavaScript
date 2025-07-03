function onTimeForExam(arg1, arg2, arg3, arg4) {
  let examHour = Number(arg1);
  let examMinute = Number(arg2);
  let hourArrival = Number(arg3);
  let minuteArrival = Number(arg4);

  let examTimeInMinutes = examHour * 60 + examMinute;
  let examArrivalInMinutes = hourArrival * 60 + minuteArrival;
  let difference = Math.abs(examTimeInMinutes - examArrivalInMinutes);

  let hour = 0;
  let minutes = 0;

  if (examTimeInMinutes < examArrivalInMinutes) {
    console.log(`Late`);
    if (difference < 60) {
      if (difference < 10) {
        console.log(`0${difference} minutes after the start`);
      } else if (difference > 10 && difference < 60) {
        console.log(`${difference} minutes after the start`);
      }
    } else if (difference >= 60) {
      hour = Math.trunc(difference / 60);
      minutes = difference % 60;
      if (minutes < 10) {
        console.log(`${hour}:0${minutes} hours after the start`);
      } else if (minutes >= 10) {
        console.log(`${hour}:${minutes} hours after the start`);
      }
    }
  } else if (examTimeInMinutes >= examArrivalInMinutes) {
    if (examTimeInMinutes === examArrivalInMinutes) {
      console.log(`On time`);
    } else if (difference <= 30) {
      console.log(`On time`);
      console.log(`${difference} minutes before the start`);
    } else if (difference > 30 && difference < 60) {
      console.log(`Early`);
      minutes = difference % 60;
      if (minutes < 10) {
        console.log(`0${minutes} minutes before the start`);
      } else if (minutes >= 10) {
        console.log(`${minutes} minutes before the start`);
      }
    } else if (difference >= 60) {
      console.log(`Early`);
      hour = Math.trunc(difference / 60);
      minutes = difference % 60;
      if (minutes < 10) {
        console.log(`${hour}:0${minutes} hours before the start`);
      } else if (minutes >= 10) {
        console.log(`${hour}:${minutes} hours before the start`);
      }
    }
  }
}
// onTimeForExam(9, 30, 9, 50);
// onTimeForExam(11, 30, 12, 29);
// onTimeForExam(9, 0, 10, 30);
// onTimeForExam(9, 0, 8, 30);
// onTimeForExam(14, 0, 13, 55);
// onTimeForExam(10, 0, 10, 0);
// onTimeForExam(16, 0, 15, 0);
// onTimeForExam(11, 30, 8, 12);
onTimeForExam(11, 30, 10, 55);
