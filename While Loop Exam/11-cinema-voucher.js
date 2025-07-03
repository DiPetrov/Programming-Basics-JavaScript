function cinemaVoucher(input) {
  /* 1. Колко покупки може да направи Любо с ваучера
      2. Ако името на покупката съдържа повече от 8 символа, то тя е билет за филм,а цената представлява сумата от ASCI символите от първите й два     символа
      3. Ако името съдъжда 8 или по-малко символа, то нейната цена е равна на стойността на първия ASCI символ в името. 
      4. Програмата да работи до команда "End" или не въведе покупка, чиято стойност е по-голяма от тази на вазчера*/

  let voucherPrice = Number(input[0]);
  let index = 1;
  let command = input[index];
  let purchasedTickets = 0;
  let purchasedOther = 0;
  let asci1 = '';
  let asci2 = '';
  let price = 0;

  while (command !== 'End') {
    let currentPurchase = String(input[index]);

    if (currentPurchase.length > 8) {
      asci1 = currentPurchase.charCodeAt(0);
      asci2 = currentPurchase.charCodeAt(1);
      price = asci1 + asci2;
      if (price > voucherPrice) {
        console.log(`${purchasedTickets}`);
        console.log(`${purchasedOther}`);
        return;
      } else {
       purchasedTickets++;
      }
      
    } else if (currentPurchase.length <= 8) {
      asci1 = currentPurchase.charCodeAt(0);
      price = asci1;
      if (price > voucherPrice) {
        console.log(`${purchasedTickets}`);
        console.log(`${purchasedOther}`);
        return; 
    } else {
     purchasedOther++;
    }
    }
    voucherPrice -= price;

    index++;
    command = input[index];
  
   }
  console.log(`${purchasedTickets}`);
  console.log(`${purchasedOther}`);
}

cinemaVoucher([
  '1500',
  'Avengers: Endgame',
  'Bohemian Rhapsody',
  'Deadpool 2',
  'End',
]);

// cinemaVoucher(['300', 'Captain Marvel', 'popcorn', 'Pepsi']);
