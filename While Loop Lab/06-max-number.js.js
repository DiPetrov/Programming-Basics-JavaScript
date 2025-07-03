function maxNumber(input) {

 let max = Number.MIN_SAFE_INTEGER;

 // 1. Initialization
 let index = 0;
 let command = input[index];

 // 2. Test/Condition
 while (command !== 'Stop') {
   let num = Number(command);

   if (num > max) {
     max = num;
   }

   // 3. Step/update
   index++;
   command = input[index];
 }

 console.log(max);
 
}



maxNumber(['100', '99', '80', '70', 'Stop']);