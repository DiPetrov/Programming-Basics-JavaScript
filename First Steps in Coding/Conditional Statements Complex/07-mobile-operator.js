function mobileOperator(arg1, arg2, arg3, arg4) {
  let contractLength = arg1;
  let contractType = arg2;
  let mobileInternet = arg3;
  let monthsToPay = Number(arg4);

  let monthlyTax = 0;
  let totalPay = 0;

  if (contractLength === 'one') {
    switch (contractType) {
      case 'Small':
        monthlyTax = 9.98;
        break;
      case 'Middle':
        monthlyTax = 18.99;
        break;
      case 'Large':
        monthlyTax = 25.98;
        break;
      case 'ExtraLarge':
        monthlyTax = 35.99;
        break;
      default:
        console.log(`Error`);
    }
  } else if (contractLength === 'two') {
    switch (contractType) {
      case 'Small':
        monthlyTax = 8.58;
        break;
      case 'Middle':
        monthlyTax = 17.09;
        break;
      case 'Large':
        monthlyTax = 23.59;
        break;
      case 'ExtraLarge':
        monthlyTax = 31.79;
        break;
      default:
        console.log(`Error`);
    }
  }

  if (mobileInternet === 'yes') {
    if (monthlyTax <= 10) {
      monthlyTax += 5.5;
    } else if (monthlyTax <= 30) {
      monthlyTax += 4.35;
    } else if (monthlyTax > 30) {
      monthlyTax += 3.85;
    }
  }

  if (contractLength === 'two') {
    monthlyTax *= 0.9625;
  }

  totalPay = monthlyTax * monthsToPay;

  console.log(`${totalPay.toFixed(2)} lv.`);
}

mobileOperator('one', 'Small', 'yes', 10);
mobileOperator('two', 'Large', 'no', 10);
mobileOperator('two', 'ExtraLarge', 'yes', '20');
mobileOperator('two', 'Small', 'yes', '20');
