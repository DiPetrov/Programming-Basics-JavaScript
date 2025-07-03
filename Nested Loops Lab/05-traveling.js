function traveling(input) {

let index = 0;
let command = input[index];


while (command !== 'End') {
let destination = command;

index++;
let targetSum = Number(input[index]);
let totalSavedMoney = 0;

while (totalSavedMoney < targetSum) {
 index++;
 let newSavedMoney = Number(input[index]);
 totalSavedMoney += newSavedMoney;
}

console.log(`Going to ${destination}!`);

index++;
command = input[index];
}
}

traveling([
  'Greece',

  '1000',

  '200',

  '200',

  '300',

  '100',

  '150',

  '240',

  'Spain',

  '1200',

  '300',

  '500',

  '193',

  '423',

  'End',
]);