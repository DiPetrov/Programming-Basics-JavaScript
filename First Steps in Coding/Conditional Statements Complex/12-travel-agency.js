function travelAgency(arg1, arg2, arg3, arg4) {
  let city = arg1;
  let package = arg2;
  let discount = arg3;
  let days = Number(arg4);

  let currentPrice = 0;
  let totalPrice = 0;

  if (days > 1) {
    if (days > 7) {
      days -= 1;
    }

    switch (city) {
      case 'Borovets':
        switch (package) {
          case 'withEquipment':
            if (discount === 'yes') {
              currentPrice = 100 - 100 * 0.1;
              totalPrice = days * currentPrice;
            } else {
              totalPrice += days * 100;
            }
            console.log(
              `The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`
            );

            break;
          case 'noEquipment':
            if (discount === 'yes') {
              currentPrice = 80 - 80 * 0.05;
              totalPrice = days * currentPrice;
            } else {
              totalPrice += days * 80;
            }
            console.log(
              `The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`
            );

            break;
          default:
            console.log(`Invalid input!`);
        }
        break;

      case 'Bansko':
        switch (package) {
          case 'withEquipment':
            if (discount === 'yes') {
              currentPrice = 100 - 100 * 0.1;
              totalPrice = days * currentPrice;
            } else {
              totalPrice += days * 100;
            }
            console.log(
              `The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`
            );

            break;
          case 'noEquipment':
            if (discount === 'yes') {
              currentPrice = 80 - 80 * 0.05;
              totalPrice = days * currentPrice;
            } else {
              totalPrice += days * 80;
            }
            console.log(
              `The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`
            );

            break;
          default:
            console.log(`Invalid input!`);
        }
        break;

      case 'Varna':
        switch (package) {
          case 'withBreakfast':
            if (discount === 'yes') {
              currentPrice = 130 - 130 * 0.12;
              totalPrice = days * currentPrice;
            } else {
              totalPrice += days * 130;
            }
            console.log(
              `The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`
            );

            break;
          case 'noBreakfast':
            if (discount === 'yes') {
              currentPrice = 100 - 100 * 0.7;
              totalPrice = days * currentPrice;
            } else {
              totalPrice += days * 100;
            }
            console.log(
              `The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`
            );

            break;
          default:
            console.log(`Invalid input!`);
        }
        break;

      case 'Burgas':
        switch (package) {
          case 'withBreakfast':
            if (discount === 'yes') {
              currentPrice = 130 - 130 * 0.12;
              totalPrice = days * currentPrice;
            } else {
              totalPrice += days * 130;
            }
            console.log(
              `The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`
            );

            break;
          case 'noBreakfast':
            if (discount === 'yes') {
              currentPrice = 100 - 100 * 0.7;
              totalPrice = days * currentPrice;
            } else {
              totalPrice += days * 100;
            }
            console.log(
              `The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`
            );

            break;
          default:
            console.log(`Invalid input!`);
        }
        break;
      default:
        console.log(`Invalid input!`);
    }
  } else {
    console.log(`Days must be positive number!`);
  }
}

travelAgency('Borovets', 'noEquipment', 'yes', 6);
travelAgency('Bansko', 'withEquipment', 'no', 2);
travelAgency('Varna', 'withBreakfast', 'yes', 5);
travelAgency('Burgas', 'noBreakfast', 'no', 4);
travelAgency('Varna', 'withBreakfast', 'no', 0);
travelAgency('Gabrovo', 'noBreakfast', 'no', 3);
