function schoolCamp(arg1, arg2, arg3, arg4) {
  let season = arg1;
  let group = arg2;
  let studentAmount = Number(arg3);
  let nights = Number(arg4);

  let sportType = '';
  let price = 0;

  if (season === 'Winter') {
    if (group === 'boys') {
      price = nights * 9.6 * studentAmount;
      sportType = 'Judo';
    } else if (group === 'girls') {
      price = nights * 9.6 * studentAmount;
      sportType = 'Gymnastics';
    } else if (group === 'mixed') {
      price = nights * 10 * studentAmount;
      sportType = 'Ski';
    }
  } else if (season === 'Spring') {
    if (group === 'boys') {
      price = nights * 7.2 * studentAmount;
      sportType = 'Tennis';
    } else if (group === 'girls') {
      price = nights * 7.2 * studentAmount;
      sportType = 'Athletics';
    } else if (group === 'mixed') {
      price = nights * 9.5 * studentAmount;
      sportType = 'Cycling';
    }
  } else if (season === 'Summer') {
    if (group === 'boys') {
      price = nights * 15 * studentAmount;
      sportType = 'Football';
    } else if (group === 'girls') {
      price = nights * 15 * studentAmount;
      sportType = 'Volleyball';
    } else if (group === 'mixed') {
      price = nights * 20 * studentAmount;
      sportType = 'Swimming';
    }
  }

  if (studentAmount >= 50) {
    price *= 0.5;
  } else if (studentAmount >= 20 && studentAmount < 50) {
    price *= 0.85;
  } else if (studentAmount >= 10 && studentAmount < 20) {
    price *= 0.95;
  }

  console.log(`${sportType} ${price.toFixed(2)} lv.`);
}
schoolCamp('Spring', 'girls', 20, 7);
