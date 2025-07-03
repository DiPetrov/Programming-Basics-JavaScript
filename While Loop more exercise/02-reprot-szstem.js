function reportSystem(input) {

 let sumNeeded = Number(input[0]);
 let index = 1;
 let command = input[index];

 let cashPayment = 0;
 let cashTotal = 0;
 let cardPayment = 0;
 let cardTotal = 0;
 let sumTotal = 0;

 index++;
 while (command !== 'End') {
  let currentCashPay = Number(command);
  let currentCardPay = Number(input[index]);

  if (currentCashPay > 100) {
   console.log(`Error in transaction!`);
  } else {
   console.log(`Product sold!`);
   cashTotal += currentCashPay;
   cashPayment++;
  }

  if (currentCardPay < 10) {
   console.log(`Error in transaction!`);
  } else {
   console.log(`Product sold!`);
   cardTotal += currentCardPay;
   cardPayment++;
  }

  sumTotal = cardTotal + cashTotal;

  if (sumTotal >= sumNeeded) {
   console.log(`Average CS: ${(cashTotal / cashPayment).toFixed(2)}`);
   console.log(`Average CC: ${(cardTotal / cardPayment).toFixed(2)}`);
   return;

  }

  index++;
  command = input[index];
  index++;

 }

console.log(`Failed to collect required money for charity.`);

}

// reportSystem(['500', '120', '8', '63', '256', '78', '317']);
reportSystem(['600', '86', '150', '98', '227', 'End']);


