function requiredReading(numberOfPages, pagesPerHour, totalDays) {
  let totalHours = numberOfPages / pagesPerHour;

  let hoursPerDay = totalHours / totalDays;

  console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
