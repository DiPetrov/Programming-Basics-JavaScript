function aluminiumJoinery(arg1, arg2, arg3) {
  let joineryAmount = Number(arg1);
  let joineryType = arg2;
  let delivery = arg3;

  let orderValue = 0;

  if (joineryAmount > 10) {
    switch (joineryType) {
      case '90X130':
        if (joineryAmount > 30 && joineryAmount <= 60) {
          orderValue += joineryAmount * 110 * 0.95;
        } else if (joineryAmount > 60) {
          orderValue += joineryAmount * 110 * 0.92;
        } else {
          orderValue += joineryAmount * 110;
        }
        break;

      case '100X150':
        if (joineryAmount > 40 && joineryAmount <= 80) {
          orderValue += joineryAmount * 140 * 0.94;
        } else if (joineryAmount > 80) {
          orderValue += joineryAmount * 140 * 0.9;
        } else {
          orderValue += joineryAmount * 140;
        }
        break;

      case '130X180':
        if (joineryAmount > 20 && joineryAmount <= 50) {
          orderValue += joineryAmount * 190 * 0.93;
        } else if (joineryAmount > 50) {
          orderValue += joineryAmount * 190 * 0.88;
        } else {
          orderValue += joineryAmount * 190;
        }
        break;

      case '200X300':
        if (joineryAmount > 25 && joineryAmount <= 50) {
          orderValue += joineryAmount * 250 * 0.91;
        } else if (joineryAmount > 50) {
          orderValue += joineryAmount * 250 * 0.86;
        } else {
          orderValue += joineryAmount * 250;
        }
    }

    if (delivery === 'With delivery') {
      orderValue += 60;
    }

    if (joineryAmount > 99) {
      orderValue *= 0.96;
    }

    console.log(`${orderValue.toFixed(2)} BGN`);
  } else {
    console.log(`Invalid order`);
  }
}
aluminiumJoinery(40, '90X130', 'Without delivery');
aluminiumJoinery(105, '100X150', 'With delivery');
aluminiumJoinery(2, '130X180', 'With delivery');
