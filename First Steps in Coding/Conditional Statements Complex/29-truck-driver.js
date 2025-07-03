function truckDriver(arg1, arg2) {
  let season = arg1;
  let kilometers = Number(arg2);

  let salary = 0;

  if (kilometers <= 5000) {
    if (season === 'Spring' || season === 'Autumn') {
      salary = kilometers * 0.75 * 4;
    } else if (season === 'Summer') {
      salary = kilometers * 0.9 * 4;
    } else if (season === 'Winter') {
      salary = kilometers * 1.05 * 4;
    }
  } else if (kilometers > 5000 && kilometers <= 10000) {
    if (season === 'Spring' || season === 'Autumn') {
      salary = kilometers * 0.95 * 4;
    } else if (season === 'Summer') {
      salary = kilometers * 1.1 * 4;
    } else if (season === 'Winter') {
      salary = kilometers * 1.25 * 4;
    }
  } else if (kilometers > 10000 && kilometers <= 20000) {
    if (
      season === 'Spring' ||
      season === 'Autumn' ||
      season === 'Summer' ||
      season === 'Winter'
    ) {
      salary = kilometers * 1.45 * 4;
    }
  }

  salary *= 0.9;

  console.log(salary.toFixed(2));
  
}
truckDriver('Summer', 3455);
