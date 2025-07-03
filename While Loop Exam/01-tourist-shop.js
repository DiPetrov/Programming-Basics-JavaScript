function touristShop(input) {

/* 1. Да се изчисли цената на екипировката
   2. Дали бюджетът ще стигне
   3. Промоция - всеки трети продукт е на половин цена! */

   let budget = Number(input[0]);
   let index = 1;
   let command = input[index];
   let productSum = 0;
   let productBought = 0;

   index++;

   while (command !== 'Stop') {
    let currentPrice = Number(input[index]);
    productBought++;

    if (index % 3 === 0) {
     currentPrice /= 2;
    } 

    if (currentPrice > budget) {
     console.log(`You don't have enough money!`);
     console.log(`You need ${(currentPrice - budget).toFixed(2)} leva!`);
     return;
    }

    budget -= currentPrice;
    productSum += currentPrice;

    index++;
    command = input[index];
    index++;
   }

   console.log(`You bought ${productBought} products for ${productSum.toFixed(2)} leva.`);

}

touristShop([
  '153.20',
  'Backpack',
  '25.20',
  'Shoes',
  '54',
  'Sunglasses',
  '30 ',
  'Stop',
]);

// touristShop([
//  "54",
// "Thermal underwear",
// "24",
// "Sunscreen",
// "45"
// ])

