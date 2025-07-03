function test(input) {
let index = 0;
let command = input[index];
let budgetRequired = 0;
let aniBudget = 0;


while(command !== 'End') {
 index++;
 budgetRequired = Number(input[index]);
 
 while (aniBudget < budgetRequired) {
  index++;
  let currentSavings = Number(input[index]);
  aniBudget += currentSavings

  if (aniBudget >= budgetRequired) {
   console.log(`Going to ${command}!`);
  }
 }

 aniBudget = 0;

 index++;
 command = input[index];
}
}
// test([
//   'Greece',

//   '1000',

//   '200',

//   '200',

//   '300',

//   '100',

//   '150',

//   '240',

//   'Spain',

//   '1200',

//   '300',

//   '500',

//   '193',

//   '423',

//   'End',
// ]);

test([
  'France',
  '2000',
  '300',
  '300',
  '200',
  '400',
  '190',
  '258',
  '360',
  'Portugal',
  '1450',
  '400',
  '400',
  '200',
  '300',
  '300',
  'Egypt',
  '1900',
  '1000',
  '280',
  '300',
  '500',
  'End',
]);