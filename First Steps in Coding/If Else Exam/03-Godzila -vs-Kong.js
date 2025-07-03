function godzillaVsKong(movieBudget, statistNumber, priceClothesPerStatist) {

 let decorPrice = movieBudget * 0.1;
 let statistClothesPrice = 0;
 
 if (statistNumber > 150) {
 statistClothesPrice = statistNumber * priceClothesPerStatist
 statistClothesPrice *= 0.9;
 } else {
 statistClothesPrice = statistNumber * priceClothesPerStatist;
 }

 let totalCosts = decorPrice + statistClothesPrice;

 if (totalCosts > movieBudget) {
  console.log(`Not enough money!`);
  console.log(`Wingard needs ${(totalCosts - movieBudget).toFixed(2)} leva more.`);
  
 } else {
  console.log(`Action!`);
  console.log(`Wingard starts filming with ${(movieBudget - totalCosts).toFixed(2)} leva left.`);
  
 }
}
godzillaVsKong(20000, 120, 55.5);
godzillaVsKong(15437.62, 186, 57.99);
godzillaVsKong(9587.88, 222, 55.68);
