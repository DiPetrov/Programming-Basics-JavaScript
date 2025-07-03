function cleverLily(age, washingMashinePrice, toyPrice) {

 let moneySaved = 0;
 let birthdayMoney = 10;
 let toysCount = 0;

 for (let birthday = 1; birthday <= age; birthday++) {
  if (birthday % 2 === 0) {
   moneySaved += birthdayMoney - 1;
   birthdayMoney += 10;
  } else {
   toysCount++
  }
 }

 let moneyFromToys = toysCount * toyPrice;
 let totalAmount = moneySaved + moneyFromToys;

 let diff = Math.abs(washingMashinePrice - totalAmount);


 if (totalAmount >= washingMashinePrice) {
  console.log(`Yes! ${diff.toFixed(2)}`);
 } else {
  console.log(`No! ${diff.toFixed(2)}`);
 }
}

cleverLily(10, 170.00, 6);
cleverLily(21, 1570.98, 3);