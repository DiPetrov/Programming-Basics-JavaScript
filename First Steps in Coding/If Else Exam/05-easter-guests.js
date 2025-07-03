function easterGuests(guestsAmount,lubosBudget) {


let cakesAmount = Math.ceil(guestsAmount / 3) 
let cakesCosts = cakesAmount * 4;
let eggsAmount = guestsAmount * 2;
let eggsCosts = eggsAmount * 0.45;

let totalCosts = eggsCosts + cakesCosts;

if (lubosBudget >= totalCosts) {
 console.log(`Lyubo bought ${cakesAmount} Easter bread and ${eggsAmount} eggs.`)
 console.log(`He has ${(lubosBudget - totalCosts).toFixed(2)} lv. left.`);
} else {
 console.log(`Lyubo doesn't have enough money.`);
 console.log(`He needs ${(totalCosts - lubosBudget).toFixed(2)} lv. more.`);
 
}

}
easterGuests(10,35)