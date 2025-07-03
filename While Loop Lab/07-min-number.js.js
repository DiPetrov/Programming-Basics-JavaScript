function minNumber(input) {
  let maxNumber = Number.MAX_SAFE_INTEGER;
  let index = 0;
  let command = input[index];

  while (command !== 'Stop') {
   currentNumber = Number(input[index]);

   if (currentNumber < maxNumber) {
    maxNumber = currentNumber;
   }

   index++;
   command = input[index]
  }

  console.log(maxNumber);
  
}

minNumber(['100', '99', '80', '70', 'Stop']);
minNumber(['-10', '20', '-30', 'Stop']);
minNumber(['999', 'Stop']);
minNumber(['-1', '-2', 'Stop']);
