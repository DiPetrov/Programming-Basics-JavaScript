function cinema([arg1, arg2, arg3]) {
  let projection = arg1.toLowerCase();
  let rows = Number(arg2);
  let columns = Number(arg3);

  let income = 0;
  let full = rows * columns;

  switch (projection) {
    case 'premiere':
      income = full * 12;
      break;
    case 'normal':
      income = full * 7.5;
      break;
    case 'discount':
      income = full * 5;
  }

  console.log(`${income.toFixed(2)} leva.`);
}
cinema(['Premiere', 10, 12]);
cinema(['Premiere', 10, 12]);
cinema(['Premiere', 10, 12]);
