function skeleton(minutes, seconds, trackLength, timesPer100Meters) {
  // Да се изчисли дали състезателят ще подобри рекорда.
  // всеки 120 метра времето намаля с 2.5 секунди //

  let recordInSeconds = 60 * minutes + seconds;
  let timeDelays = trackLength / 120;
  let timeLost = timeDelays * 2.5;

  let marinTime = (trackLength / 100) * timesPer100Meters - timeLost;


  if (marinTime <= recordInSeconds) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${marinTime.toFixed(3)}.`);
  } else {
    console.log(
      `No, Marin failed! He was ${(marinTime - recordInSeconds).toFixed(
        3
      )} second slower.`
    );
  }
}

skeleton(2,12,1200,10);
