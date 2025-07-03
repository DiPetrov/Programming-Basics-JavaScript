function carePuppy(input) {

let food = Number(input[0]) * 1000;
let index = 1;
let command = input[index];
let foodEaten = 0;


while (command !== 'Adopted') {
let currentFeed = Number(input[index]);
foodEaten += currentFeed;
index++;
command = input[index];
}
 
if (food >= foodEaten) {
 console.log(`Food is enough! Leftovers: ${(food - foodEaten)} grams.`);
} else {
 console.log(`Food is not enough. You need ${(foodEaten - food)} grams more.`);

}

}
carePuppy(['4', '130', '345', '400', '180', '230', '120', 'Adopted']);
carePuppy(["3",
"1000",
"1000",
"1000",
"Adopted"])
carePuppy(['2', '999', '456', '999', '999', '123', '456', 'Adopted']);


