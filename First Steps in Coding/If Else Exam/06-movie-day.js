function movieDay(timeShooting, scenesAmount, sceneLength) {
  let preparation = timeShooting * 0.15;
  let sceneTime = scenesAmount * sceneLength;
  let totalTime = preparation + sceneTime;


  if (timeShooting >= totalTime) {
    console.log(
      `You managed to finish the movie on time! You have ${Math.round(
        timeShooting - totalTime
      )} minutes left!`
    );
  } else {
    console.log(
      `Time is up! To complete the movie you need ${Math.trunc(
        totalTime - timeShooting
      )} minutes.`
    );
  }
}
movieDay(120, 10, 11);
