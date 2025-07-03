function flowers(arg1, arg2, arg3, arg4, arg5) {
  let hrizantemiAmount = Number(arg1);
  let rosesAmount = Number(arg2);
  let tulipsAmount = Number(arg3);
  let season = arg4;
  let holiday = arg5;

  let totalPrice = 0;

  if (season === 'Spring' || season === 'Summer') {
    switch (holiday) {
      case 'Y':
        totalPrice +=
          (hrizantemiAmount * 2 + rosesAmount * 4.1 + tulipsAmount * 2.5) * 1.15;
        if (season === 'Spring' && tulipsAmount > 7) {
          totalPrice *= 0.95;
        }
        break;
      case 'N':
        totalPrice +=
          hrizantemiAmount * 2 + rosesAmount * 4.1 + tulipsAmount * 2.5;
        if (season === 'Spring' && tulipsAmount > 7) {
          totalPrice *= 0.95;
        }
        break;
      default:
        console.log(`Error`);
    }
  } else if (season === 'Autumn' || season === 'Winter') {
    switch (holiday) {
      case 'Y':
        totalPrice +=
          (hrizantemiAmount * 3.75 + rosesAmount * 4.5 + tulipsAmount * 4.15) * 1.15;
        if (season === 'Winter' && rosesAmount >= 10) {
          totalPrice *= 0.9;
        }
        break;
      case 'N':
        totalPrice +=
          hrizantemiAmount * 3.75 + rosesAmount * 4.5 + tulipsAmount * 4.15;
        if (season === 'Winter' && rosesAmount >= 10) {
          totalPrice *= 0.9;
        }
        break;
      default:
        console.log(`Error`);
    }
  }

  if (hrizantemiAmount + rosesAmount + tulipsAmount > 20) {
    totalPrice *= 0.8;
  }

  totalPrice += 2;

  console.log(`${totalPrice.toFixed(2)}`);
}
flowers(2, 4, 8, 'Spring', 'Y');
flowers(3, 10, 9, 'Winter', 'N');
flowers(10, 10, 10, 'Autumn', 'N');
