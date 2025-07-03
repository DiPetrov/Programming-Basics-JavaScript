function ambulance(a, b, c) {
  // Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". Секундите да се изведат с водеща нула (2 à "02", 7 à "07", 35 à "35").

  let playerOneTime = Number(a);
  let playerTwoTime = Number(b);
  let playerThreeTime = Number(c);

  let totalTime = playerOneTime + playerTwoTime + playerThreeTime;
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
ambulance()