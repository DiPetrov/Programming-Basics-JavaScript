function tradeCommissions([arg1, arg2]) {
  let city = arg1;
  let sales = Number(arg2);

  let price = 0;

  if (city === 'Sofia') {
    if (sales >= 0 && sales <= 500) {
      price = sales * 0.05;
      console.log(price.toFixed(2));
    } else if (sales > 500 && sales <= 1000) {
      price = sales * 0.07;
      console.log(price.toFixed(2));
    } else if (sales > 1000 && sales <= 10000) {
      price = sales * 0.08;
      console.log(price.toFixed(2));
    } else if (sales > 10000) {
      price = sales * 0.12;
      console.log(price.toFixed(2));
    } else {
      console.log(`error`);
    }
  } else if (city === 'Varna') {
    if (sales >= 0 && sales <= 500) {
      price = sales * 0.045;
      console.log(price.toFixed(2));
    } else if (sales > 500 && sales <= 1000) {
      price = sales * 0.075;
      console.log(price.toFixed(2));
    } else if (sales > 1000 && sales <= 10000) {
      price = sales * 0.1;
      console.log(price.toFixed(2));
    } else if (sales > 10000) {
      price = sales * 0.13;
      console.log(price.toFixed(2));
    } else {
      console.log(`error`);
    }
  } else if (city === 'Plovdiv') {
    if (sales >= 0 && sales <= 500) {
      price = sales * 0.055;
      console.log(price.toFixed(2));
    } else if (sales > 500 && sales <= 1000) {
      price = sales * 0.08;
      console.log(price.toFixed(2));
    } else if (sales > 1000 && sales <= 10000) {
      price = sales * 0.12;
      console.log(price.toFixed(2));
    } else if (sales > 10000) {
      price = sales * 0.145;
      console.log(price.toFixed(2));
    } else {
      console.log(`error`);
    }
  } else {
    console.log(`error`);
  }
}
tradeCommissions(['Sofia', 1500]);
// tradeCommissions(['Plovdiv', 499.99]);
// tradeCommissions(['Kaspichan', -50]);
