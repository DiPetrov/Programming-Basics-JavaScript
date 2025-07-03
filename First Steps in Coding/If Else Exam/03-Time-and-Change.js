function timePlus15Minutes(a, b) {
  // Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. Часовете се изписват с една или две цифри. Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо.

  let hours = Number(a);
  let minutes = Number(b);

  let totalMinutes = hours * 60 + minutes;
  totalMinutes += 15;

  let newHour = Math.floor(totalMinutes / 60);
  let newMinutes = totalMinutes % 60;

  if (newHour === 24) {
    newHour = 0;
  } else {
  }

  if (newMinutes < 10) {
    console.log(`${newHour}:0${newMinutes}`);
  } else {
    console.log(`${newHour}:${newMinutes}`);
  }
}
timePlus15Minutes()
