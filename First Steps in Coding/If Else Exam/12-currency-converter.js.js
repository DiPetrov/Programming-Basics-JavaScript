function test(input) {
  let money = Number(input[0]);
  let currency1 = input[1];
  let currency2 = input[2];


   if (currency1 === "USD") {
    money *= 1.79549;

    switch(currency2) {
     case "BGN":
      money *= 1;
      break;
     case "EUR":
      money /= 1.95583;
      break;
     case "GBP":
      money /= 2.53405;
      break;
      default: console.log(`Error`);
    }
   } else if (currency1 === "EUR") {
    money *= 1.95583;

    switch (currency2) {
      case 'BGN':
        money *= 1;
        break;
      case 'USD':
        money *= 1.79549;
        break;
      case 'GBP':
        money /= 2.53405;
        break;
      default:
        console.log(`Error`);
    }
   } else if (currency1 === "GBP") {
    money *= 2.53405;

    switch(currency2) {
     case "BGN":
      money *= 1;
      break;
     case "EUR":
      money /= 1.95583;
      break;
     case "USD":
      money /= 1.79549;
      break;
      default: console.log(`Error`);
    }
   } else if (currency1 === "BGN") {
    money *= 1;

    switch(currency2) {
     case "USD":
      money *= 1.79549;
      break;
     case "EUR":
      money /= 1.95583;
      break;
     case "GBP":
      money * 2.53405;
      break;
      default: console.log(`Error`);
      
    }
   }

  console.log(money.toFixed(2));

}

test(['20', 'USD', 'BGN']);
test(['100', 'BGN', 'EUR']);
test(['12.35', 'EUR', 'GBP']);
test(['150.35', 'USD', 'EUR']);


