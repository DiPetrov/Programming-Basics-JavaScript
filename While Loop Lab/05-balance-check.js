function accountBalance(input) {

// 1. Definition
let balance = 0;
let index = 0;
let command = input[index];

// 2. Test/condition
while (command !== 'NoMoreMoney') {
 let sumToDeposit = Number(command);
 
 if (sumToDeposit < 0) {
  console.log("Invalid operation!");
  break;
  
 }

  balance += sumToDeposit;
  console.log(`Increase: ${sumToDeposit.toFixed(2)}`);

  // 3. Step/update
  index++;
  command = input[index]
}

  console.log(`Total: ${balance.toFixed(2)}`);
  
}

// accountBalance(["5.51",

// "69.42",

// "100",

// "NoMoreMoney"]);

accountBalance(['120', '45.55', '-150']);